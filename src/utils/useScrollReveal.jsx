// src/utils/useScrollReveal.jsx
import { useEffect } from "react";

export default function useScrollReveal(selector = ".reveal") {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // also add visible to fade-in variety
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [selector]);
}

// import { useEffect } from "react";

// export default function useScrollReveal(selector = ".reveal") {
//   useEffect(() => {
//     const elements = document.querySelectorAll(selector);

//     elements.forEach((el) => {
//       el.style.opacity = "0";
//       el.style.transform = "translateY(40px) scale(0.97)";
//       el.style.transition =
//         "opacity 0.9s ease-out, transform 1s cubic-bezier(.22,1,.36,1)";
//     });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting) return;

//           entry.target.style.opacity = "1";
//           entry.target.style.transform = "translateY(0) scale(1)";
//           observer.unobserve(entry.target);
//         });
//       },
//       { threshold: 0.15 }
//     );

//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, [selector]);
// }
