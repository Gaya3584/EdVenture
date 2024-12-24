import React, { useState } from "react";
import "./act.css"; // Import the CSS for styling

const Act = () => {
  const [currentPage, setCurrentPage] = useState(0); // Track the current page

  const activities = [
    { id: 1, name: "Activity 1", imgSrc: "https://via.placeholder.com/200x150" },
    { id: 2, name: "Activity 2", imgSrc: "https://via.placeholder.com/200x150" },
    { id: 3, name: "Activity 3", imgSrc: "https://via.placeholder.com/200x150" },
    { id: 4, name: "Activity 4", imgSrc: "https://via.placeholder.com/200x150" },
    { id: 5, name: "Activity 5", imgSrc: "https://via.placeholder.com/200x150" },
    { id: 6, name: "Activity 6", imgSrc: "https://via.placeholder.com/200x150" }
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
              <img src={activity.imgSrc} alt={activity.name} />
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
