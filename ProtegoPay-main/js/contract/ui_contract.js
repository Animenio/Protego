window.UI_CONTRACT = {
  STATUS: ["APPROVED", "REJECTED", "TIMEOUT", "ERROR"],

  REASON_CODE: [
    "ALLOW_OK",

    "BLOCK_WEEKLY_LIMIT_EXCEEDED",
    "BLOCK_DAILY_LIMIT_EXCEEDED",
    "BLOCK_COOLDOWN_ACTIVE",
    "BLOCK_MIN_DEPOSIT_NOT_MET",

    "TIMEOUT_PROVIDER",
    "ERROR_INTERNAL"
  ],

  NEXT_ACTION: [
    "PROCEED",
    "WAIT_UNTIL_RESET",
    "WAIT_UNTIL_COOLDOWN_END",
    "RETRY_LATER",
    "CHECK_STATUS",
    "CONTACT_SUPPORT"
  ],

  DEMO_SCENARIOS: [
    {
      id: "SCN_OK",
      label: "Scenario A — OK (approved split)",
      description: "Deposit approved. Split applied (e.g., 95/5)."
    },
    {
      id: "SCN_LIMIT",
      label: "Scenario B — LIMIT (blocked immediately)",
      description: "Deposit blocked due to user limit or cooldown."
    },
    {
      id: "SCN_TIMEOUT",
      label: "Scenario C — TIMEOUT (provider latency)",
      description: "Provider does not respond in time. Status timeout/pending."
    }
  ]
};
