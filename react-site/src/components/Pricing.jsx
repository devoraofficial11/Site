export default function Pricing() {
return (
<section id="pricing" className="pricing section">

      
      <div className="container section-title">
        <span className="description-title">Pricing</span>
        <h2>Pricing</h2>
        <p>Choose a starting point for your project. Final scope is tailored to your requirements.</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4">
            <article className="price-card h-100">
              <div className="card-head">
                <span className="badge-title">Website</span>
                <h3 className="title">Starting from <b>₹ 15,000</b></h3>
                <p className="subtitle">A polished, responsive website with the essentials to establish your business online.</p>

              </div>

              <ul className="feature-list list-unstyled mb-4">
                <li><i className="bi bi-check-circle"></i> Up to 5 pages</li>
                <li><i className="bi bi-check-circle"></i> Mobile-friendly design</li>
                <li><i className="bi bi-check-circle"></i> Essential on-page SEO</li>
                <li><i className="bi bi-check-circle"></i> Contact form setup</li>
              </ul>

              <div className="cta">
                <a href="#contact" className="btn btn-choose w-100">Discuss a Website</a>
              </div>
            </article>
          </div>

          <div className="col-lg-4">
            <article className="price-card featured h-100 position-relative">
              <div className="ribbon"><i className="bi bi-star-fill"></i> Popular</div>

              <div className="card-head">
                <span className="badge-title">Website + Custom Software</span>
                <h3 className="title">Starting from <b>₹ 40,000</b></h3>
                <p className="subtitle">A business website paired with custom tools for the workflows behind it.</p>

              </div>

              <ul className="feature-list list-unstyled mb-4">
                <li><i className="bi bi-check-circle"></i> Business website and responsive design</li>
                <li><i className="bi bi-check-circle"></i> Custom admin dashboard</li>
                <li><i className="bi bi-check-circle"></i> Software features matched to your workflow</li>
                <li><i className="bi bi-check-circle"></i> Website and software integration</li>
                <li><i className="bi bi-check-circle"></i> Setup and handover</li>
              </ul>

              <div className="cta">
                <a href="#contact" className="btn btn-choose w-100">Discuss a Website + Software Plan</a>
              </div>
            </article>
          </div>

          <div className="col-lg-4">
            <article className="price-card h-100">
              <div className="card-head">
                <span className="badge-title">Custom ERP / CRM</span>
                <h3 className="title">Starting from <b>₹ 60,000</b></h3>
                <p className="subtitle">A full-fledged custom system for managing business operations, customers, and reporting.</p>
              </div>

              <ul className="feature-list list-unstyled mb-4">
                <li><i className="bi bi-check-circle"></i> Custom ERP or CRM modules</li>
                <li><i className="bi bi-check-circle"></i> Role-based access and permissions</li>
                <li><i className="bi bi-check-circle"></i> Workflow automation</li>
                <li><i className="bi bi-check-circle"></i> Reports and business dashboards</li>
                <li><i className="bi bi-check-circle"></i> Integrations scoped to your needs</li>
                <li><i className="bi bi-check-circle"></i> Implementation and handover</li>
              </ul>

              <div className="cta">
                <a href="#contact" className="btn btn-choose w-100">Discuss ERP / CRM Software</a>
              </div>
            </article>
          </div>

        </div>

      </div>

    </section>
);
}
