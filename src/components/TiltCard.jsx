// src/components/TiltCard.jsx
import React, { useRef, useEffect } from "react";

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e) {
      const r = el.getBoundingClientRect();
      const rx = -(e.clientY - r.top - r.height / 2) / (r.height / 2);
      const ry = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      el.style.transform = `perspective(900px) rotateX(${rx * 6}deg) rotateY(${ry * 6}deg) translateZ(6px)`;
      el.style.transition = "transform 0.08s linear";
      el.style.boxShadow = `0 ${10 + Math.abs(rx) * 8}px ${40 + Math.abs(ry) * 18}px rgba(3,10,45,0.35)`;
    }
    function onLeave() {
      el.style.transform = "";
      el.style.boxShadow = "";
      el.style.transition = "transform 0.6s cubic-bezier(.2,.9,.3,1)";
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={ref} className={`rounded-2xl ${className}`}>{children}</div>;
}
