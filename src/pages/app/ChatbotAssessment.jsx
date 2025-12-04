import React, { useState } from "react";
import { getToken } from "../../utils/auth";

export default function ChatbotAssessment() {
  const [answers, setAnswers] = useState({});

  async function submitAssessment() {
    const token = getToken();

    const res = await fetch("https://career-aura-ai.onrender.com/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        answers,
        token,
      }),
    });

    const data = await res.json();
    console.log("Submitted:", data);
  }

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Chatbot Assessment</h2>

      <button
        onClick={submitAssessment}
        className="px-4 py-2 bg-accent text-black rounded"
      >
        Submit Assessment
      </button>
    </div>
  );
}
