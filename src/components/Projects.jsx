import "./Projects.css";
import { useState } from "react";
import { motion } from "framer-motion";
import movieImg from "../assets/movie.png";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "E-commerce App",
      category: "Android",
      desc: "Shopping app with cart & orders",
      img: "https://cdn.dribbble.com/userupload/16255420/file/still-11d3b12795d97b1ce5d544684ab6968c.png?resize=400x0",
      link: "https://github.com/Ranit68/MyEcommerceApp"
    },
    {
      title: "Social Media App",
      category: "Android",
      desc: "Instagram-like app",
      img: "https://cdn.dribbble.com/users/5484409/screenshots/17244260/media/f12dd7e40d250aea7233394fdbb93042.png",
      link: "https://github.com/Ranit68/SnapVerse"
    },
    {
      title: "Portfolio Website",
      category: "Web",
      desc: "React portfolio",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "https://your-portfolio-link.com"
    },
    {
      title: "Movie App",
      category: "Android",
      desc: "Streaming app with API",
      img: movieImg,
      link: "https://movieflix1-ten.vercel.app/"
    }
  ];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>

      {/* SHOW 3 */}
      <div className="projects-grid">
        {projects.slice(0, 3).map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <img src={p.img} alt={p.title} />

            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <a href={p.link} target="_blank" rel="noreferrer">
                <button>View Project</button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VIEW ALL */}
      <div className="view-all">
        <button onClick={() => setShowAll(true)}>View All</button>
      </div>

      {/* MODAL */}
      {showAll && (
        <div className="modal-full">
          <div className="modal-header">
            <h2>All Projects</h2>
            <button onClick={() => setShowAll(false)}>✕</button>
          </div>

          {/* FILTER */}
          <div className="filters">
            {["All", "Android", "Web"].map((f) => (
              <button
                key={f}
                className={filter === f ? "active" : ""}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="projects-grid modal-grid">
            {filtered.map((p, i) => (
              <div className="project-card" key={i}>
                <img src={p.img} alt={p.title} />

                <div className="project-info">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>

                  <a href={p.link} target="_blank" rel="noreferrer">
                    <button>View Project</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}