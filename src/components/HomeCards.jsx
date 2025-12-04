import React from "react";

/**
 * HomeCards: the main control cards on the home screen
 * - onAction('chatbot'|'avatar'|'reports'|'settings'|'home')
 */
export default function HomeCards({ onAction = () => {} }) {
  const cards = [
    {
      id: "chatbot",
      title: "Start Chatbot",
      desc: "Quick conversational assessment using our LLM chatbot.",
      cta: "Open Chat",
    },
    {
      id: "avatar",
      title: "Start Avatar Mode",
      desc: "Interactive avatar asks questions and reads tone & voice.",
      cta: "Start Avatar",
    },
    {
      id: "progress",
      title: "Your Assessment Progress",
      desc: "Continue where you left - answers, partial results & suggestions.",
      cta: "Continue",
    },
    {
      id: "reports",
      title: "Career Reports",
      desc: "View generated partial reports and request full guidance.",
      cta: "View Reports",
    },
    {
      id: "settings",
      title: "Settings & Profile",
      desc: "Personalize how the assessment runs, notification preferences.",
      cta: "Open Settings",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((c) => (
        <article
          key={c.id}
          className="floating-card p-6 rounded-2xl shadow-lg border border-white/6 hover:scale-[1.02] transition transform"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">{c.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{c.desc}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => onAction(c.id === "progress" ? "home" : c.id)}
                  className="px-4 py-2 rounded-lg btn-animate bg-accent text-[var(--dark-bg)] font-semibold"
                >
                  {c.cta}
                </button>

                <button
                  onClick={() => alert("Demo: more info")}
                  className="px-3 py-2 rounded-lg bg-white/6 text-sm"
                >
                  Learn
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="w-24 h-24 rounded-xl bg-white/5 flex items-center justify-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20" stroke="#ffd166" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
