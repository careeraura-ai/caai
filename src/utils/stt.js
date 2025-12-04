export function startSTT(onResult, onEnd) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recog = new SpeechRecognition();
  recog.lang = "en-US";
  recog.interimResults = false;
  recog.continuous = false;

  recog.onresult = e => {
    const transcript = e.results[0][0].transcript;
    onResult(transcript);
  };

  recog.onend = () => onEnd && onEnd();

  recog.start();
  return recog;
}
