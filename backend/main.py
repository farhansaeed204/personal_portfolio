import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

try:
    from .agent import run_agent
except ImportError:
    from agent import run_agent

load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://personal-portfolio-farhansaeed204.vercel.app",
]

app = FastAPI(title="Portfolio Chatbot API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_methods=["POST"],
    allow_headers=["*"],
)


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    messages: list[ChatMessage]


class ChatResponse(BaseModel):
    reply: str


@app.post("/api/chat")
async def chat(req: ChatRequest) -> ChatResponse:
    history = [
        {"role": msg.role, "content": msg.content}
        for msg in req.messages
        if msg.role in ("user", "assistant") and msg.content.strip()
    ]
    if not history:
        history = [{"role": "user", "content": "Hello"}]
    try:
        reply = await run_agent(history)
    except Exception:
        reply = (
            "I'm having trouble reaching my AI service right now. "
            "Please try again in a few minutes, or email Farhan directly at "
            "m.farhan25555@gmail.com."
        )
    return ChatResponse(reply=reply)


@app.get("/api/health")
async def health() -> dict[str, str]:
    return {"status": "ok", "model": os.getenv("OPENROUTER_MODEL", "default")}
