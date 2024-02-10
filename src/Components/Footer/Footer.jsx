import React from "react";
import "./Footer.css";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <section id="Footer">
      <footer>
        <a href="#" className="footer__logo">
          Akash S M 
        </a>

        <ul className="permalinks">
          <li>

            <a href="#"> Home</a>{" "}
          </li>
          <li>

            <a href="#About"> About</a>{" "}
          </li>
          <li>

            <a href="#Experience"> Experience</a>{" "}
          </li>
          <li>

            <a href="#Services"> Services</a>{" "}
          </li>
          <li>

            <a href="#Portfolio"> PortFolio</a>{" "}
          </li>
          <li>

            <a href="#Testimonial"> Testimonial</a>{" "}
          </li>
          <li>

            <a href="#Contact"> Contact</a>{" "}
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://linkedin.com" target="blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com" target="blank">
            <BsGithub />
          </a>
          <a href="https://instagram.com" target="blank">
            <BsInstagram />
          </a>
        </div>

        <div className="footer__copyright">
          <small> &copy; 2024 | All Rights Reserved </small>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
