import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf"; // Fix the path if incorrect
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Welcome to My Profile",
          "My Name is Priyanshu Dubey",
          "I'm a Full Stack Developer",
          "MERN Stack Developer",
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        showCursor: false, // Disable the blinking cursor
      });
  
      return () => typed.destroy();
    }
  }, []);
  

  return (
    <div className="home container" id="home">
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 ref={typedRef}></h1>

        <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">
          Download Resume
        </a>
      </div>
      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img src={`/assets/${hero.imgSrc}`} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;
