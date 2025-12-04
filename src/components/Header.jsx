// // src/components/Header.jsx
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { isLoggedIn, logout } from "../utils/auth";

// export default function Header() {
//   const [logged, setLogged] = useState(false);
//   const nav = useNavigate();

//   useEffect(() => {
//     setLogged(isLoggedIn());
//     // listen for storage changes (other tabs)
//     function onStorage() {
//       setLogged(isLoggedIn());
//     }
//     window.addEventListener("storage", onStorage);
//     return () => window.removeEventListener("storage", onStorage);
//   }, []);

//   function handleLogout() {
//     logout();
//     setLogged(false);
//     nav("/login");
//   }

//   return (
//     <header className="fixed w-full z-40 bg-gradient-to-r from-[var(--dark-bg)]/90 to-transparent backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-[var(--dark-bg)] font-bold">CA</div>
//           <span className="text-white font-semibold">CareerAura</span>
//         </Link>

//         <nav className="hidden md:flex gap-6 items-center text-sm text-gray-200">
//           <a href="#howitworks" className="hover:text-white">How it works</a>
//           <a href="#features" className="hover:text-white">Features</a>
//           <a href="#contact" className="hover:text-white">Contact</a>

//           {!logged ? (
//             <>
//               <Link to="/login" className="px-4 py-2 rounded-md border border-white/10">Sign in</Link>
//               <Link to="/signup" className="btn-animate px-4 py-2 rounded-md bg-accent text-[var(--dark-bg)] font-semibold">Get Started</Link>
//             </>
//           ) : (
//             <>
//               <Link to="/app" className="px-4 py-2 rounded-md border border-white/10">Dashboard</Link>
//               <button onClick={handleLogout} className="px-4 py-2 rounded-md bg-accent text-[var(--dark-bg)] font-semibold">Logout</button>
//             </>
//           )}
//         </nav>

//         <div className="md:hidden">
//           {!logged ? (
//             <Link to="/signup" className="px-3 py-2 rounded-md bg-accent text-[var(--dark-bg)]">Start</Link>
//           ) : (
//             <button onClick={() => nav("/app")} className="px-3 py-2 rounded-md bg-accent text-[var(--dark-bg)]">App</button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }
// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../utils/auth";

export default function Header() {
  const [logged, setLogged] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    setLogged(isLoggedIn());

    function onStorage() {
      setLogged(isLoggedIn());
    }
    window.addEventListener("storage", onStorage);

    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function handleLogout() {
    logout();
    setLogged(false);
    nav("/login");
  }

  return (
    <header className="fixed w-full z-40 bg-gradient-to-r from-[var(--dark-bg)]/90 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center 
          text-[var(--dark-bg)] font-bold">CA</div>
          <span className="text-white font-semibold">CareerAura</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-sm text-gray-200">
          <a href="#howitworks">How it works</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>

          {!logged ? (
            <>
              <Link to="/login">Sign in</Link>
              <Link to="/signup" className="btn-animate px-4 py-2 rounded-md bg-accent text-[var(--dark-bg)] font-semibold">
                Get Started
              </Link>
            </>
          ) : (
            <>
              <Link to="/app">Dashboard</Link>
              <button onClick={handleLogout} className="px-4 py-2 rounded-md bg-accent text-[var(--dark-bg)] font-semibold">
                Logout
              </button>
            </>
          )}
        </nav>

        <div className="md:hidden">
          {!logged ? (
            <Link to="/signup" className="px-3 py-2 rounded-md bg-accent text-[var(--dark-bg)]">Start</Link>
          ) : (
            <button onClick={() => nav("/app")} className="px-3 py-2 rounded-md bg-accent text-[var(--dark-bg)]">
              App
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
