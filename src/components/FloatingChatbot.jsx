// // src/components/FloatingChatbot.jsx
// import React, { useEffect, useRef, useState } from "react";

// export default function FloatingChatbot({ variant = "followScroll" }) {
//   const ref = useRef(null);
//   const [hidden, setHidden] = useState(false);

//   // subtle follow-scroll transform
//   useEffect(() => {
//     let lastScroll = window.scrollY;
//     let raf = null;

//     function onScroll() {
//       if (!ref.current) return;
//       const current = window.scrollY;
//       const delta = current - lastScroll;
//       lastScroll = current;
//       // set a small translateY opposite to scroll for "comes along"
//       ref.current.style.transform = `translateY(${Math.min(Math.max(delta * 0.08, -10), 10)}px)`;
//       // reset after short delay for smoothness
//       if (raf) cancelAnimationFrame(raf);
//       raf = requestAnimationFrame(() => {
//         if (ref.current) ref.current.style.transform = `translateY(0px)`;
//       });
//     }

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       if (raf) cancelAnimationFrame(raf);
//     };
//   }, []);

//   // hide on small screens optionally
//   useEffect(() => {
//     const onResize = () => {
//       if (window.innerWidth < 520) setHidden(true);
//       else setHidden(false);
//     };
//     onResize();
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   // click: open widget stub
//   function openChat() {
//     // replace with your actual open logic
//     window.location.hash = "#chat";
//   }

//   if (hidden) return null;

//   return (
//     <div
//       ref={ref}
//       className="fixed left-6 bottom-8 z-50 flex items-center gap-3 p-3 rounded-2xl bg-white/6 backdrop-blur-lg shadow-xl transition-transform"
//       style={{ cursor: "pointer" }}
//       onClick={openChat}
//       aria-label="Open chat"
//     >
//       <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-white/20 to-white/6 flex items-center justify-center">
//         {/* small avatar or icon */}
//         <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
//           <path d="M12 3C7.03 3 3 6.686 3 11c0 2.21 1.343 4.205 3.5 5.5V21l4.5-2 4.5 2v-4.5C19.657 15.205 21 13.21 21 11c0-4.314-4.03-8-9-8z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </div>

//       <div className="hidden md:block">
//         <div className="text-sm font-semibold">AI Assistant</div>
//         <div className="text-xs text-gray-300">Career help & demo</div>
//       </div>
//     </div>
//   );
// }

// src/components/FloatingChatbot.jsx
import React, { useEffect, useRef, useState } from "react";

export default function FloatingChatbot({ variant = "followScroll" }) {
  const ref = useRef(null);
  const [hidden, setHidden] = useState(false);

  // subtle follow-scroll transform that 'comes along' with the page
  useEffect(() => {
    let last = window.scrollY;
    let rafId = null;
    let timeoutId = null;

    function onScroll() {
      if (!ref.current) return;
      const cur = window.scrollY;
      const delta = cur - last;
      last = cur;
      // small translate opposite to scroll to create 'comes along' feel
      ref.current.style.transition = "transform 280ms cubic-bezier(.2,.9,.3,1)";
      ref.current.style.transform = `translateY(${Math.max(Math.min(-delta * 0.08, 12), -12)}px)`;
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (ref.current) ref.current.style.transform = "translateY(0px)";
      }, 220);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      setHidden(window.innerWidth < 520);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function openChat() {
    // placeholder behavior
    window.location.hash = "#chat";
  }

  if (hidden) return null;

  return (
    <div
      ref={ref}
      className="fixed left-6 bottom-8 z-50 flex items-center gap-3 p-3 rounded-2xl bg-white/6 backdrop-blur-lg shadow-xl transition-transform"
      style={{ cursor: "pointer" }}
      onClick={openChat}
      aria-label="Open chat"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-white/20 to-white/6 flex items-center justify-center">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M12 3C7.03 3 3 6.686 3 11c0 2.21 1.343 4.205 3.5 5.5V21l4.5-2 4.5 2v-4.5C19.657 15.205 21 13.21 21 11c0-4.314-4.03-8-9-8z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="hidden md:block">
        <div className="text-sm font-semibold">AI Assistant</div>
        <div className="text-xs text-gray-300">Career help & demo</div>
      </div>
    </div>
  );
}
