export function speakText(text, onDone) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.pitch = 1;
  utter.rate = 1;
  utter.volume = 1;

  utter.onend = () => onDone && onDone();

  window.speechSynthesis.speak(utter);
}
