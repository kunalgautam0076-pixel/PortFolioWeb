import { useState,useEffect } from "react";

import "./Navbar.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [active, setActive] = useState("home");

useEffect(() => {
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    setActive(current);
  });
}, []);

  return (
    <nav className="navbar">
      <div className="logo">Kunal.</div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" className={active === "home" ? "active" : ""}>Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;