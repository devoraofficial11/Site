export default function Testimonials() {
return (
<section id="testimonials" className="testimonials section">

      
      <div className="container section-title">
        <span className="description-title">Testimonials</span>
        <h2>Testimonials</h2>
        <p>Feedback from clients we have worked with</p>
      </div>

      <div className="container">

        <div className="testimonial-masonry">

          <div className="testimonial-item">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>Giving my project to Devora was one of my best decisions. The software, the team, and the support were all great.</p>

              <div className="client-info">
                <div className="client-image">
                  <img src="assets/img/person/person1.jpg" alt="" loading="lazy" decoding="async" width="50" height="50" />
                </div>
                <div className="client-details">
                  <h3>Mr. Manrajsingh</h3>
                  <span className="position">Client</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item highlight">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>Devora transformed our website into a modern, professional experience. The team delivered attentive service and practical solutions throughout the project.</p>
              <div className="client-info">
                <div className="client-image">
                  <img src="assets/img/person/person2.jpg" alt="" loading="lazy" decoding="async" width="50" height="50" />
                </div>
                <div className="client-details">
                  <h3>Mr. Rishi</h3>
                  <span className="position">CEO, Kalpataru Polypack</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>Working with Devora was a pleasure. The team was professional, responsive, and supportive throughout the project.</p>
              <div className="client-info">
                <div className="client-image">
                  <img src="assets/img/person/person3.jpg" alt="" loading="lazy" decoding="async" width="50" height="50" />
                </div>
                <div className="client-details">
                  <h3>Mr. Ankit Patel</h3>
                  <span className="position">COO, Shri Bhagwati Polypack</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
);
}
