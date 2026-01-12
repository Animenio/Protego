/**
 * SimRev Revenue Simulator - Mathematical Core
 * Pure functions for revenue calculations
 */

/**
 * Calculate revenue simulation for T years
 * @param {Object} params - Simulation parameters
 * @returns {Array} Array of yearly data objects
 */
function calculateSimulation(params) {
  const {
    U1,           // Initial users year 1
    T,            // Years to simulate
    gU,           // User growth rate (default 0.35)
    r,            // Retention rate (default 0.85)
    c,            // Coverage rate (default 1.0 or 0.7) - DEPRECATED, kept for backward compatibility
    F,            // Fixed one-time premium per subscription (default 50)
    D0,           // Deposits per user (default 2700)
    gD,           // Deposit growth rate (default 0)
    aTx,          // % users using ProtegoPay (default 1.0 = 100%)
    splitRate,    // Split rate to insurance fund (default 0.025 = 2.5%)
    cPolicy,      // Policy adoption rate (default 1.0 = 100%)
    ret,          // Return rate (default 0.03)
    fSub,         // Subscription fee (default 0.05)
    fAdv,         // Advisory fee (default 0.008)
    fTx,          // Merchant transaction fee (default 0.005 = 0.5%)
    txFeeBase,    // Transaction fee base: 'GROSS' or 'MERCHANT' (default 'GROSS')
    startTxYear,  // Year to start merchant fees (default 4)
    aumBase,      // AUM base for advisory: 'avg' or 'end' (default 'avg')
    newUsersMethod // Method: 'incremental' or 'percentage' (default 'incremental')
  } = params;

  const results = [];
  let U_prev = 0;
  let AUM_begin = 0;
  let InsuredUsers_prev = 0;

  for (let y = 1; y <= T; y++) {
    const result = {};
    result.year = y;

    // Calculate Users
    let U_y;
    let New_y;
    let retained;

    if (y === 1) {
      U_y = U1;
      New_y = U1;
      retained = 0;
    } else {
      retained = U_prev * r;
      
      if (newUsersMethod === 'percentage') {
        New_y = U_prev * gU;
        U_y = retained + New_y;
      } else { // incremental (default)
        U_y = U_prev * (1 + gU) * r;
        New_y = Math.max(0, U_y - retained);
      }
    }

    result.users = U_y;
    result.newUsers = New_y;
    result.retainedUsers = retained;

    // Calculate Deposits per user (transaction-driven model)
    const D_y = D0 * Math.pow(1 + gD, y - 1);
    result.depositPerUser = D_y;

    // Calculate Transaction users and Insured users
    const TxUsers_y = U_y * aTx;
    result.txUsers = TxUsers_y;
    
    const InsuredUsers_y = TxUsers_y * cPolicy;
    result.insuredUsers = InsuredUsers_y;

    // Calculate new insured users (for subscription fee)
    let NewInsured_y;
    if (y === 1) {
      NewInsured_y = InsuredUsers_y;
    } else {
      const retainedInsured = InsuredUsers_prev * r;
      NewInsured_y = Math.max(0, InsuredUsers_y - retainedInsured);
    }
    result.newInsured = NewInsured_y;

    // Calculate Gross Volume (total deposits)
    const GrossVolume_y = U_y * aTx * D_y;
    result.grossVolume = GrossVolume_y;

    // Calculate Premiums from split (recurring)
    const PremiumsSplit_y = GrossVolume_y * cPolicy * splitRate;
    result.premiumsSplit = PremiumsSplit_y;

    // Calculate Fixed one-time premium (NEW)
    const PremiumFixed_y = NewInsured_y * F;
    result.premiumFixed = PremiumFixed_y;

    // Calculate total Fund Inflow (gross)
    const FundInflowGross_y = PremiumsSplit_y + PremiumFixed_y;
    result.fundInflowGross = FundInflowGross_y;

    // Calculate Merchant Volume (post-split, does NOT include fixed premium)
    const MerchantVolume_y = GrossVolume_y - PremiumsSplit_y;
    result.merchantVolume = MerchantVolume_y;

    // Calculate Subscription Revenue (fee applied ONLY to split premiums, NOT to fixed premium)
    const Rev_Sub_y = PremiumsSplit_y * fSub;
    result.revenueSub = Rev_Sub_y;

    // Calculate Net Contribution to Investment (after subscription fee)
    // Fund receives: split premiums (minus sub fee) + fixed premium (no fee applied)
    const NetContrib_y = (PremiumsSplit_y - Rev_Sub_y) + PremiumFixed_y;
    result.netContrib = NetContrib_y;

    // Legacy field for backward compatibility
    result.totalPremiums = FundInflowGross_y;

    // Calculate AUM
    result.aumBegin = AUM_begin;
    const AUM_end_y = (AUM_begin * (1 + ret)) + NetContrib_y;
    result.aumEnd = AUM_end_y;

    const AUM_avg_y = (AUM_begin + AUM_end_y) / 2;
    result.aumAvg = AUM_avg_y;

    // Calculate Advisory Revenue
    const AUM_base_y = aumBase === 'end' ? AUM_end_y : AUM_avg_y;
    const Rev_Adv_y = AUM_base_y * fAdv;
    result.revenueAdv = Rev_Adv_y;

    // Calculate Merchant Transaction Fee (from year startTxYear onwards)
    let Rev_Tx_y = 0;
    if (y >= startTxYear) {
      const TxBase_y = txFeeBase === 'GROSS' ? GrossVolume_y : MerchantVolume_y;
      Rev_Tx_y = TxBase_y * fTx;
    }
    result.revenueTx = Rev_Tx_y;

    // Calculate Total Revenue (3 components)
    result.revenueTotal = Rev_Sub_y + Rev_Adv_y + Rev_Tx_y;

    // Store for next iteration
    U_prev = U_y;
    InsuredUsers_prev = InsuredUsers_y;
    AUM_begin = AUM_end_y;

    results.push(result);
  }

  return results;
}

