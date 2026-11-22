"""AdPilot SDK orchestration example. Full runnable starter is in the versioned ZIP.
Requires the accompanying gateway.py and engine.py from the local project.
All campaigns are SYNTHETIC. The LLM has no action execution tool.
"""
import os
from typing import Any

INSTRUCTIONS = """You are AdPilot, an advertising optimization copilot using synthetic data.
Use actual tools to investigate; do not pretend that the data is live Reddit reporting.
For campaign budget proposals check mature performance, reporting delay, delivery,
compatibility and candidate eligibility. Separate observed average CPA from unproven
marginal CPA. Unknown auction opportunity is not positive evidence.
Give at most three strongly supported suggestions, or zero when unsupported.
Only prepare a preview. The advertiser must approve execution outside this agent.
Never claim a campaign was updated unless a separate sandbox audit verifies it.
"""


def build_agent(gateway: Any, model: str | None = None) -> Any:
    from agents import Agent, function_tool

    @function_tool
    def get_campaigns() -> list[dict[str, Any]]:
        """List campaign IDs, objectives, budgets, targets and settings."""
        return gateway.get_campaigns()

    @function_tool
    def get_campaign_performance(campaign_id: str) -> dict[str, Any]:
        """Get dated historical campaign metrics and deterministic CPA."""
        return gateway.get_campaign_performance(campaign_id)

    @function_tool
    def get_conversion_reporting_status(campaign_id: str) -> dict[str, Any]:
        """Check maturity and freshness of conversion reporting."""
        return gateway.get_conversion_reporting_status(campaign_id)

    @function_tool
    def get_delivery_diagnostics(campaign_id: str) -> dict[str, Any]:
        """Check budget limitations and available auction evidence."""
        return gateway.get_delivery_diagnostics(campaign_id)

    @function_tool
    def evaluate_reallocation(donor_id: str, receiver_id: str) -> dict[str, Any]:
        """Validate comparability and budget-test eligibility."""
        return gateway.evaluate_reallocation(donor_id, receiver_id)

    @function_tool
    def preview_budget_changes(donor_id: str, receiver_id: str,
                               transfer_per_day: float) -> dict[str, Any]:
        """Prepare a nonexecuting budget change preview requiring human approval."""
        return gateway.preview_budget_changes(donor_id, receiver_id, transfer_per_day)

    return Agent(
        name="AdPilot Campaign Investigator",
        instructions=INSTRUCTIONS,
        model=model or os.getenv("ADPILOT_MODEL", "gpt-4.1-mini"),
        tools=[get_campaigns, get_campaign_performance,
               get_conversion_reporting_status, get_delivery_diagnostics,
               evaluate_reallocation, preview_budget_changes],
    )


async def ask_agent(gateway: Any, question: str,
                    history: list[Any] | None = None,
                    model: str | None = None) -> tuple[str, list[Any]]:
    """Actual OpenAI Agents SDK tool-calling run; requires API key and SDK."""
    if not os.getenv("OPENAI_API_KEY"):
        raise RuntimeError("Set OPENAI_API_KEY in the environment first")
    from agents import Runner
    result = await Runner.run(
        build_agent(gateway, model=model),
        [*(history or []), {"role": "user", "content": question}],
        max_turns=15,
    )
    return str(result.final_output), result.to_input_list()
