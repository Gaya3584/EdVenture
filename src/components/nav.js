import logoImage from './images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
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
}

export default Navbar;
