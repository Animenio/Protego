export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { scenario } = req.body || {};

  const nowISO = () => new Date().toISOString();
  const makeTraceId = () =>
    "TRACE-" + Math.random().toString(36).slice(2, 10).toUpperCase();

  const base = {
    trace_id: makeTraceId(),
    timestamp: nowISO()
  };

  if (scenario === "SCN_OK") {
    return res.status(200).json({
      ...base,
      status: "APPROVED",
      reason_code: "ALLOW_OK",
      next_action: "PROCEED",
      trace: [
        "Decision start",
        "Limits OK",
        "Cooldown inactive",
        "Split applied (SIMULATED)",
        "Provider confirmed (SIMULATED)"
      ]
    });
  }

  if (scenario === "SCN_LIMIT") {
    return res.status(200).json({
      ...base,
      status: "REJECTED",
      reason_code: "BLOCK_WEEKLY_LIMIT_EXCEEDED",
      next_action: "WAIT_UNTIL_RESET",
      trace: [
        "Decision start",
        "Weekly limit exceeded",
        "Blocked before provider call"
      ]
    });
  }

  if (scenario === "SCN_TIMEOUT") {
    return res.status(200).json({
      ...base,
      status: "TIMEOUT",
      reason_code: "TIMEOUT_PROVIDER",
      next_action: "CHECK_STATUS",
      trace: [
        "Decision start",
        "Limits OK",
        "Provider call initiated",
        "No response within timeout window",
        "Reconciliation pending (SIMULATED)"
      ]
    });
  }

  return res.status(400).json({
    ...base,
    status: "ERROR",
    reason_code: "ERROR_INTERNAL",
    next_action: "CONTACT_SUPPORT",
    trace: ["Unknown scenario"]
  });
}
