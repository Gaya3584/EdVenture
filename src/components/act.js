import React, { useState } from "react";
import "./act.css"; // Import the CSS for styling
import { useNavigate } from 'react-router-dom'; // Use useNavigate hook for navigation

// Import images
import MathImage from "./images/maths.png";
import ScienceImage from "./images/science.png";
import KiddoImage from "./images/kids.png";
import MindCareImage from "./images/mind.png";
import DrugFreeImage from "./images/drugs.png";
import SkillSphereImage from "./images/skill.png";

const Act = () => {
  const [currentPage, setCurrentPage] = useState(0); // Track the current page
  const navigate = useNavigate(); // Use the useNavigate hook

  const activities = [
    { id: 1, name: "Math Wizards", imgSrc: MathImage },
    { id: 2, name: "Science Horizons", imgSrc: ScienceImage },
    { id: 3, name: "KiddoVerse", imgSrc: KiddoImage },
    { id: 4, name: "MindCare", imgSrc: MindCareImage },
    { id: 5, name: "DrugFree Future", imgSrc: DrugFreeImage },
    { id: 6, name: "SkillSphere", imgSrc: SkillSphereImage }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(activities.length / itemsPerPage);

  // Function to handle scrolling
  const slide = (direction) => {
    if (direction === "left" && currentPage > 0) {
      setCurrentPage(currentPage - 1); // Move to the previous page
    } else if (direction === "right" && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1); // Move to the next page
    }
  };

  // Get the activities for the current page
  const currentActivities = activities.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleKiddoClick = () => {
    navigate("/kids"); // Navigate to the Kids page
  };
  const handleMathsClick = () => {
    navigate("/maths"); // Navigate to the Kids page
  };
  const handleScienceClick = () => {
    navigate("/science"); // Navigate to the Kids page
  };
  return (
    <div className="activities-section">
      <h3 className="act-head">Our Activities</h3>
      <div className="slider-container">
        {/* Left Button */}
        <button
          className="slider-button left"
          onClick={() => slide("left")}
          disabled={currentPage === 0} // Disable when on the first page
        >
          {"<"}
        </button>

        {/* Activities */}
        <div className="slider">
          {currentActivities.map((activity) => (
            <div className="activity" key={activity.id}>
              <img src={activity.imgSrc}
              alt={activity.name}
              style={{ width: "200px", height: "150px" }}
              onClick={
              activity.name === "KiddoVerse"
              ? handleKiddoClick
              : activity.name === "Math Wizards"
              ? handleMathsClick
              : activity.name === "Science Horizons"
              ? handleScienceClick
              : null
              } // Set appropriate navigation handler
              />

              <p>{activity.name}</p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          className="slider-button right"
          onClick={() => slide("right")}
          disabled={currentPage === totalPages - 1} // Disable when on the last page
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Act;
