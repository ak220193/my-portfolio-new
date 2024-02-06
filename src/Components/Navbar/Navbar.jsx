import React from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { RiContactsBookLine } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#About"
        onClick={() => setActiveNav("#About")}
        className={activeNav === "About" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#Experience"
        onClick={() => setActiveNav("#Experience")}
        className={activeNav === "About" ? "active" : ""}
      >
        <BiBook />{" "}
      </a>
      <a
        href="#Portfolio"
        onClick={() => setActiveNav("#Portfolio")}
        className={activeNav === "About" ? "active" : ""}
      >
        <CgWebsite />
      </a>
      <a
        href="#Services"
        onClick={() => setActiveNav("#Services")}
        className={activeNav === "About" ? "active" : ""}
      >
        <RiServiceLine />{" "}
      </a>
      <a
        href="#Contact"
        onClick={() => setActiveNav("#Contact")}
        className={activeNav === "About" ? "active" : ""}
      >
        <RiContactsBookLine />
      </a>
      <a
        href="Mode"
        onClick={() => setActiveNav("#Mode")}
        className={activeNav === "About" ? "active" : ""}
      >
        <IoMoonOutline />
      </a>
    </nav>
  );
};

export default Navbar;