/**
 * Calculate cumulative totals from simulation results
 * @param {Array} results - Simulation results
 * @returns {Object} Cumulative metrics
 */
function calculateCumulatives(results) {
  let cumRevSub = 0;
  let cumRevAdv = 0;
  let cumRevTx = 0;
  let cumRevTotal = 0;
  let cumPremiums = 0;
  let cumGrossVolume = 0;

  results.forEach(r => {
    cumRevSub += r.revenueSub;
    cumRevAdv += r.revenueAdv;
    cumRevTx += r.revenueTx;
    cumRevTotal += r.revenueTotal;
    cumPremiums += r.totalPremiums;
    cumGrossVolume += r.grossVolume;
  });

  return {
    cumRevSub,
    cumRevAdv,
    cumRevTx,
    cumRevTotal,
    cumPremiums,
    cumGrossVolume
  };
}

/**
 * Get default simulation parameters
 * @returns {Object} Default parameters
 */
function getDefaultParams() {
  return {
    U1: 1000,
    T: 5,
    gU: 0.35,
    r: 0.85,
    c: 1.0,          // Deprecated but kept for backward compatibility
    F: 50,           // Fixed one-time premium per subscription (new)
    D0: 2700,        // Deposits per user
    gD: 0.0,         // Deposit growth rate
    aTx: 1.0,        // % users using ProtegoPay
    splitRate: 0.025, // Split rate to insurance fund 2.5%
    cPolicy: 1.0,    // Policy adoption rate 100%
    ret: 0.03,
    fSub: 0.05,
    fAdv: 0.008,
    fTx: 0.005,      // Merchant transaction fee 0.5%
    txFeeBase: 'GROSS', // Transaction fee base
    startTxYear: 4,  // Year to start merchant fees
    aumBase: 'avg',
    newUsersMethod: 'incremental'
  };
}
