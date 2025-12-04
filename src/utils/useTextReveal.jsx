import { useEffect } from "react";

export default function useTextReveal(selector = ".reveal-text", offset = 50) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";
            entry.target.style.transition = "all 0.8s cubic-bezier(0.22,1,0.36,1)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => {
      el.style.opacity = "0";
      el.style.transform = `translateY(${offset}px)`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selector, offset]);
}
