// // src/utils/useTextReveal.jsx
// import { useEffect } from "react";

// export default function useTextReveal(selector = ".reveal-text", delay = 40) {
//   useEffect(() => {
//     const nodes = document.querySelectorAll(selector);
//     if (!nodes.length) return;

//     nodes.forEach((node) => {
//       const text = node.innerText.trim();
//       if (!text) return;
//       const words = text.split(" ").map((w) => `<span class="reveal-word inline-block">${w}&nbsp;</span>`).join("");
//       node.innerHTML = words;
//     });

//     // stagger reveal
//     const words = document.querySelectorAll(".reveal-word");
//     words.forEach((w, i) => {
//       w.style.transition = `transform 0.6s cubic-bezier(.2,.9,.3,1) ${i * (delay/1000)}s, opacity 0.6s ${i * (delay/1000)}s`;
//       w.style.opacity = 0;
//       w.style.transform = "translateY(18px)";
//     });

//     // On visibility, animate them (use Intersection observer)
//     const obs = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const localWords = entry.target.querySelectorAll(".reveal-word");
//           localWords.forEach((w) => {
//             w.style.opacity = 1;
//             w.style.transform = "translateY(0)";
//           });
//           obs.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.12 });

//     nodes.forEach((n) => obs.observe(n));
//     return () => obs.disconnect();
//   }, [selector, delay]);
// }

// src/utils/useStaggerText.jsx
import { useEffect } from "react";

export default function useStaggerText(selector = ".stagger", gap = 80) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;

    els.forEach((el) => {
      const children = el.children;
      if (!children.length) return;
      Array.from(children).forEach((child, i) => {
        child.style.transition = `transform 0.6s cubic-bezier(.2,.9,.3,1) ${i * (gap/1000)}s, opacity 0.6s ${i * (gap/1000)}s`;
        child.style.opacity = 0;
        child.style.transform = "translateY(12px)";
      });

      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Array.from(children).forEach((child) => {
              child.style.opacity = 1;
              child.style.transform = "translateY(0)";
            });
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      obs.observe(el);
    });
  }, [selector, gap]);
}
