import React from "react";
// import { Link } from "react-scroll";
import Logo from "../elements/Logo";
import { HashLink as Link } from "react-router-hash-link";
import "font-awesome/css/font-awesome.min.css";

function Header({ light, logoSource, toggleMenu, headerToggler }) {
  const handleClasses = () => {
    let classes = "desktop-header-1 d-flex align-items-start flex-column";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };

  const handleMobileClasses = () => {
    let classes = "mobile-header-1";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };

  return (
    <>
      <header className={handleMobileClasses()}>
        <div className="container">
          <div className="menu-icon d-inline-flex mr-4">
            <button onClick={headerToggler}>
              <span></span>
            </button>
          </div>
          <Logo logoSource={logoSource} />
        </div>
      </header>
      <header className={handleClasses()}>
        <Logo logoSource={logoSource} />
        <nav>
          <ul className="vertical-menu scrollspy">
            <li>
              <Link
                activeClass="active"
                to="/#home"
                spy="true"
                smooth={true}
                duration={500}
              >
                <i class="fas fa-home"></i>Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="/#about"
                spy="true"
                smooth={true}
                duration={500}
              >
                <i className="fas fa-user"></i>About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="/#experience"
                spy="true"
                smooth={true}
                duration={500}
              >
                <i className="fas fa-laptop-code"></i>Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="/#works"
                spy="true"
                smooth={true}
                duration={500}
              >
                <i className="fas fa-terminal"></i>Works
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="/#blog"
                spy="true"
                smooth={true}
                duration={500}
              >
                <i className="fab fa-readme"></i>Blog
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="/#papers"
                spy="true"
                smooth={true}
                duration={500}
              >
                <i className="far fa-file-code"></i>Papers
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="/#contact"
                spy="true"
                smooth={true}
                duration={500}
              >
                <i className="far fa-paper-plane"></i>Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer">
          <span className="copyright">
            &copy; {new Date().getFullYear()} Krys Newman
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;
