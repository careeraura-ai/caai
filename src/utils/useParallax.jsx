// import { useRef, useEffect } from "react";

// export default function useParallax(strength = 12) {
//   const ref = useRef(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     function onMove(e) {
//       const rect = el.getBoundingClientRect();
//       const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
//       const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;

//       const tx = dx * strength;
//       const ty = dy * strength;

//       el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
//       el.style.transition = "transform 0.08s linear";
//     }

//     function onLeave() {
//       el.style.transform = "translate3d(0,0,0)";
//       el.style.transition = "transform 0.6s cubic-bezier(.2,.9,.3,1)";
//     }

//     window.addEventListener("mousemove", onMove);
//     window.addEventListener("mouseleave", onLeave);

//     return () => {
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("mouseleave", onLeave);
//     };
//   }, [strength]);

//   return ref;
// // }
// import React, { useRef } from "react";
// import useParallax from "../utils/useParallax";

// export default function LandingPage() {

//   const heroRef = useRef(null);
//   useParallax(heroRef, 18); // now works

//   return (
//     <section className="min-h-[90vh] flex items-center pt-24 md:pt-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid md:grid-cols-2 gap-10 items-center">

//         {/* LEFT TEXT */}
//         <div className="space-y-6 text-center md:text-left">
//           ...
//         </div>

//         {/* RIGHT ANIMATION */}
//         <div className="flex justify-center md:justify-end">
//           <div
//             ref={heroRef}
//             className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[500px]"
//           >
//             <LottieAvatar src={Rocket} />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
// src/utils/useParallax.jsx
import { useEffect } from "react";

export default function useParallax(ref, strength = 14) {
  useEffect(() => {
    if (!ref || !("current" in ref)) return;
    const el = ref.current;
    if (!el) return;

    // Mouse hover parallax (desktop)
    function onMove(e) {
      if (window.innerWidth < 768) return;
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      el.style.transform = `translate3d(${dx * strength}px, ${dy * strength * 0.6}px, 0)`;
      el.style.transition = "transform 0.12s linear";
    }

    function onLeave() {
      el.style.transform = "translate3d(0,0,0)";
      el.style.transition = "transform 0.6s cubic-bezier(.2,.9,.3,1)";
    }

    // subtle scroll parallax (all)
    function onScroll() {
      const y = window.scrollY;
      const offset = Math.max( - (y / (strength * 2)), -40 );
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
      el.style.transition = "transform 0.6s ease-out";
    }

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [ref, strength]);
}
