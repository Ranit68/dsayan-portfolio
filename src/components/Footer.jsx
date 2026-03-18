import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP */}
      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-left">
          <h2>Sayan Das</h2>
          <p>
            Android Developer & AI/ML student building scalable apps
            and modern digital solutions.
          </p>
        </div>

        {/* CENTER LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>

        {/* RIGHT SOCIAL */}
        <div className="footer-social">
          <h3>Connect</h3>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Instagram</a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Sayan Das. All rights reserved.</p>
      </div>

    </footer>
  );
}