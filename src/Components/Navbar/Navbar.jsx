import react from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>Fi</span>versity
          </h2>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        {/* Social Media Dev links */}
        <div className="social-media">
          <ul className="socila-media-desktop">
            <li>
              <a href="#" target="_blank">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FaLinkedin className="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/*Main Section Starting */}
      <section className="hero-section">
        <p>Welcome to</p>
        <h1>FiverSity</h1>
      </section>
    </>
  );
};

export default Navbar;
