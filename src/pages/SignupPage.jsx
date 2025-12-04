// import React from 'react';
import AuthForm from '../components/AuthForm';
import LottieAvatar from "../components/LottieAvatar";
import { useNavigate } from 'react-router-dom';
import RegisterAnim from '../lottie/register.json';
import { saveToken } from "../utils/auth";

export default function SignupPage(){
  const navigate = useNavigate();

  async function onSubmit(e) {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  const res = await fetch("https://career-aura-ai.onrender.com/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.error || "Signup failed");
    return;
  }

  saveToken(data.token);
  navigate("/app");
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--dark-bg)] p-6">

      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white/5 rounded-2xl shadow-xl overflow-hidden">

        {/* FORM */}
        <div className="p-10">
          <h3 className="text-2xl font-semibold text-white">Create your account</h3>
          <p className="text-gray-300 mt-2">Start your career assessment in seconds.</p>

          <div className="mt-6">
            <AuthForm type="signup" onSubmit={onSubmit} />
          </div>

          <p className="text-gray-400 mt-4 text-sm">
            Already have an account? <a href="/login" className="text-white underline">Log in</a>
          </p>
        </div>

        {/* ANIMATION */}
        <div className="p-6 hidden md:flex items-center justify-center">
          <div className="h-[350px] md:h-[450px] float">
            <LottieAvatar src={RegisterAnim} />
          </div>
        </div>

      </div>
    </div>
  );
}
