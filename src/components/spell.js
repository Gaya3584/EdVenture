// Import required dependencies and styles
import React, { useState, useEffect } from 'react';
import './spell.css';

const Fruits = () => {
  const [feedback, setFeedback] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [category, setCategory] = useState('fruits');

  // Word categories
  const wordCategories = {
    fruits: ['Apple', 'Banana', 'Orange', 'Watermelon', 'Grapes', 'Mango'],
    months: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    numbers: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'],
  };

  // Get the current list based on the selected category
  const currentList = wordCategories[category];

  // Initialize the Speech Recognition API
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';

  // Function to start listening for speech
  const startListening = () => {
    setIsListening(true);
    recognition.start();
  };

  // Function to stop the speech recognition
  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  // Function to check if the spoken word is correct
  const checkSpelling = (spokenWord) => {
    const currentWord = currentList[currentWordIndex];
    if (spokenWord.toLowerCase() === currentWord.toLowerCase()) {
      setFeedback('');
    } else {
      setFeedback('');
    }
  };

  // Event handler when speech is recognized
  useEffect(() => {
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript.trim();
      setRecognizedText(speechToText);
      checkSpelling(speechToText);
    };
  }, [currentWordIndex, category]);

  // Move to the next word
  const nextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % currentList.length);
    setFeedback('');
    setRecognizedText('');
  };

  // Handle category change
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentWordIndex(0);
    setFeedback('');
    setRecognizedText('');
  };

  return (
    <div className="practice-section">
      <h1>Spelling Practice</h1>
      <div className="category-buttons">
        {Object.keys(wordCategories).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={category === cat ? 'active' : ''}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="practice-container">
        <p className="prompt">
          Spell the word: <strong>{currentList[currentWordIndex]}</strong>
        </p>
        <button onClick={startListening} disabled={isListening} className="listen-btn">
          {isListening ? 'Listening...' : 'Start Speaking'}
        </button>
        <button onClick={stopListening} disabled={!isListening} className="stop-btn">
          Stop Listening
        </button>
        <p className="recognized">Recognized word: {recognizedText}</p>
        <p className="feedback">{feedback}</p>
        <button onClick={nextWord} className="next-btn">Next Word</button>
      </div>
    </div>
  );
};

export default Fruits;
