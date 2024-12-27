import React from "react";
import "./maths.css"; // Import the CSS for styling

// Import images for the activities
import AlgebraImage from "./images/algebra.png";
import GeometryImage from "./images/geometry.png";
import TrigonometryImage from "./images/trigonometry.png";
import CalculusImage from "./images/calculus.png";
import ProbabilityImage from "./images/probability.png";
import StatisticsImage from "./images/statistics.png";

const Maths = () => {
  const activities = [
    {
      id: 1,
      title: "Algebra Adventures",
      imgSrc: AlgebraImage,
      description: "Learn the fundamentals of algebra with engaging examples."
    },
    {
      id: 2,
      title: "Geometry Explorers",
      imgSrc: GeometryImage,
      description: "Explore shapes, angles, and the world of geometry."
    },
    {
      id: 3,
      title: "Trigonometry Trails",
      imgSrc: TrigonometryImage,
      description: "Dive into the study of triangles and their properties."
    },
    {
      id: 4,
      title: "Calculus Quests",
      imgSrc: CalculusImage,
      description: "Understand derivatives and integrals in a fun way."
    },
    {
      id: 5,
      title: "Probability Pursuits",
      imgSrc: ProbabilityImage,
      description: "Master the art of calculating likelihoods and chances."
    },
    {
      id: 6,
      title: "Statistics Stories",
      imgSrc: StatisticsImage,
      description: "Analyze and interpret data like a pro."
    }
  ];

  return (
    <div className="maths-section">
      <h2 className="maths-header">Math Wizards Activities</h2>
      <div className="maths-grid">
        {activities.map((activity) => (
          <div className="maths-box" key={activity.id}>
            <img
              src={activity.imgSrc}
              alt={activity.title}
              className="maths-image"
            />
            <h3 className="maths-title">{activity.title}</h3>
            <p className="maths-description">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maths;
