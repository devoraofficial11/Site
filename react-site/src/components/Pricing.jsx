export default function Pricing() {
return (
<section id="pricing" className="pricing section">

      
      <div className="container section-title">
        <span className="description-title">Pricing</span>
        <h2>Pricing</h2>
        <p>Affordable pricing plans to suit your budget</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4">
            <article className="price-card h-100">
              <div className="card-head">
                <span className="badge-title">Silver Box</span>
                <h3 className="title">Starting at <b>₹ 8000</b></h3>
                <p className="subtitle">Silver Box is a basic plan that offers a range of features to help you get started
                  with your website.</p>

              </div>

              <ul className="feature-list list-unstyled mb-4">
                <li><i className="bi bi-check-circle"></i> Up to 5 Pages</li>
                <li><i className="bi bi-check-circle"></i> Responsive Design</li>
                <li><i className="bi bi-check-circle"></i> Basic SEO</li>
                <li><i className="bi bi-check-circle"></i> Contact Form Attach</li>
              </ul>

              <div className="cta">
                <a href="#contact" className="btn btn-choose w-100">Get Started</a>
              </div>
            </article>
          </div>

          <div className="col-lg-4">
            <article className="price-card featured h-100 position-relative">
              <div className="ribbon"><i className="bi bi-star-fill"></i> Popular</div>

              <div className="card-head">
                <span className="badge-title">Gold Box</span>
                <h3 className="title">Starting at <b>₹ 15000</b></h3>
                <p className="subtitle">Gold Box is a premium plan that offers a range of features to help you get started
                  with your website.</p>

              </div>

              <ul className="feature-list list-unstyled mb-4">
                <li><i className="bi bi-check-circle"></i> Up to 10 Pages</li>
                <li><i className="bi bi-check-circle"></i> Responsive Design</li>
                <li><i className="bi bi-check-circle"></i> On-Page SEO Optimization</li>
                <li><i className="bi bi-check-circle"></i> Unlimited Reviews</li>
                <li><i className="bi bi-check-circle"></i> Email Support</li>
              </ul>

              <div className="cta">
                <a href="#contact" className="btn btn-choose w-100">Choose Pro</a>
              </div>
            </article>
          </div>

          <div className="col-lg-4">
            <article className="price-card h-100">
              <div className="card-head">
                <span className="badge-title">Diamond Box</span>
                <h3 className="title">Starting at <b>₹ 30000</b></h3>
                <p className="subtitle">Diamond Box is a premium plan that offers a range of features to help you get
                  started with your website.</p>
              </div>

              <ul className="feature-list list-unstyled mb-4">
                <li><i className="bi bi-check-circle"></i> All Features from Gold Box +</li>
                <li><i className="bi bi-check-circle"></i> Inquiry Forms and many more</li>
                <li><i className="bi bi-check-circle"></i> Responsive Design</li>
                <li><i className="bi bi-check-circle"></i> On-Page SEO Optimization</li>
                <li><i className="bi bi-check-circle"></i> Fully Customizable</li>
                <li><i className="bi bi-check-circle"></i> Free Server Hosting for 1 Year</li>
              </ul>

              <div className="cta">
                <a href="#contact" className="btn btn-choose w-100">Start Business</a>
              </div>
            </article>
          </div>

        </div>

      </div>

    </section>
);
}
