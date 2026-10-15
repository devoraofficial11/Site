import { useEffect, useState } from 'react';

const testimonials = [
  {
    quote: 'Giving my project to Devora was one of my best decisions. The software, the team, and the support were all great.',
    image: 'assets/img/person/person1.jpg',
    name: 'Mr. Manrajsingh',
    role: 'Client',
  },
  {
    quote: 'Devora transformed our website into a modern, professional experience. The team delivered attentive service and practical solutions throughout the project.',
    image: 'assets/img/person/person2.jpg',
    name: 'Mr. Rishi',
    role: 'CEO, Kalpataru Polypack',
  },
  {
    quote: 'Working with Devora was a pleasure. The team was professional, responsive, and supportive throughout the project.',
    image: 'assets/img/person/person3.jpg',
    name: 'Mr. Ankit Patel',
    role: 'COO, Shri Bhagwati Polypack',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const show = (index) => setActiveIndex((index + testimonials.length) % testimonials.length);
  const testimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title">
        <span className="description-title">Testimonials</span>
        <h2>Testimonials</h2>
        <p>Feedback from clients we have worked with</p>
      </div>

      <div className="container">
        <div
          className="testimonial-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
          }}
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <div className="testimonial-item highlight testimonial-slide" aria-live="polite" aria-atomic="true" key={testimonial.name}>
            <div className="testimonial-content">
              <div className="quote-pattern"><i className="bi bi-quote" aria-hidden="true"></i></div>
              <p>{testimonial.quote}</p>
              <div className="client-info">
                <div className="client-image">
                  <img src={testimonial.image} alt="" loading="lazy" decoding="async" width="50" height="50" />
                </div>
                <div className="client-details">
                  <h3>{testimonial.name}</h3>
                  <span className="position">{testimonial.role}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-controls">
            <button className="testimonial-arrow" type="button" onClick={() => show(activeIndex - 1)} aria-label="Previous testimonial">
              <i className="bi bi-arrow-left" aria-hidden="true"></i>
            </button>
            <div className="testimonial-dots" aria-label="Choose a testimonial">
              {testimonials.map((item, index) => (
                <button
                  className={`testimonial-dot${index === activeIndex ? ' is-active' : ''}`}
                  key={item.name}
                  type="button"
                  onClick={() => show(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                />
              ))}
            </div>
            <button className="testimonial-arrow" type="button" onClick={() => show(activeIndex + 1)} aria-label="Next testimonial">
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
