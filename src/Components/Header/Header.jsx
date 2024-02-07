import React from "react";
import "./Header.css";
import CTA from "./CTA";
import Image1 from "../../Assets/main-pic.jpeg";
import Socials from "./Socials";

const Header = () => {
  return (
    <>
      <div className="container header__container">
        <h5> Hey I'm </h5>
        <h1> Akash S M </h1>
        <h5 className="text-light"> Full Stack Develoepr </h5>
        <div>  
        <CTA />
        <Socials />
        <div className="me">
        <img src={Image1} alt="mypic" />
      </div>
     </div>
        <a href="#Contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </>
  );
};

export default Header;
