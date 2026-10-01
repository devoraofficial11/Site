export default function About() {
return (
<section id="about" className="about section">

      <div className="container">

        <div className="row gy-5">

          <div className="col-lg-6">
            <div className="content-wrapper">
              <div className="section-header">
                <span className="section-badge">ABOUT OUR COMPANY</span>
                <h2>We are "Devora" - A Digital Agency</h2>
              </div>
              <p className="description-text">We are a digital agency that specializes in creating innovative and engaging
                digital experiences for our clients. Our team of experts is dedicated to delivering high-quality results
                that meet the needs of our clients and exceed their expectations.</p>

              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">12+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="visual-section">
              <div className="main-image-container">
                <picture>
                  <source type="image/avif" srcSet="assets/img/about/about-8.546x364.avif 1x, assets/img/about/about-8.1092x728.avif 2x" />
                  <source type="image/webp" srcSet="assets/img/about/about-8.546x364.webp 1x, assets/img/about/about-8.1092x728.webp 2x" />
                  <img src="assets/img/about/about-8.webp" alt="Professional team collaboration" className="img-fluid main-visual" loading="lazy" decoding="async" width="546" height="364" />
                </picture>
                <div className="overlay-card">
                  <div className="card-content">
                    <h4>Quality First</h4>
                    <p>At Devora, we prioritize quality in everything we do. We believe that quality is not just about
                      meeting expectations, but exceeding them. </p>
                    <div className="card-icon">
                      <picture>
                        <source type="image/avif" srcSet="assets/img/medal.70x70.avif 1x" />
                        <source type="image/webp" srcSet="assets/img/medal.70x70.webp 1x" />
                        <img src="assets/img/medal.70x70.png" alt="Quality First" className="img-fluid" loading="lazy" decoding="async" width="70" height="70" />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>

              <div className="secondary-images">
                <div className="row g-3">
                  <div className="col-6">
                    <picture>
                      <source type="image/avif" srcSet="assets/img/about/about-11.265x177.avif 1x, assets/img/about/about-11.530x354.avif 2x" />
                      <source type="image/webp" srcSet="assets/img/about/about-11.265x177.webp 1x, assets/img/about/about-11.530x354.webp 2x" />
                      <img src="assets/img/about/about-11.webp" alt="Team meeting" className="img-fluid secondary-img" loading="lazy" decoding="async" width="265" height="177" />
                    </picture>
                  </div>
                  <div className="col-6">
                    <picture>
                      <source type="image/avif" srcSet="assets/img/about/about-5.265x177.avif 1x, assets/img/about/about-5.530x354.avif 2x" />
                      <source type="image/webp" srcSet="assets/img/about/about-5.265x177.webp 1x, assets/img/about/about-5.530x354.webp 2x" />
                      <img src="assets/img/about/about-5.webp" alt="Office workspace" className="img-fluid secondary-img" loading="lazy" decoding="async" width="265" height="177" />
                    </picture>
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
