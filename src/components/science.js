import React from "react";
import "./science.css";
import { useNavigate } from "react-router-dom";

const scienceSections = [
  {
    title: "Biology",
    subtopics: ["Zoology", "Botany", "Anatomy", "Environmental Science"],
  },
  {
    title: "Physics",
    subtopics: ["Mechanics", "Thermodynamics", "Optics"],
  },
  {
    title: "Chemistry",
    subtopics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"],
  },
];

const Science = () => {
  const navigate = useNavigate();

  const handleSubtopicClick = (subtopic) => {
    navigate(`/science/${subtopic.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div className="science-container">
      <h2 className="science-heading">Science Sections</h2>
      {scienceSections.map((section, index) => (
        <div key={index} className="science-section">
          <h3 className="section-title">{section.title}</h3>
          <ul className="subtopics-list">
            {section.subtopics.map((subtopic, idx) => (
              <li key={idx} onClick={() => handleSubtopicClick(subtopic)}>
                {subtopic}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Science;
