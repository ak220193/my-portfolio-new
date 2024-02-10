import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/akash-s-m/" target="blank">
        <BsLinkedin />{" "}
      </a>
      <a href="https://github.com/ak220193" target="blank">
        {" "}
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/vicky.jacky.3/" target="blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default Socials;
