export default function Contact() {
return (
<section id="contact" className="contact section light-background">

      
      <div className="container section-title">
        <span className="description-title">Contact</span>
        <h2>Contact</h2>
        <p>Just fill out the form below and we'll get back to you within 24 hours.</p>
      </div>

      <div className="container">

        <div className="row g-5">
          <div className="col-lg-6">
            <div className="content">
              <div className="section-category mb-3">Contact US</div>
              <h2 className="display-5 mb-4">We are here to help you</h2>
              <p className="lead mb-4">We are here to help you with any inquiries or support you may need. Please fill out
                the form and we'll get back to you within 24 hours.</p>

              <div className="contact-info mt-5">
                <div className="info-item d-flex mb-3">
                  <i className="bi bi-envelope-at me-3"></i>
                  <span>devoraofficial11@gmail.com</span>
                </div>

                <div className="info-item d-flex mb-3">
                  <i className="bi bi-telephone me-3"></i>
                  <span>+91 94286 91316</span>
                </div>
                
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-form card">
              <div className="card-body p-4 p-lg-5">

                <form action="https://formspree.io/f/xnngyllp" method="POST">


                  <div className="row gy-4">

                    <div className="col-12">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" aria-label="Your Name" required />
                    </div>

                    <div className="col-12 ">
                      <input type="email" className="form-control" name="email" placeholder="Your Email" aria-label="Your Email" required />
                    </div>

                    <div className="col-12">
                      <input type="text" className="form-control" name="subject" placeholder="Subject" aria-label="Subject" required />
                    </div>

                    <div className="col-12">
                      <textarea className="form-control" name="message" rows="6" placeholder="Message" aria-label="Message" required></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-submit w-100">Submit Message</button>
                    </div>

                  </div>
                </form>

              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
);
}
