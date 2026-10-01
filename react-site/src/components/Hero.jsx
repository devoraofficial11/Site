export default function Hero() {
return (
<section id="hero" className="hero section">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6 order-2 order-lg-1">
            <div className="hero-content">
              <h1 className="hero-title" style={{"marginTop": "-10px"}}>Devora – IT Solutions for Websites, Software, and
                Digital Growth <i className="bi bi-heart-fill" style={{"color": "var(--accent-color)"}}></i></h1>

              <p className="hero-description">We design and build timeless digital experiences that blend creativity,
                precision, and purpose — made to leave a lasting impression. Devora Official delivers Premium IT
                Solutions and Software Development in India.</p>
              <div className="hero-actions">
                <a href="#about" className="btn-primary">Start Your Journey</a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">12+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <picture>
                  <source type="image/avif" srcSet="assets/img/illustration/illustration-15.546x364.avif 1x, assets/img/illustration/illustration-15.1092x728.avif 2x" />
                  <source type="image/webp" srcSet="assets/img/illustration/illustration-15.546x364.webp 1x, assets/img/illustration/illustration-15.1092x728.webp 2x" />
                  <img src="assets/img/illustration/illustration-15.webp" className="img-fluid hero-image" alt="Hero Image" fetchPriority="high" loading="eager" decoding="async" width="546" height="364" />
                </picture>
                <div className="floating-elements">
                  <div className="floating-card card-1">
                    <i className="bi bi-lightbulb"></i>
                    <span>Innovation</span>
                  </div>
                  <div className="floating-card card-2">
                    <i className="bi bi-award"></i>
                    <span>Quality</span>
                  </div>
                  <div className="floating-card card-3">
                    <i className="bi bi-people"></i>
                    <span>Collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
);
}
