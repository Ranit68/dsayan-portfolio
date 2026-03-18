import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMenuOpen(false); // close first

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -70;
        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 200); // wait for menu close
  };

  return (
    <nav className="navbar">
      <h2 className="logo" onClick={() => scrollToSection("home")}>
        Sayan Das
      </h2>

      {/* MENU ICON */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => scrollToSection("hero")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("projects")}>Work</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      <button
        className="talk-btn"
        onClick={() => scrollToSection("contact")}
      >
        LET'S TALK
      </button>
    </nav>
  );
}