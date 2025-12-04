import React from "react";

export default function Topbar({ collapsed = true, onToggle }) {
  return (
    <header className="w-full bg-transparent border-b border-white/5 px-6 py-4 flex items-center justify-between sticky top-0 z-20 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggle}
          className="p-2 rounded-md hover:bg-white/6 transition mr-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <div className="text-sm text-gray-300">Dashboard</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:block">
          <input
            placeholder="Search assessments, reports..."
            className="px-3 py-2 rounded-xl bg-white/5 placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <button className="p-2 rounded-full hover:bg-white/6 transition">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M12 14c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex items-center gap-3 ml-3">
          <div className="text-right mr-2 hidden md:block">
            <div className="text-sm font-semibold">Jakajith</div>
            <div className="text-xs text-gray-400">Member</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center text-[var(--dark-bg)] font-bold">J</div>
        </div>
      </div>
    </header>
  );
}
