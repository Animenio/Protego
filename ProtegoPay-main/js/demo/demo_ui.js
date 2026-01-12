(function () {
  if (!window.UI_CONTRACT) {
    console.error("UI_CONTRACT not loaded");
    return;
  }

  const scenarios = window.UI_CONTRACT.DEMO_SCENARIOS;

  const sel = document.getElementById("demoScenarioSelect");
  const selectedLabel = document.getElementById("demoScenarioSelectedLabel");

  function setDecisionBoxEmpty() {
    const set = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };
    set("outStatus", "—");
    set("outReasonCode", "—");
    set("outNextAction", "—");
    set("outTraceId", "—");
    set("outTimestamp", "—");
  }

  function initScenarioSelect() {
    if (!sel) return;

    sel.innerHTML = "";
    scenarios.forEach((s) => {
      const opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = s.label;
      sel.appendChild(opt);
    });

    sel.addEventListener("change", () => {
      const picked = scenarios.find((x) => x.id === sel.value);
      if (picked && selectedLabel) {
        selectedLabel.textContent = `Selected scenario: ${picked.label}`;
      }
      setDecisionBoxEmpty();
      // NOTE: No decision logic in this step.
    });

    // default selection
    sel.value = scenarios[0].id;
    const picked = scenarios[0];
    if (selectedLabel) selectedLabel.textContent = `Selected scenario: ${picked.label}`;
  }

  // init
  initScenarioSelect();
  setDecisionBoxEmpty();
})();
