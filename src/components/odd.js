import React, { useState } from "react";
import "./odd.css";

const groups = [
  { 
    theme: "Fruits", 
    words: ["Apple", "Banana", "Orange", "Carrot"], 
    odd: "Carrot" 
  },
  { 
    theme: "Colors", 
    words: ["Red", "Blue", "Green", "Dog"], 
    odd: "Dog" 
  },
  { 
    theme: "Animals", 
    words: ["Tiger", "Elephant", "Laptop", "Lion"], 
    odd: "Laptop" 
  },
  { 
    theme: "Shapes", 
    words: ["Circle", "Square", "Triangle", "Grapes"], 
    odd: "Grapes" 
  },
];

const getRandomGroup = () => groups[Math.floor(Math.random() * groups.length)];

const OddOneOut = () => {
  const [group, setGroup] = useState(getRandomGroup());
  const [feedback, setFeedback] = useState("");

  const handleWordClick = (selectedWord) => {
    if (selectedWord === group.odd) {
      setFeedback("Correct! 🎉");
    } else {
      setFeedback("Oops! Try again. ❌");
    }

    setTimeout(() => {
      setFeedback("");
      setGroup(getRandomGroup());
    }, 2000);
  };

  return (
    <div className="odd-one-out-game">
      <h1>Odd One Out</h1>
      <p className="instruction">Theme: {group.theme}</p>
      <div className="words">
        {group.words.map((word, index) => (
          <button 
            key={index} 
            className="word-button" 
            onClick={() => handleWordClick(word)}
          >
            {word}
          </button>
        ))}
      </div>
      <p className={`feedback ${feedback ? (feedback.includes("Correct") ? "correct" : "incorrect") : ""}`}>
        {feedback}
      </p>
    </div>
  );
};

export default OddOneOut;
