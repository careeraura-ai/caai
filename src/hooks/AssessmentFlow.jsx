import { useEffect, useState } from "react";
import axios from "axios";

export default function useQuestions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://career-aura-ai.onrender.com/api/questions")
      .then(res => {
        setQuestions(res.data.questions);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load questions", err);
        setLoading(false);
      });
  }, []);

  return { questions, loading };
}
