// // src/components/AnimatedCursor.jsx
// import React, { useEffect, useRef } from "react";

// export default function AnimatedCursor() {
//   const dotRef = useRef(null);
//   const pos = useRef({ x: 0, y: 0, dx: 0, dy: 0 });
//   const isHidden = useRef(false);
//   let rafId = null;
//   let hideTimeout = null;

//   useEffect(() => {
//     const onMove = (e) => {
//       if (!dotRef.current) return;
//       pos.current.x = e.clientX;
//       pos.current.y = e.clientY;
//       dotRef.current.style.display = "block";
//     };

//     const onWheel = () => {
//       // touchpad two-finger scroll / wheel: briefly hide the dot
//       if (!dotRef.current) return;
//       dotRef.current.style.opacity = "0";
//       isHidden.current = true;
//       clearTimeout(hideTimeout);
//       hideTimeout = setTimeout(() => {
//         if (dotRef.current) dotRef.current.style.opacity = "1";
//         isHidden.current = false;
//       }, 300);
//     };

//     window.addEventListener("mousemove", onMove, { passive: true });
//     window.addEventListener("wheel", onWheel, { passive: true });

//     function animate() {
//       if (!dotRef.current) return;
//       const { x, y } = pos.current;
//       pos.current.dx += (x - pos.current.dx) * 0.18;
//       pos.current.dy += (y - pos.current.dy) * 0.18;
//       dotRef.current.style.transform = `translate3d(${pos.current.dx - 8}px, ${pos.current.dy - 8}px, 0)`;
//       rafId = requestAnimationFrame(animate);
//     }
//     animate();

//     return () => {
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("wheel", onWheel);
//       cancelAnimationFrame(rafId);
//       clearTimeout(hideTimeout);
//     };
//   }, []);

//   return (
//     <div aria-hidden>
//       <div
//         ref={dotRef}
//         style={{
//           position: "fixed",
//           width: "16px",
//           height: "16px",
//           borderRadius: "50%",
//           pointerEvents: "none",
//           zIndex: 999999,
//           top: 0,
//           left: 0,
//           transform: "translate3d(-100px,-100px,0)",
//           transition: "opacity 0.18s ease",
//           background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95), rgba(255,255,255,0.6) 35%, rgba(255,255,255,0.1) 70%)",
//           boxShadow: "0 6px 18px rgba(100,100,150,0.22)",
//         }}
//       />
//     </div>
//   );
// }

// src/components/AnimatedCursor.jsx
import React, { useEffect, useRef } from "react";

export default function AnimatedCursor() {
  const dotRef = useRef(null);
  const pos = useRef({ x: -100, y: -100, dx: -100, dy: -100 });
  const hideTimeout = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    function onMove(e) {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      dot.style.display = "block";
      dot.style.opacity = "1";
    }

    function onWheel() {
      // hide briefly during wheel/touchpad scroll
      if (!dot) return;
      dot.style.opacity = "0";
      // clear previous timeout
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => {
        if (dot) dot.style.opacity = "1";
      }, 300);
    }

    function onTouchMove() {
      // treat touchmove like wheel on touch devices
      if (!dot) return;
      dot.style.opacity = "0";
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => {
        if (dot) dot.style.opacity = "1";
      }, 300);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    const animate = () => {
      const { x, y } = pos.current;
      pos.current.dx += (x - pos.current.dx) * 0.18;
      pos.current.dy += (y - pos.current.dy) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.dx - 8}px, ${pos.current.dy - 8}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onTouchMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  return (
    <div aria-hidden>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: 16,
          height: 16,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 999999,
          top: 0,
          left: 0,
          transform: "translate3d(-100px,-100px,0)",
          transition: "opacity 0.18s ease, transform 0.05s linear",
          background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95), rgba(255,255,255,0.6) 35%, rgba(255,255,255,0.1) 70%)",
          boxShadow: "0 6px 18px rgba(100,100,150,0.22)",
          display: "block",
          opacity: 1,
        }}
      />
    </div>
  );
}
