import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, Sparkles, X } from 'lucide-react'
import { API_BASE_URL } from '../config'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME: Message = {
  role: 'assistant',
  content:
    "Hi! I'm Farhan's AI assistant. Ask me about his skills, projects, services, or how to contact him.",
}

const SUGGESTIONS = ['What are his skills?', 'Tell me about Stokly', 'How can I hire him?']

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, loading, open])

  const send = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    const nextMessages: Message[] = [...messages, { role: 'user', content: trimmed }]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await res.json()
      setMessages([...nextMessages, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: 'assistant',
          content: "Sorry, I couldn't reach my AI service. Please try again in a moment.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          className="flex flex-col w-[calc(100vw-3rem)] max-w-[380px] h-[520px] max-h-[70vh] rounded-[18px] overflow-hidden shadow-2xl"
          style={{
            background: '#141414',
            border: '1px solid rgba(215,226,234,0.12)',
          }}
        >
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            }}
          >
            <div className="flex items-center gap-2.5">
              <Sparkles size={18} color="#FFFFFF" />
              <div>
                <p className="text-white text-sm font-semibold leading-tight">Farhan&apos;s Assistant</p>
                <p className="text-white/70 text-[11px] leading-tight">RAG · OpenAI Agents SDK</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3.5 py-2.5 rounded-[14px] text-[13px] leading-relaxed whitespace-pre-wrap ${
                  m.role === 'user' ? 'self-end' : 'self-start'
                }`}
                style={
                  m.role === 'user'
                    ? {
                        background: 'linear-gradient(123deg, #B600A8 0%, #7621B0 100%)',
                        color: '#FFFFFF',
                      }
                    : { background: 'rgba(215,226,234,0.06)', color: '#D7E2EA' }
                }
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div
                className="self-start px-3.5 py-2.5 rounded-[14px] text-[13px]"
                style={{ background: 'rgba(215,226,234,0.06)', color: '#D7E2EA' }}
              >
                Thinking...
              </div>
            )}
          </div>

          <div className="px-4 pb-3 flex flex-col gap-2">
            {messages.length <= 1 && !loading && (
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-[11px] px-3 py-1.5 rounded-full transition-opacity hover:opacity-80"
                    style={{
                      border: '1px solid rgba(215,226,234,0.15)',
                      color: '#D7E2EA',
                      background: 'rgba(215,226,234,0.04)',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <form
              className="flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Farhan..."
                className="flex-1 px-4 py-3 rounded-[14px] text-[13px] outline-none"
                style={{
                  background: 'rgba(215,226,234,0.04)',
                  border: '1px solid rgba(215,226,234,0.1)',
                  color: '#D7E2EA',
                }}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="p-3 rounded-[14px] disabled:opacity-50 transition-opacity"
                style={{ background: 'linear-gradient(123deg, #B600A8 0%, #7621B0 100%)' }}
                aria-label="Send message"
              >
                <Send size={16} color="#FFFFFF" />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="p-4 rounded-full shadow-lg transition-transform hover:scale-105"
        style={{ background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' }}
        aria-label="Open chat"
      >
        {open ? <X size={22} color="#FFFFFF" /> : <MessageCircle size={22} color="#FFFFFF" />}
      </button>
    </div>
  )
}
