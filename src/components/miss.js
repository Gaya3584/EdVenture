import React, { useState } from "react";
import "./miss.css";

function Miss() {
  const words = [
    { complete: "APPLE", missing: "A_PLE", answer: "P" },
    { complete: "BANANA", missing: "B_NANA", answer: "A" },
    { complete: "ORANGE", missing: "OR_NGE", answer: "A" },
    { complete: "GRAPE", missing: "GR_PE", answer: "A" },
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);

  const currentWord = words[currentWordIndex];

  const checkAnswer = (selectedLetter) => {
    if (selectedLetter === currentWord.answer) {
      setFeedback("Correct!");
      setShowNextButton(true);
    } else {
      setFeedback("Try again!");
    }
  };

  const nextWord = () => {
    setFeedback("");
    setShowNextButton(false);
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <div className="game-container">
      <h1>Find the Missing Letter!</h1>
      <p className="question">
        The word is: <span>{currentWord.missing}</span>
      </p>
      <div className="options">
        {[...currentWord.complete].map((letter, index) => (
          <button
            key={index}
            onClick={() => checkAnswer(letter)}
            className="option-button"
          >
            {letter}
          </button>
        ))}
      </div>
      <p className={`feedback ${feedback === "Correct!" ? "correct" : "wrong"}`}>
        {feedback}
      </p>
      {showNextButton && (
        <button onClick={nextWord} className="next-button">
          Next Word
        </button>
      )}
    </div>
  );
}

export default Miss;
