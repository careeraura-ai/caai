import { useState, useEffect } from "react";
import axios from "../api/axios";

export default function useQuestionFlow() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadFirstQuestion() {
    const res = await axios.get("/questions/first");
    setCurrentQuestion(res.data);
    setLoading(false);
  }

  async function submitAnswer(questionId, answer) {
    const res = await axios.post("/answers/submit", {
      question_id: questionId,
      answer,
    });

    if (res.data.done) {
      return { done: true };
    }

    setCurrentQuestion(res.data.next_question);
    return { done: false };
  }

  useEffect(() => {
    loadFirstQuestion();
  }, []);

  return { currentQuestion, loading, submitAnswer };
}
