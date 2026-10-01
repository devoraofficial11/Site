export default function Services() {
return (
<section id="services" className="services section">

      
      <div className="container section-title">
        <span className="description-title">Services</span>
        <h2>Services</h2>
        <p>Delivering Exceptional Results</p>
      </div>

      <div className="container">

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="intro-content">
              <div className="section-badge mb-3">
                <i className="bi bi-star-fill"></i>
                <span>WHAT WE DO</span>
              </div>
              <h2 className="section-heading mb-4">Transforming Ideas into Outstanding Results</h2>
              <p className="section-description mb-4">We believe in crafting exceptional experiences that drive meaningful
                growth for your business. Our dedicated team combines creativity with technical excellence to deliver
                solutions that make a difference.</p>
              <a href="#our-projects" className="cta-button">
                Explore Our Work
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-visual">
              <img src="assets/img/services/services-1.webp" alt="Services" className="img-fluid" loading="lazy" decoding="async" width="546" height="364" />
            </div>
          </div>
        </div>

        <div className="services-grid mt-5">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="card-number">
                  <span><i className="bi bi-star-fill"></i></span>
                </div>
                <div className="card-content">
                  <h5 className="service-title">
                    <a href="#contact">Web/Software Development</a>
                  </h5>
                  <p className="service-description">Building robust applications tailored to your specific needs using
                    modern frameworks and cutting-edge technologies.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="card-number">
                  <span><i className="bi bi-phone"></i></span>
                </div>
                <div className="card-content">
                  <h5 className="service-title">
                    <a href="#contact">Mobile App Development</a>
                  </h5>
                  <p className="service-description">Creating engaging and intuitive mobile applications that deliver
                    seamless experiences across iOS and Android platforms.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="card-number">
                  <span><i className="bi bi-globe"></i></span>
                </div>
                <div className="card-content">
                  <h5 className="service-title">
                    <a href="#contact">Graphic Design</a>
                  </h5>
                  <p className="service-description">Creating visually stunning and engaging designs that capture attention
                    and communicate your brand's essence effectively.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="card-number">
                  <span><i className="bi bi-search"></i></span>
                </div>
                <div className="card-content">
                  <h5 className="service-title">
                    <a href="#contact">SEO Services</a>
                  </h5>
                  <p className="service-description">Optimizing your website to improve visibility and attract organic
                    traffic through search engine results.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="card-number">
                  <span><i className="bi bi-bar-chart-fill"></i></span>
                </div>
                <div className="card-content">
                  <h5 className="service-title">
                    <a href="#contact">Re-Design</a>
                  </h5>
                  <p className="service-description">Crafting intuitive interfaces that prioritize user needs while
                    delivering seamless interactions across desktop and mobile platforms.</p>
                </div>
              </div>
            </div>



          </div>
        </div>

      </div>

    </section>
);
}
