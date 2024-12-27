import React from 'react';
import './kids.css'; // Import any styles you need for the Kids page
import Spell from "./images/spell.png"; // Import your image
import Miss from "./images/miss.png"; // Import your image
import Color from "./images/color.png"; // Import your image
import Odd from "./images/odd.png"; // Import your image




// Import the useNavigate hook from React Router
import { useNavigate } from 'react-router-dom';

const Kids = () => {
  // Initialize the navigate function
  const navigate = useNavigate();

  // Function to navigate to Spell.js page when clicked
  const goToSpellGame = () => {
    navigate('/spell'); // This will navigate to /spell route
  };
  const goToMissGame = () => {
    navigate('/miss'); // This will navigate to /spell route
  };
  const goToColorGame = () => {
    navigate('/color'); // This will navigate to /spell route
  };
  const goToOddGame = () => {
    navigate('/odd'); // This will navigate to /spell route
  };

  return (
    <div className="kids-page">
      <h1 className="kids-heading">Hey Kiddos,</h1>
      <p className="kids-subheading">Unleash the Joy of Learning and Play!</p>

      {/* Games Section */}
      <div className="games-section">
        <h2>Games to Play</h2>
        <div className="games-grid">
          {/* Spell Master Game */}
          <div className="game" onClick={goToSpellGame}>
            <p>Spell Master</p>
            <div className="game-placeholder">
              <img src={Spell} alt="spell" className="spell-image" />
            </div>
          </div>

          {/* Other game placeholders */}
          <div className="game" onClick={goToMissGame}>
            <p>Find Me</p>
            <div className="game-placeholder">
              <img src={Miss} alt="miss" className="spell-image" />
            </div>
          </div>
          <div className="game" onClick={goToColorGame}>
            <p>Color It!</p>
            <div className="game-placeholder">
              <img src={Color} alt="color" className="spell-image" />
            </div>
          </div>
          <div className="game" onClick={goToOddGame}>
            <p>Odd One Out!</p>
            <div className="game-placeholder">
              <img src={Odd} alt="odd" className="spell-image" />
            </div>
          </div>
          {/* Add more games as needed */}
        </div>
      </div>
    </div>
  );
};

export default Kids;
