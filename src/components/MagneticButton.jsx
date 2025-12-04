// src/components/MagneticButton.jsx
import React, { useRef, useEffect } from "react";

export default function MagneticButton({ children, className = "", onClick }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.15}px, ${y * 0.12}px) scale(1.03)`;
    }
    function onLeave() {
      el.style.transform = "";
    }
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`relative will-change-transform ${className}`}
    >
      {children}
    </button>
  );
}
