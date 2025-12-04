// import React from "react";
// import { useNavigate } from "react-router-dom";
// import LottieAvatar from "../components/LottieAvatar";
// import LoginAnim from "../lottie/Login.json";
// import usePageLoad from "../utils/usePageLoad";
// import { saveToken } from "../utils/auth";

// export default function LoginPage() {
//   usePageLoad();
//   const navigate = useNavigate();

//   async function onSubmit(e) {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     const res = await fetch("http://localhost:5001/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       alert(data.error || "Login failed");
//       return;
//     }

//     // SAVE JWT
//     saveToken(data.token);

//     navigate("/app");
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[var(--light-bg)] p-6">

//       <div className="max-w-4xl w-full bg-white rounded-2xl shadow p-8 grid md:grid-cols-2">

//         <div>
//           <h2 className="text-2xl font-bold text-[var(--dark-bg)]">Welcome back</h2>
//           <p className="text-sm text-gray-600 mt-2">Sign in to continue.</p>

//           <form onSubmit={onSubmit} className="mt-6 space-y-4">

//             <input
//               name="email"
//               placeholder="Email"
//               autoComplete="email"
//               className="w-full p-3 rounded border text-black"
//             />

//             <input
//               name="password"
//               type="password"
//               placeholder="Password"
//               autoComplete="current-password"
//               className="w-full p-3 rounded border text-black"
//             />

//             <button className="w-full py-3 rounded bg-[var(--dark-bg)] text-white">
//               Sign in
//             </button>
//           </form>

//           <p className="text-sm mt-4 text-gray-600">
//             No account? <a href="/signup" className="text-[var(--dark-bg)] font-semibold">Create one</a>
//           </p>
//         </div>

//         <div className="hidden md:flex items-center justify-center">
//           <div className="h-[350px] md:h-[450px] float">
//             <LottieAvatar src={LoginAnim} />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// import React from "react";
// import LottieAvatar from "../components/LottieAvatar";
// import { useNavigate } from "react-router-dom";
// import LoginAnim from "../lottie/Login.json";
// import usePageLoad from "../utils/usePageLoad";
// import { saveToken } from "../utils/auth";

// export default function LoginPage() {
//   usePageLoad();
//   const navigate = useNavigate();

//   async function onSubmit(e) {
//     e.preventDefault();

//     const email = e.target.email.value.trim();
//     const password = e.target.password.value;

//     if (!email || !password) {
//       alert("Please enter email and password.");
//       return;
//     }

//     try {
//       const res = await fetch(`${import.meta.env.VITE_API_BASE || "http://localhost:5001"}/api/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.error || "Login failed");
//         return;
//       }

//       if (!data.token) {
//         alert("No token returned from server.");
//         return;
//       }

//       // Save token and redirect
//       saveToken(data.token);
//       navigate("/app", { replace: true });

//     } catch (err) {
//       console.error("Login error:", err);
//       alert("Network error. Check backend or console.");
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[var(--light-bg)] p-6">
//       <div className="max-w-4xl w-full bg-white rounded-2xl shadow p-8 grid md:grid-cols-2">
//         <div>
//           <h2 className="text-2xl font-bold text-[var(--dark-bg)]">Welcome back</h2>
//           <p className="text-sm text-gray-600 mt-2">Sign in to continue.</p>

//           <form onSubmit={onSubmit} className="mt-6 space-y-4">
//             <input
//               name="email"
//               placeholder="Email"
//               autoComplete="email"
//               className="w-full p-3 rounded border text-black"
//             />

//             <input
//               name="password"
//               type="password"
//               placeholder="Password"
//               autoComplete="current-password"
//               className="w-full p-3 rounded border text-black"
//             />

//             <button type="submit" className="w-full py-3 rounded bg-[var(--dark-bg)] text-white">
//               Sign in
//             </button>
//           </form>

//           <p className="text-sm mt-4 text-gray-600">
//             No account? <a href="/signup" className="text-[var(--dark-bg)] font-semibold">Create one</a>
//           </p>
//         </div>

//         <div className="hidden md:flex items-center justify-center">
//           <div className="h-[350px] md:h-[450px] float">
//             <LottieAvatar src={LoginAnim} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/pages/LoginPage.jsx
import React from "react";
import LottieAvatar from "../components/LottieAvatar";
import { useNavigate } from "react-router-dom";
import LoginAnim from "../lottie/Login.json";
import usePageLoad from "../utils/usePageLoad";
import { saveToken } from "../utils/auth";

export default function LoginPage() {
  usePageLoad();
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE || "https://career-aura-ai.onrender.com"}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Login failed");
        return;
      }

      // save token and go to app
      saveToken(data.token);
      navigate("/app");
    } catch (err) {
      console.error("Login error", err);
      alert("Network error — check backend and console.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--light-bg)] p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow p-8 grid md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-[var(--dark-bg)]">Welcome back</h2>
          <p className="text-sm text-gray-600 mt-2">Sign in to continue.</p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <input
              name="email"
              placeholder="Email"
              autoComplete="email"
              className="w-full p-3 rounded border text-black"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="w-full p-3 rounded border text-black"
            />

            <button className="w-full py-3 rounded bg-[var(--dark-bg)] text-white">Sign in</button>
          </form>

          <p className="text-sm mt-4 text-gray-600">
            No account? <a href="/signup" className="text-[var(--dark-bg)] font-semibold">Create one</a>
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="h-[350px] md:h-[450px] float">
            <LottieAvatar src={LoginAnim} />
          </div>
        </div>
      </div>
    </div>
  );
}
