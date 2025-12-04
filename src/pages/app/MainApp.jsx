// import React, { useState } from "react";
// import Sidebar from "../../components/Sidebar.jsx";
// import Topbar from "../../components/Topbar.jsx";
// import HomeCards from "../../components/HomeCards.jsx";
// import FloatingChatBot from "../../components/FloatingChatbot";
// import { useNavigate } from "react-router-dom";

// export default function MainApp({ active: initialTab = "home" }) {
//   const [collapsed, setCollapsed] = useState(true); // mini collapsed by default
//   const [active, setActive] = useState(initialTab); // which view is active (home, avatar, chatbot, reports, settings)
//     const nav = useNavigate();

//   return (
//     <div className="min-h-screen flex bg-[var(--dark-bg)] text-white">
//       {/* Sidebar */}
//       <Sidebar
//         collapsed={collapsed}
//         onToggle={() => setCollapsed((s) => !s)}
//         active={active}
//         onNavigate={(v) => setActive(v)}
//       />

//       {/* Main content area */}
//       <div className="flex-1 flex flex-col">
//         <Topbar collapsed={collapsed} onToggle={() => setCollapsed(false)} />

//         <main className="flex-1 overflow-auto p-6">
//           {/* Breadcrumb / page heading */}
//           <div className="max-w-7xl mx-auto">
//             <div className="flex items-center justify-between gap-4 mb-6">
//               <div>
//                 <h1 className="text-2xl md:text-3xl font-heading tracking-tight">
//                   {active === "home" && "Welcome back"}
//                   {active === "avatar" && "Avatar Mode"}
//                   {active === "chatbot" && "Chatbot Mode"}
//                   {active === "reports" && "Your Reports"}
//                   {active === "settings" && "Settings"}
//                 </h1>
//                 <p className="text-sm text-gray-300 mt-1">
//                   {active === "home" && "Start an assessment or continue where you left off."}
//                 </p>
//               </div>
//               <div className="hidden sm:flex gap-3 items-center">
//                 <button className="px-4 py-2 rounded-xl btn-animate bg-white/6">New session</button>
//                 <button className="px-4 py-2 rounded-xl bg-accent text-[var(--dark-bg)] font-semibold">Quick Start</button>
//               </div>
//             </div>

//             {/* page content: for now show HomeCards when home selected */}
//             <div>
//               {active === "home" && <HomeCards onAction={(v) => setActive(v)} />}
//               {active === "avatar" && (
//                 <div className="glass-card p-6 rounded-xl shadow-lg">
//                   <h2 className="font-bold text-xl mb-3">Avatar Mode</h2>
//                   <p className="text-gray-300">Avatar interactive assessment will load here (Lottie / Rive + voice capture).</p>
//                 </div>
//               )}
//               {active === "chatbot" && (
//                 <div className="glass-card p-6 rounded-xl shadow-lg">
//                   <h2 className="font-bold text-xl mb-3">Chatbot</h2>
//                   <p className="text-gray-300">Chat UI will open from the floating chat. You can also place inline chat here.</p>
//                 </div>
//               )}
//               {active === "reports" && (
//                 <div className="glass-card p-6 rounded-xl shadow-lg">
//                   <h2 className="font-bold text-xl mb-3">Your Reports</h2>
//                   <p className="text-gray-300">List of generated partial reports and Read More actions.</p>
//                 </div>
//               )}
//               {active === "settings" && (
//                 <div className="glass-card p-6 rounded-xl shadow-lg">
//                   <h2 className="font-bold text-xl mb-3">Settings</h2>
//                   <p className="text-gray-300">User preferences and account settings.</p>
//                 </div>
//               )}
//             </div>

//             {/* footer small */}
//             <div className="mt-10 text-sm text-gray-500">
//               © {new Date().getFullYear()} CareerAura AI — Career Assessment Platform
//             </div>
//           </div>
//         </main>
//       </div>

//       <FloatingChatBot/>
//     </div>
//   );
// }
// // src/pages/app/MainApp.jsx
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// import Sidebar from "../../components/Sidebar.jsx";
// import Topbar from "../../components/Topbar.jsx";
// import HomeCards from "../../components/HomeCards.jsx";
// import FloatingChatBot from "../../components/FloatingChatbot";

// // Pages
// import AvatarAssessment from "./AvatarAssessment";
// import ChatbotAssessment from "./ChatbotAssessment";

// export default function MainApp() {
//   const location = useLocation();

//   // Detect active tab from URL
//   const path = location.pathname.replace("/app", "") || "/";
//   const initial =
//     path === "/" ? "home" :
//     path === "/avatar" ? "avatar" :
//     path === "/chatbot" ? "chatbot" :
//     path === "/reports" ? "reports" :
//     path === "/settings" ? "settings" : "home";

//   const [collapsed, setCollapsed] = useState(true);
//   const [active, setActive] = useState(initial);

//   // Sync active tab when route changes
//   useEffect(() => {
//     setActive(initial);
//   }, [location.pathname]);

