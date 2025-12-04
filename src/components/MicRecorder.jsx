import React, { useState, useRef } from "react";

export default function MicRecorder({ onTranscribed }) {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  async function startRecording() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    audioChunks.current = [];

    mediaRecorderRef.current.ondataavailable = (e) => {
      audioChunks.current.push(e.data);
    };

    mediaRecorderRef.current.onstop = async () => {
      const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });
      sendToBackend(audioBlob);
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  }

  function stopRecording() {
    mediaRecorderRef.current.stop();
    setRecording(false);
  }

  async function sendToBackend(blob) {
    const formData = new FormData();
    formData.append("audio", blob, "speech.webm");

    const res = await fetch("https://career-aura-ai.onrender.com/api/stt", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    console.log("STT result:", data);

    if (onTranscribed) onTranscribed(data.text);
  }

  return (
    <div className="mt-4 flex gap-4">
      {!recording ? (
        <button
          onClick={startRecording}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          🎤 Start Speaking
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          ⏹ Stop
        </button>
      )}
    </div>
  );
}
