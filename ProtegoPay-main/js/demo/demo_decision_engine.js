(function () {
  if (!window.UI_CONTRACT) {
    console.error("UI_CONTRACT not loaded");
    return;
  }

  async function callDecisionAPI(scenario) {
    const res = await fetch("/api/decision", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scenario })
    });
    return res.json();
  }

  function writeDecision({ status, reason_code, next_action, trace_id, timestamp }) {
    const set = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };
    set("outStatus", status);
    set("outReasonCode", reason_code);
    set("outNextAction", next_action);
    set("outTraceId", trace_id);
    set("outTimestamp", timestamp);
  }

  function writeTrace(lines) {
    const pre = document.getElementById("tracePre");
    if (!pre) return;
    pre.textContent = lines.join("\n");
  }

  async function runDecision(scnId) {
    writeDecision({
      status: "—",
      reason_code: "—",
      next_action: "—",
      trace_id: "—",
      timestamp: "—"
    });
    writeTrace(["Calling decision API…"]);

    try {
      const data = await callDecisionAPI(scnId);
      writeDecision(data);
      window.DEMO_METRICS && window.DEMO_METRICS.record(data.status);
      writeTrace([
        `[${data.timestamp}] API decision result`,
        ...data.trace
      ]);
    } catch (err) {
      writeDecision({
        status: "ERROR",
        reason_code: "ERROR_INTERNAL",
        next_action: "CONTACT_SUPPORT",
        trace_id: "—",
        timestamp: new Date().toISOString()
      });
      writeTrace(["API call failed"]);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const sel = document.getElementById("demoScenarioSelect");
    if (!sel) return;

    sel.addEventListener("change", function () {
      runDecision(sel.value);
    });

    runDecision(sel.value);
  });
})();