//   return (
//     <div className="min-h-screen flex bg-[var(--dark-bg)] text-white">
//       {/* Sidebar */}
//       <Sidebar
//         collapsed={collapsed}
//         onToggle={() => setCollapsed((s) => !s)}
//         active={active}
//         onNavigate={(v) => setActive(v)}
//       />

//       {/* Main content */}
//       <div className="flex-1 flex flex-col">
//         <Topbar collapsed={collapsed} onToggle={() => setCollapsed(false)} />

//         <main className="flex-1 overflow-auto p-6">
//           <div className="max-w-7xl mx-auto">
//             {/* Header */}
//             <div className="flex items-center justify-between gap-4 mb-6">
//               <div>
//                 <h1 className="text-2xl md:text-3xl font-heading tracking-tight">
//                   {active === "home" && "Welcome back"}
//                   {active === "avatar" && "Avatar Mode"}
//                   {active === "chatbot" && "Chatbot Mode"}
//                   {active === "reports" && "Your Reports"}
//                   {active === "settings" && "Settings"}
//                 </h1>
//                 <p className="text-sm text-gray-300 mt-1">
//                   {active === "home" &&
//                     "Start an assessment or continue where you left off."}
//                 </p>
//               </div>

//               <div className="hidden sm:flex gap-3 items-center">
//                 <button className="px-4 py-2 rounded-xl btn-animate bg-white/6">
//                   New session
//                 </button>
//                 <button className="px-4 py-2 rounded-xl bg-accent text-[var(--dark-bg)] font-semibold">
//                   Quick Start
//                 </button>
//               </div>
//             </div>

//             {/* Content Switcher */}
//             <div>
//               {active === "home" && <HomeCards onAction={(v) => setActive(v)} />}
//               {active === "avatar" && <AvatarAssessment />}
//               {active === "chatbot" && <ChatbotAssessment />}

//               {active === "reports" && (
//                 <div className="glass-card p-6 rounded-xl shadow-lg">
//                   <h2 className="font-bold text-xl mb-3">Your Reports</h2>
//                   <p className="text-gray-300">
//                     List of generated partial reports and Read More actions.
//                   </p>
//                 </div>
//               )}

//               {active === "settings" && (
//                 <div className="glass-card p-6 rounded-xl shadow-lg">
//                   <h2 className="font-bold text-xl mb-3">Settings</h2>
//                   <p className="text-gray-300">
//                     User preferences and account settings.
//                   </p>
//                 </div>
//               )}
//             </div>

//             {/* Footer */}
//             <div className="mt-10 text-sm text-gray-500">
//               © {new Date().getFullYear()} CareerAura AI — Career Assessment
//               Platform
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Floating chatbot */}
//       <FloatingChatBot />
//     </div>
//   );
// }

// src/pages/app/MainApp.jsx
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar.jsx";
import Topbar from "../../components/Topbar.jsx";
import HomeCards from "../../components/HomeCards.jsx";
import FloatingChatBot from "../../components/FloatingChatbot";
import AvatarAssessment from "./AvatarAssessment";
import ChatbotAssessment from "./ChatbotAssessment";
import { useNavigate } from "react-router-dom";

export default function MainApp({ active: initialTab = "home" }) {
  const [collapsed, setCollapsed] = useState(true);
  const [active, setActive] = useState(initialTab);
  const nav = useNavigate();

  function goTo(tab) {
    setActive(tab);
    nav(`/app/${tab === "home" ? "" : tab}`);
  }

  return (
    <div className="min-h-screen flex bg-[var(--dark-bg)] text-white">
      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        active={active}
        onNavigate={(v) => goTo(v)}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Topbar collapsed={collapsed} onToggle={() => setCollapsed(false)} />

        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-heading tracking-tight">
                  {active === "home" && "Welcome back"}
                  {active === "avatar" && "Avatar Mode"}
                  {active === "chatbot" && "Chatbot Mode"}
                  {active === "reports" && "Your Reports"}
                  {active === "settings" && "Settings"}
                </h1>

                <p className="text-sm text-gray-300 mt-1">
                  {active === "home" &&
                    "Start an assessment or continue where you left off."}
                </p>
              </div>
            </div>

            {/* PAGE RENDERING */}
            <div>
              {active === "home" && (
                <HomeCards onAction={(v) => goTo(v)} />
              )}

              {active === "avatar" && (
                <AvatarAssessment />
              )}

              {active === "chatbot" && (
                <ChatbotAssessment />
              )}

              {active === "reports" && (
                <div className="glass-card p-6 rounded-xl shadow-lg">
                  <h2 className="font-bold text-xl mb-3">Your Reports</h2>
                  <p className="text-gray-300">Your reports will appear here.</p>
                </div>
              )}

              {active === "settings" && (
                <div className="glass-card p-6 rounded-xl shadow-lg">
                  <h2 className="font-bold text-xl mb-3">Settings</h2>
                  <p className="text-gray-300">
                    User preferences and settings.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-10 text-sm text-gray-500">
              © {new Date().getFullYear()} CareerAura AI — Platform
            </div>
          </div>
        </main>
      </div>

      <FloatingChatBot />
    </div>
  );
}
