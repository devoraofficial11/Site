export default function Footer() {
return (
<footer id="footer" className="footer position-relative">

    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-about">
          <a href="#hero" className="logo d-flex align-items-center">
            <span className="sitename">Devora</span>
          </a>
          <p>Devora is an IT services company helping businesses plan, build, and improve websites and digital products.</p>
          <div className="social-links d-flex mt-4">
            <a href="https://x.com/Devora_2025" target="_blank" rel="noopener noreferrer" aria-label="Devora on X"><i className="bi bi-twitter-x"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61584251512433" target="_blank" rel="noopener noreferrer" aria-label="Devora on Facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/devora_it/" target="_blank" rel="noopener noreferrer" aria-label="Devora on Instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/devora-devora-00960b392/" target="_blank" rel="noopener noreferrer" aria-label="Devora on LinkedIn"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#our-projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#contact">Web Development</a></li>
            <li><a href="#contact">Web Re-Design</a></li>
            <li><a href="#contact">SEO Services</a></li>
            <li><a href="#contact">Graphic Design</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p className="mt-4"><strong>Phone:</strong> <a href="tel:+919428691316">+91 94286 91316</a></p>
          
          <p><strong>Email:</strong> <a href="mailto:devoraofficial11@gmail.com">devoraofficial11@gmail.com</a></p>
        </div>

      </div>
    </div>

  </footer>
);
}
