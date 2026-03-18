import "./Hero.css";
import profile from "../assets/profile.avif";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = ["Android Developer", "Freelancer" ,"Web Developer"];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [showResume, setShowResume] = useState(false); // 🔥 NEW

  useEffect(() => {
    const current = roles[index];
    let speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <section id="hero" className="hero">

      {/* LEFT */}
      <div className="hero-left">
        <h1>
          Hey! I am <br />
          <span className="typing-text">{text}</span>
          <span className="cursor">|</span>
        </h1>

        <p>
          I am a passionate Android Developer and AI & ML student who builds
          scalable, real-world applications with clean architecture and modern
          technologies.
        </p>

        <div className="hero-buttons">
          <button className="btn primary" onClick={() => setShowResume(true)}>
            Resume
          </button>

          <a href="#about">
            <button className="btn dark">About Me</button>
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <div className="circle-wrapper">
          <div className="ring ring1"></div>
          <div className="ring ring2"></div>
          <div className="ring ring3"></div>

          <div className="circle">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>

      {/* 🔥 RESUME MODAL */}
      {showResume && (
        <div className="resume-modal">
          <div className="resume-content">
            <button className="close-btn" onClick={() => setShowResume(false)}>
              ✕
            </button>

            <iframe
              src="/Resume.pdf"
              title="Resume"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}