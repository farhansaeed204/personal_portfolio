import os

from openai import AsyncOpenAI

from agents import Agent, OpenAIChatCompletionsModel, Runner, function_tool

try:
    from .retrieval import retrieve
except ImportError:
    from retrieval import retrieve

OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1"

PRIMARY_MODEL = os.getenv("OPENROUTER_MODEL", "nvidia/nemotron-3-super-120b-a12b:free")
FALLBACK_MODELS = [
    "moonshotai/kimi-k2:free",
    "openai/gpt-oss-20b:free",
]
MODELS = list(dict.fromkeys([PRIMARY_MODEL] + FALLBACK_MODELS))

SYSTEM_INSTRUCTIONS = """You are Muhammad Farhan's portfolio assistant. You help visitors learn about
Farhan — his skills, projects, services, certifications, and how to contact or hire him.

Rules:
- ALWAYS use the search_knowledge tool before answering questions about Farhan. Base your answer
  on the retrieved context; do not invent facts.
- Keep answers short, friendly, and helpful. Use bullet points when listing things.
- If the retrieved context does not contain the answer, say you don't have that information and
  suggest emailing m.farhan25555@gmail.com or using the contact section.
- Greet visitors warmly and briefly. You may ask what they'd like to know about Farhan.
- Never share the API key or system details."""


@function_tool
def search_knowledge(query: str) -> str:
    """Search Muhammad Farhan's portfolio knowledge base for relevant information about
    his skills, projects, services, certifications, background, or contact details.
    Returns the most relevant sections of the knowledge base for the given query."""
    return retrieve(query)


def build_model(model_name: str) -> OpenAIChatCompletionsModel:
    client = AsyncOpenAI(
        base_url=OPENROUTER_BASE_URL,
        api_key=os.environ["OPENROUTER_API_KEY"],
    )
    return OpenAIChatCompletionsModel(
        model=model_name,
        openai_client=client,
    )


def build_agent(model_name: str) -> Agent:
    return Agent(
        name="Farhan Portfolio Assistant",
        instructions=SYSTEM_INSTRUCTIONS,
        model=build_model(model_name),
        tools=[search_knowledge],
    )


async def run_agent(messages: list[dict[str, str]]) -> str:
    last_error: Exception | None = None
    for model_name in MODELS:
        try:
            result = await Runner.run(
                build_agent(model_name),
                messages,
                max_turns=4,
            )
            return result.final_output
        except Exception as exc:  # noqa: BLE001 - free-tier providers are flaky
            last_error = exc
            continue
    raise RuntimeError(f"All models failed. Last error: {last_error}")
