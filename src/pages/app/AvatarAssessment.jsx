// // src/pages/app/AvatarAssessment.jsx
// import React, { useState } from "react";
// import AvatarPlayer from "../../components/AvatarPlayer";
// import MicRecorder from "../../components/MicRecorder";

// export default function AvatarAssessment() {
//   const [visemeIndex, setVisemeIndex] = useState(0);
//   const [visemeValue, setVisemeValue] = useState(0);

//   function testVisemeCycle() {
//     let i = 0;
//     let x = 0;
//     const interval = setInterval(() => {
//       setVisemeIndex(i % 15);
//       setVisemeValue(Math.abs(Math.sin(x)));

//       x += 0.25;
//       i++;

//       if (i > 120) clearInterval(interval);
//     }, 60);
//   }

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Avatar Lip Sync Test</h2>

//       <AvatarPlayer visemeIndex={visemeIndex} visemeValue={visemeValue} />

//       <button
//         onClick={testVisemeCycle}
//         className="mt-6 px-4 py-2 bg-accent text-black rounded"
//       >
//         Test Lip Sync
//       </button>
//       <MicRecorder 
//    onTranscribed={(text) => {
//       console.log("User said:", text);
//       // TODO: send this text to LLM next
//    }} 
// />

//     </div>
//   );
// // }
// import React, { useState, useEffect } from "react";
// import AvatarPlayer from "../../components/AvatarPlayer";
// import { speakText } from "../../utils/tts";
// import { startSTT } from "../../utils/stt";
// import { getToken } from "../../utils/auth";

// export default function AvatarAssessment() {
//   const [questions, setQuestions] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [answer, setAnswer] = useState("");

//   useEffect(() => {
//     // fetch from backend
//     fetch("http://localhost:5001/api/questions")
//       .then(r => r.json())
//       .then(setQuestions);
//   }, []);

//   // after user enters the question
//   function askNextQuestion() {
//     const q = questions[index];
//     if (!q) return;

//     speakText(q.question, () => {
//       console.log("TTS finished. Start listening...");
//       startSTT(onSpeech, () => {});
//     });
//   }

//   function onSpeech(transcript) {
//     console.log("User said:", transcript);
//     setAnswer(transcript);

//     saveAnswer(transcript);
//   }

//   async function saveAnswer(text) {
//     const token = getToken();

//     await fetch("http://localhost:5001/api/save-answer", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         question_id: questions[index].id,
//         answer: text,
//       }),
//     });

//     // Next question
//     setIndex(i => i + 1);
//     setAnswer("");
//   }

//   return (
//     <div className="text-white p-4">
//       <h2 className="text-2xl font-bold">Avatar Assessment</h2>

//       <AvatarPlayer />

//       <button
//         className="mt-4 px-4 py-2 bg-accent text-black rounded"
//         onClick={askNextQuestion}
//       >
//         Start Question
//       </button>

//       <p className="mt-4 text-gray-300">
//         {questions[index]?.question || "Completed!"}
//       </p>

//       <p className="mt-2 text-accent">{answer}</p>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import AvatarPlayer from "../../components/AvatarPlayer";

export default function AvatarAssessment() {
  const [isRecording, setIsRecording] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("Tell me about yourself.");
  const [questionId, setQuestionId] = useState(1);

  let recognition;

  if ("webkitSpeechRecognition" in window) {
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
  }

  const startRecording = () => {
    if (!recognition) {
      alert("Speech recognition not supported in this browser");
      return;
    }

    setIsRecording(true);
    recognition.start();

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setRecognizedText(text);
      saveAnswer(text);
      setIsRecording(false);
    };

    recognition.onerror = () => {
      setIsRecording(false);
    };
  };

  const saveAnswer = async (answerText) => {
    const token = localStorage.getItem("token");

    await fetch("https://career-aura-ai.onrender.com/api/answers/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        question_id: questionId,
        answer: answerText,
      }),
    });

    // Move to next question
    setQuestionId((q) => q + 1);
    setCurrentQuestion("Next question will load here...");
  };

  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">Avatar Assessment</h2>

      {/* Avatar */}
      <AvatarPlayer />

      {/* Question */}
      <div className="mt-6 text-xl font-semibold">
        {currentQuestion}
      </div>

      {/* Mic button */}
      <button
        onClick={startRecording}
        className={`mt-6 px-6 py-3 rounded-xl text-black font-bold ${
          isRecording ? "bg-red-400" : "bg-yellow-300"
        }`}
      >
        🎤 {isRecording ? "Listening..." : "Start Speaking"}
      </button>

      {/* Show recognized text */}
      {recognizedText && (
        <p className="mt-4 text-gray-300">
          You said: <span className="text-white">{recognizedText}</span>
        </p>
      )}
    </div>
  );
}
