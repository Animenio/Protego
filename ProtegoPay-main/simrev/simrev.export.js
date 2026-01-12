/**
 * SimRev Revenue Simulator - Export Utilities
 * CSV export functionality
 */

/**
 * Export simulation results to CSV file
 * @param {Array} results - Simulation results
 * @param {Object} params - Simulation parameters
 */
function exportToCSV(results, params) {
  if (!results || results.length === 0) {
    alert('Nessun dato da esportare');
    return;
  }

  // CSV header
  const headers = [
    'Anno',
    'Utenti Totali',
    'Nuovi Utenti',
    'Utenti Retained',
    'Utenti con Transazioni',
    'Utenti Assicurati',
    'Nuovi Assicurati',
    'Depositi per Utente (€)',
    'Volume Gross (€)',
    'Premi da Split (€)',
    'Premio Fisso (€)',
    'Versamenti al Fondo (€)',
    'Volume Merchant (€)',
    'Contributo Netto Investito (€)',
    'AUM Inizio (€)',
    'AUM Fine (€)',
    'AUM Medio (€)',
    'Ricavi Sottoscrizione (€)',
    'Ricavi Advisory (€)',
    'Ricavi Transazioni (€)',
    'Ricavi Totali (€)'
  ];

  // Build CSV content
  let csvContent = headers.join(',') + '\n';

  results.forEach(r => {
    const row = [
      r.year,
      r.users.toFixed(0),
      r.newUsers.toFixed(0),
      r.retainedUsers.toFixed(0),
      r.txUsers.toFixed(0),
      r.insuredUsers.toFixed(0),
      r.newInsured.toFixed(0),
      r.depositPerUser.toFixed(2),
      r.grossVolume.toFixed(2),
      r.premiumsSplit.toFixed(2),
      r.premiumFixed.toFixed(2),
      r.fundInflowGross.toFixed(2),
      r.merchantVolume.toFixed(2),
      r.netContrib.toFixed(2),
      r.aumBegin.toFixed(2),
      r.aumEnd.toFixed(2),
      r.aumAvg.toFixed(2),
      r.revenueSub.toFixed(2),
      r.revenueAdv.toFixed(2),
      r.revenueTx.toFixed(2),
      r.revenueTotal.toFixed(2)
    ];
    csvContent += row.join(',') + '\n';
  });

  // Add parameters as metadata at the end
  csvContent += '\n';
  csvContent += 'Parametri Simulazione\n';
  csvContent += `Utenti Anno 1,${params.U1}\n`;
  csvContent += `Anni Simulazione,${params.T}\n`;
  csvContent += `Crescita Utenti,${(params.gU * 100).toFixed(0)}%\n`;
  csvContent += `Retention,${(params.r * 100).toFixed(0)}%\n`;
  csvContent += `Premio Fisso Sottoscrizione,€${params.F}\n`;
  csvContent += `Depositi per Utente,€${params.D0}\n`;
  csvContent += `Crescita Depositi,${(params.gD * 100).toFixed(0)}%\n`;
  csvContent += `Utenti via ProtegoPay,${(params.aTx * 100).toFixed(0)}%\n`;
  csvContent += `Split Rate,${(params.splitRate * 100).toFixed(1)}%\n`;
  csvContent += `Adozione Polizza,${(params.cPolicy * 100).toFixed(0)}%\n`;
  csvContent += `Rendimento,${(params.ret * 100).toFixed(0)}%\n`;
  csvContent += `Fee Sottoscrizione,${(params.fSub * 100).toFixed(1)}%\n`;
  csvContent += `Fee Advisory,${(params.fAdv * 100).toFixed(2)}%\n`;
  csvContent += `Fee Transazioni,${(params.fTx * 100).toFixed(2)}%\n`;
  csvContent += `Base Fee Transazioni,${params.txFeeBase}\n`;
  csvContent += `Anno Inizio Fee Tx,${params.startTxYear}\n`;
  csvContent += `Base AUM,${params.aumBase}\n`;
  csvContent += `Metodo Nuovi Utenti,${params.newUsersMethod}\n`;

  // Create blob and download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `simrev_${new Date().getTime()}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
