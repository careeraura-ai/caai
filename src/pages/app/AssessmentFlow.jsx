import React, { useState } from "react";
import useQuestions from "../../hooks/useQuestions";

export default function AssessmentFlow() {
  const { questions, loading } = useQuestions();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  if (loading) return <p className="text-white">Loading questions...</p>;
  if (questions.length === 0) return <p>No questions available.</p>;

  const q = questions[index];

  function saveAnswer(ans) {
    setAnswers({
      ...answers,
      [q.id]: ans
    });

    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      console.log("Assessment complete!", answers);
      alert("All questions answered!");
    }
  }

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">{q.section.toUpperCase()}</h2>
      <p className="text-xl mb-6">{q.text}</p>

      {/* TEXT INPUT */}
      {q.type === "text" && (
        <input
          type="text"
          className="p-2 bg-gray-800 border border-gray-600 rounded w-full"
          onKeyDown={(e) => e.key === "Enter" && saveAnswer(e.target.value)}
        />
      )}

      {/* SINGLE CHOICE */}
      {q.type === "single" && (
        <div className="flex flex-col gap-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => saveAnswer(opt)}
              className="p-3 bg-gray-700 rounded hover:bg-gray-600"
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {/* MULTI SELECT */}
      {q.type === "multi" && (
        <MultiSelectQuestion q={q} onSubmit={saveAnswer} />
      )}

      <div className="mt-6 text-gray-400">
        Question {index + 1} / {questions.length}
      </div>
    </div>
  );
}
