/**
 * SimRev Revenue Simulator - Formatting Utilities
 * Number and currency formatting functions
 */

/**
 * Format number as EUR currency
 * @param {number} value - Value to format
 * @param {number} decimals - Number of decimal places (default: 0)
 * @returns {string} Formatted currency string
 */
function formatEUR(value, decimals = 0) {
  if (isNaN(value) || value === null || value === undefined) {
    return '€ 0';
  }
  return '€ ' + value.toLocaleString('it-IT', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

/**
 * Format number as percentage
 * @param {number} value - Value to format (0.35 = 35%)
 * @param {number} decimals - Number of decimal places (default: 0)
 * @returns {string} Formatted percentage string
 */
function formatPercent(value, decimals = 0) {
  if (isNaN(value) || value === null || value === undefined) {
    return '0%';
  }
  return (value * 100).toFixed(decimals) + '%';
}

/**
 * Format large number with K/M suffix
 * @param {number} value - Value to format
 * @returns {string} Formatted string with suffix
 */
function formatCompact(value) {
  if (isNaN(value) || value === null || value === undefined) {
    return '0';
  }
  
  const absValue = Math.abs(value);
  if (absValue >= 1000000) {
    return (value / 1000000).toFixed(1) + 'M';
  } else if (absValue >= 1000) {
    return (value / 1000).toFixed(1) + 'K';
  }
  return value.toFixed(0);
}

/**
 * Format number with thousand separators
 * @param {number} value - Value to format
 * @param {number} decimals - Number of decimal places (default: 0)
 * @returns {string} Formatted number string
 */
function formatNumber(value, decimals = 0) {
  if (isNaN(value) || value === null || value === undefined) {
    return '0';
  }
  return value.toLocaleString('it-IT', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}
