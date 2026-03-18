import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">

      {/* LEFT INFO */}
      <div className="contact-left">
        <h2>Let’s Connect</h2>

        <p>
          I'm open to internships, freelance projects, and collaboration.
          Feel free to reach out — let's build something amazing together 🚀
        </p>

        <div className="contact-info">
          <p>📧 sayondas2027@gmail.com</p>
          <p>📍 India</p>
        </div>

        {/* SOCIAL */}
        <div className="contact-socials">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Instagram</a>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="contact-right">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

    </section>
  );
}