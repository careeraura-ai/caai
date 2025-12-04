import React, { useState } from "react";

/**
 * FloatingChatButton: bottom-right circular button that opens a chat modal.
 * Simple demo chat - replace with your real Chat component / LLM integration.
 */
export default function FloatingChatButton() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: "Hi! Need career guidance or to start an assessment?" },
  ]);
  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;
    const userMsg = { id: Date.now(), from: "user", text };
    setMessages((m) => [...m, userMsg]);
    setText("");

    // Demo bot reply (replace with LLM call)
    setTimeout(() => {
      setMessages((m) => [...m, { id: Date.now() + 1, from: "bot", text: "Thanks — we'll guide you. Type 'start' to begin." }]);
    }, 700);
  }

  return (
    <>
      {/* Chat button */}
      <div className="fixed right-6 bottom-6 z-50">
        <button
          onClick={() => setOpen((s) => !s)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 shadow-2xl flex items-center justify-center text-white text-xl"
          title="Chat with Vajra"
        >
          💬
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed right-6 bottom-20 z-50 w-[340px] md:w-[420px]">
          <div className="glass-card rounded-2xl shadow-lg overflow-hidden">
            <div className="px-4 py-3 border-b border-white/6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/6 flex items-center justify-center">V</div>
                <div>
                  <div className="text-sm font-semibold">Vajra Assistant</div>
                  <div className="text-xs text-gray-300">AI-guided support</div>
                </div>
              </div>

              <button className="p-2" onClick={() => setOpen(false)}>✕</button>
            </div>

            <div className="p-3 h-64 overflow-y-auto space-y-3">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.from === "bot" ? "justify-start" : "justify-end"}`}>
                  <div className={`${m.from === "bot" ? "bg-white/6" : "bg-accent text-[var(--dark-bg)]"} p-3 rounded-xl max-w-[80%]`}>
                    <div className="text-sm">{m.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-white/6 flex gap-2 items-center">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 rounded-xl bg-white/5 focus:outline-none"
                onKeyDown={(e) => e.key === "Enter" && send()}
              />
              <button onClick={send} className="px-4 py-2 rounded-xl bg-accent text-[var(--dark-bg)] font-semibold">Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
