import React, { useState } from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header from "../components/layouts/Header";
import About from "../components/sections/About";
import Blogs from "../components/sections/Blogs";
import Contact from "../components/sections/Contact";
import Experiences from "../components/sections/Experiences";
import Herosection from "../components/sections/Herosection";
import Papers from "../components/sections/Papers";
import Works from "../components/sections/Works";

function Homepage() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });

  return (
    <>
      <Header
        logoSource="/images/logo-header.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? "content open" : "content"}>
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-experiences">
          <Experiences />
        </Element>
        <Element name="section-works">
          <Works />
        </Element>
        <Element name="section-blogs">
          <Blogs />
        </Element>
        <Element name="section-papers">
          <Papers />
        </Element>
        <Element name="section-contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Homepage;
