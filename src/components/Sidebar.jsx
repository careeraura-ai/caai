import React from "react";
import {
  HomeIcon,
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

/**
 * Mini Sidebar (Option 1)
 * Props:
 * - collapsed (bool) -> true = narrow icons-only
 * - onToggle() -> toggle collapsed state
 * - active (string) -> 'home' | 'avatar' | 'chatbot' | 'reports' | 'settings'
 * - onNavigate(id)
 */
export default function Sidebar({ collapsed = true, onToggle, active, onNavigate }) {
  const items = [
    { id: "home", label: "Home", Icon: HomeIcon },
    { id: "avatar", label: "Avatar", Icon: UserCircleIcon },
    { id: "chatbot", label: "Chatbot", Icon: ChatBubbleLeftRightIcon },
    { id: "reports", label: "Reports", Icon: ChartBarIcon },
    { id: "settings", label: "Settings", Icon: Cog6ToothIcon },
  ];

  return (
    <aside
      className={`flex flex-col items-center gap-4 py-6 px-2 transition-all
      ${collapsed ? "w-20" : "w-64"} bg-gradient-to-b from-black/30 to-black/20 border-r border-white/5`}
    >
      <div className="w-full flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-600 to-cyan-400 shadow-lg`}
          >
            <span className="font-bold text-[var(--dark-bg)]">V</span>
          </div>
          {!collapsed && <div className="text-sm font-semibold">Vajra</div>}
        </div>

        <button
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-white/6 transition"
          title="Toggle"
        >
          <Bars3Icon className="w-5 h-5" />
        </button>
      </div>

      <nav className="mt-4 flex-1 w-full">
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => onNavigate(it.id)}
              className={`group w-full flex items-center gap-3 py-3 px-2 rounded-lg justify-start hover:bg-white/6 transition ${
                isActive ? "bg-white/8" : ""
              }`}
            >
              <it.Icon className={`w-6 h-6 ${isActive ? "text-accent" : "text-gray-300"}`} />
              {!collapsed && (
                <span className={`text-sm ${isActive ? "text-white" : "text-gray-300"}`}>
                  {it.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* bottom quick actions */}
      <div className="w-full px-2">
        {!collapsed && (
          <div className="p-2 rounded-lg glass-card flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/6 flex items-center justify-center">JD</div>
            <div>
              <div className="text-sm font-semibold">Jakajith</div>
              <div className="text-xs text-gray-300">Career seeker</div>
            </div>
          </div>
        )}

        {collapsed && (
          <div className="w-full flex justify-center py-2">
            <div className="w-10 h-10 rounded-lg bg-white/6 flex items-center justify-center">JD</div>
          </div>
        )}
      </div>
    </aside>
  );
}
