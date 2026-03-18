import { useEffect, useRef } from "react";
import "./Skills.css";

export default function Skills() {
  const trackRef = useRef(null);

  const skills = [
    { name: "Spring-Boot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Kotlin", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Node", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Dart", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "Supabase", img: "https://seeklogo.com/images/supabase/supabase-logo-DCC676FFE2-seeklogo.com.png" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Android", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" }
  ];

useEffect(() => {
  const track = trackRef.current;
  let scrollAmount = 0;
  let speed = 0.5; // adjust speed

  let animationFrame;

  const animate = () => {
    scrollAmount += speed;

    if (scrollAmount >= track.scrollWidth / 3) {
      scrollAmount = 0; // seamless loop
    }

    track.style.transform = `translateX(-${scrollAmount}px)`;

    animationFrame = requestAnimationFrame(animate);
  };

  animate();

  return () => cancelAnimationFrame(animationFrame);
}, []);

  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-wrapper">
        <div className="skills-track" ref={trackRef}
          onMouseEnter={() => (trackRef.current.style.animationPlayState = "paused")}
  onMouseLeave={() => (trackRef.current.style.animationPlayState = "running")}
        >
          {[...skills, ...skills, ...skills].map((skill, i) => (
            <div className="skill-card" key={i}>
              <img src={skill.img} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}