import React, { useState } from 'react';
import './color.css';

const colors = [
  { name: "Red", code: "red" },
  { name: "Green", code: "green" },
  { name: "Blue", code: "blue" },
  { name: "Yellow", code: "yellow" },
  { name: "Orange", code: "orange" },
  { name: "Purple", code: "purple" },
];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const ColorMatch = () => {
  const [colorName, setColorName] = useState(getRandomItem(colors).name);
  const [colorStyle, setColorStyle] = useState(getRandomItem(colors).code);
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleColorClick = (selectedColor) => {
    if (selectedColor === colorStyle) {
      setFeedback("Correct! 🎉");
      setIsCorrect(true);
    } else {
      setFeedback("Oops! Try again. ❌");
      setIsCorrect(false);
    }

    setTimeout(() => {
      setFeedback("");
      setColorName(getRandomItem(colors).name);
      setColorStyle(getRandomItem(colors).code);
    }, 2000);
  };

  return (
    <div className="color-match-game">
      <h1>Color Match Game</h1>
      <p className="instruction">Match the color name to its actual color!</p>
      <div className="color-display" style={{ color: colorStyle }}>
        {colorName}
      </div>
      <div className="options">
        {colors.map((color) => (
          <button
            key={color.code}
            style={{ backgroundColor: color.code }}
            onClick={() => handleColorClick(color.code)}
          >
            {color.name}
          </button>
        ))}
      </div>
      <p className={`feedback ${feedback ? (isCorrect ? "correct" : "incorrect") : ""}`}>
        {feedback}
      </p>
    </div>
  );
};

export default ColorMatch;
