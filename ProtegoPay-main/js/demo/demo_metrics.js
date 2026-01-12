(function () {
  const counters = {
    decisions: 0,
    approved: 0,
    rejected: 0,
    timeout: 0
  };

  function inc(id) {
    const el = document.getElementById(id);
    if (el) el.textContent = counters[id];
  }

  window.DEMO_METRICS = {
    record(status) {
      counters.decisions++;
      if (status === "APPROVED") counters.approved++;
      if (status === "REJECTED") counters.rejected++;
      if (status === "TIMEOUT") counters.timeout++;

      inc("kpi_decisions");
      inc("kpi_approved");
      inc("kpi_rejected");
      inc("kpi_timeout");
    }
  };
})();
