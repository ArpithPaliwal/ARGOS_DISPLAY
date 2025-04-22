import React, { useState, useEffect } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const synth = window.speechSynthesis;

  useEffect(() => {
    const getVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(availableVoices[0].name);  // Set the default voice
      }
    };

    getVoices();

    // Listen for when voices are changed in the browser
    synth.onvoiceschanged = getVoices;
  }, [synth, selectedVoice]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleVoiceChange = (e) => {
    setSelectedVoice(e.target.value);
  };

  const handleSpeak = () => {
    if (text.trim() !== '' && !isSpeaking) {
      setIsSpeaking(true);
      
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = voices.find((voice) => voice.name === selectedVoice);
      utterance.voice = voice;

      utterance.onend = () => {
        setIsSpeaking(false); // Reset speaking flag when speech finishes
      };

      synth.speak(utterance);
    } else if (isSpeaking) {
      console.log('Already speaking...');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-lg w-full text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-blue-600">Text-to-Speech with Voice Selection</h1>

        <div className="mb-4">
          <label htmlFor="textInput" className="block text-lg font-medium text-gray-700">Enter Text:</label>
          <textarea
            id="textInput"
            value={text}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            placeholder="Type something..."
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="voiceSelect" className="block text-lg font-medium text-gray-700">Choose Voice (Accent):</label>
          <select
            id="voiceSelect"
            onChange={handleVoiceChange}
            value={selectedVoice}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {voices.map((voice, index) => (
              <option key={index} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSpeak}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-300"
        >
          Speak Text
        </button>
      </div>
    </div>
  );
};

export default TextToSpeech;
