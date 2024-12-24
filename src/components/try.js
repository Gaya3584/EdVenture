import React from "react";

const Try = () => {
  return (
    <section className="activities-section">
      <h2>Try it Out!</h2>

      {/* Lectures and Fun Activities */}
      <div className="activities-wrapper">
        {/* Lectures */}
        <div className="activity-division lectures">
          <h3>Lectures</h3>
          <p>Watch and understand concepts through engaging video lessons.</p>
          <div className="activity-list">
            <div className="activity-item">
              <img src="https://via.placeholder.com/200x150" alt="Lecture 1" />
              <p>Lecture 1: Basics of Science</p>
            </div>
            <div className="activity-item">
              <img src="https://via.placeholder.com/200x150" alt="Lecture 2" />
              <p>Lecture 2: Introduction to Math</p>
            </div>
          </div>
        </div>

        {/* Fun Activities */}
        <div className="activity-division fun-activities">
          <h3>Fun Activities</h3>
          <p>Learn concepts through games and exciting activities.</p>
          <div className="activity-list">
            <div className="activity-item">
              <img src="https://via.placeholder.com/200x150" alt="Game 1" />
              <p>Game 1: Solve the Puzzle</p>
            </div>
            <div className="activity-item">
              <img src="https://via.placeholder.com/200x150" alt="Game 2" />
              <p>Game 2: Math Maze</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Try;
