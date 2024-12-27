import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logoImage from "./images/logo.png";

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the landing page ("/")
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={handleLogoClick}>
        <img src={logoImage} alt="Logo" className="logo-image" /> {/* Image as logo */}
      </div>
      <div className="heading-container">
        <h1 className="navbar-heading">EdVenture</h1> {/* Heading */}
      </div>
      <div className="notification-container">
        <i className="fas fa-bell notification-icon"></i>
      </div>
    </nav>
  );
};

export default Navbar;
