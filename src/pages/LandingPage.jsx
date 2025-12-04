// // src/pages/LandingPage.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import LottieAvatar from "../components/LottieAvatar";
import FloatingChatbot from "../components/FloatingChatbot";
import ParticlesBg from "../components/ParticlesBg";
import AnimatedCursor from "../components/AnimatedCursor";
import MagneticButton from "../components/MagneticButton";
import TiltCard from "../components/TiltCard";

import useScrollAnimation from "../utils/useScrollAnimation";
import useParallax from "../utils/useParallax";
import useTextReveal from "../utils/useTextReveal";
import useScrollReveal from "../utils/useScrollReveal";
import usePageLoad from "../utils/usePageLoad";
import useStaggerText from "../utils/useStaggerText";

// Lottie assets (ensure in src/lottie/)
import Rocket from "../lottie/Businessman.json";
import Friends from "../lottie/friends.json";
import Climb from "../lottie/climb.json";
import Robot from "../lottie/robot-work.json";

export default function LandingPage() {
  useScrollAnimation();
  usePageLoad();
  useStaggerText(".stagger", 65);
  useTextReveal(".reveal-text", 55);
  useScrollReveal(".reveal");

  const heroRef = useRef(null);
  useParallax(heroRef, 18);

  return (
    <div className="pt-24 relative overflow-hidden bg-[var(--dark-bg)] text-white min-h-screen">
      {/* decorative blobs + particles */}
      <ParticlesBg />
      <AnimatedCursor />

      {/* HERO */}
      <section className="min-h-[90vh] flex items-center md:pt-28 px-4">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
          {/* text */}
          <div className="space-y-5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/6 text-xs sm:text-sm rounded-full px-3 py-1 mx-auto md:mx-0 glass-card">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Interactive AI Assessment
            </div>

            <h1 className="stagger reveal-text leading-tight text-4xl sm:text-5xl md:text-6xl font-serif-display">
              Discover your{" "}
              <span className="gradient-text">career personality</span>
              <span className="block text-2xl md:text-3xl font-medium mt-3 text-gray-300">with expressive avatar & adaptive LLM</span>
            </h1>

            <p className="reveal text-base sm:text-lg text-gray-300 max-w-md">
              25 adaptive questions, voice & text input, personality insights and a partial PDF with an option to request deeper guidance.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
              <Link to="/signup" className="btn-animate btn-flash px-6 py-3 rounded-2xl bg-accent text-[var(--dark-bg)] font-semibold shadow-lg">
                Start Assessment
              </Link>

              <a href="#howitworks" className="text-gray-300 underline self-center">How it works →</a>
            </div>

            {/* small stats */}
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-sm">
              <div className="glass-list text-sm">~15 min</div>
              <div className="glass-list text-sm">AI + Human Review</div>
              <div className="glass-list text-sm">Email Report</div>
            </div>
          </div>

          {/* lottie / visual */}
          <div className="flex justify-center md:justify-end">
            <div ref={heroRef} className="w-[320px] sm:w-[420px] md:w-[520px] rounded-3xl floating-card p-4">
              <LottieAvatar src={Rocket} />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="howitworks" className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="stagger reveal text-3xl font-semibold mb-4">How it works</h2>
            <p className="reveal text-gray-300 mb-6 max-w-xl">Choose Avatar or Chatbot, answer adaptive questions, get instant insights. Click “Read more” in your partial report to request personal career guidance.</p>

            <ol className="reveal space-y-4 text-gray-200">
              <li className="flex gap-3 items-start">
                <div className="step-circle">1</div>
                <div>
                  <strong>Start</strong>
                  <div className="text-gray-300">Text or voice input; choose avatar for expressive prompts.</div>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <div className="step-circle">2</div>
                <div>
                  <strong>Adaptive Questions</strong>
                  <div className="text-gray-300">LLM adjusts question flow to get deeper signal.</div>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <div className="step-circle">3</div>
                <div>
                  <strong>Receive Report</strong>
                  <div className="text-gray-300">Partial PDF delivered; request full guidance to connect with our team.</div>
                </div>
              </li>
            </ol>
          </div>

          <div className="order-1 md:order-2">
            <TiltCard className="rounded-2xl overflow-hidden shadow-lg">
              <LottieAvatar src={Friends} />
            </TiltCard>
          </div>
        </div>
      </section>

      {/* WHO */}
      <section id="who" className="py-14 bg-[var(--light-bg)] text-[var(--dark-bg)]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="stagger reveal text-3xl font-semibold mb-4">Who is it for?</h3>
            <ul className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="card-tag">Students choosing courses</li>
              <li className="card-tag">Job seekers exploring roles</li>
              <li className="card-tag">Professionals planning switches</li>
              <li className="card-tag">Colleges & institutions</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <TiltCard>
              <LottieAvatar src={Climb} />
            </TiltCard>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <TiltCard>
              <LottieAvatar src={Robot} />
            </TiltCard>
          </div>

          <div>
            <h3 className="stagger reveal text-3xl font-semibold mb-4">Why choose us?</h3>
            <div className="space-y-4 text-gray-300">
              <div className="reveal p-4 rounded-lg bg-white/5">Human-like avatar and LLM-driven assessment</div>
              <div className="reveal p-4 rounded-lg bg-white/5">Partial reports + option for full guidance</div>
              <div className="reveal p-4 rounded-lg bg-white/5">Fast, secure, privacy-first</div>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO VIDEO */}
      <section className="fade-in py-16 bg-[#0f1a4b] text-center">
        <h2 className="stagger reveal text-3xl font-semibold mb-6">Experience the Assessment</h2>
        <p className="reveal text-gray-300 max-w-2xl mx-auto">See how our avatar interacts, analyses and responds.</p>

        <div className="mt-10 flex justify-center">
          <div className="video-card">
            <video src="/avatar-demo.mp4" autoPlay muted loop className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fade-in py-16 bg-[var(--dark-bg)] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h4 className="stagger reveal text-3xl text-white font-semibold mb-4">Ready to discover your true path?</h4>
          <p className="reveal text-gray-300 mb-8">Take the assessment and receive a tailored career blueprint.</p>

          <MagneticButton className="btn-flash px-8 py-4 bg-accent text-[var(--dark-bg)] rounded-full font-semibold btn-animate shadow-xl">
            Start assessment
          </MagneticButton>
        </div>
      </section>

      {/* Floating Chatbot (bottom-left, follows scroll a bit) */}
      <FloatingChatbot variant="followScroll" />

    </div>
  );
}
