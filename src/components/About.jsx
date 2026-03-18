import "./About.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about">

      {/* BACKGROUND SHAPES */}
      <div className="about-shape1"></div>
      <div className="about-shape2"></div>

      {/* LEFT IMAGE */}
      <motion.div 
        className="about-image"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/programmer-working-on-laptop-illustration-download-in-svg-png-gif-file-formats--coding-developer-programming-pack-people-illustrations-3783952.png"
          alt="developer"
        />
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="section-tag">ABOUT ME</h4>

        <h2>
          Passionate <span>Android Developer</span> <br />
          & Future <span>AI Engineer</span>
        </h2>

        <p>
          I am a dedicated <b>Android App Developer</b> and B.Tech student in 
          <b> AI & ML</b>. I build scalable, high-performance apps with modern tech.
        </p>

        <p>
          Built apps like <b>E-commerce</b>, <b>Social Media</b>, 
          <b> Video Calling</b>, and <b>Streaming platforms</b>.
        </p>

        {/* 🔥 STATS */}
        <div className="about-stats">
          <div>
            <h3>10+</h3>
            <p>Projects</p>
          </div>
          <div>
            <h3>3+</h3>
            <p>Years Learning</p>
          </div>
          <div>
            <h3>100%</h3>
            <p>Dedication</p>
          </div>
        </div>

        {/* TAGS */}
        <div className="about-tags">
          {["Java", "Firebase", "Supabase", "APIs", "React"].map((tag, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

      </motion.div>

    </section>
  );
}