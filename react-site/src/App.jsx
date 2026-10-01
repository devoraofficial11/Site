import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Testimonials from './components/Testimonials.jsx';
import Services from './components/Services.jsx';
import Pricing from './components/Pricing.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main" tabIndex={-1}>
      <Hero /><About /><Projects />
      <Testimonials /><Services /><Pricing />
      <section id="faq" className="section faq">
        <div className="container"><div className="row justify-content-center"><div className="col-lg-10"><div className="faq-container">
          <details className="faq-item"><summary>How can I direct contact Devora?</summary><div className="faq-content"><p>For any inquiries or support, contact <a href="mailto:devoraofficial11@gmail.com">devoraofficial11@gmail.com</a> or call +91 9428691316.</p></div></details>
          <details className="faq-item"><summary>Do you provide ongoing support and maintenance services?</summary><div className="faq-content"><p>Yes, we offer post-launch support including website maintenance, security updates, content management, and performance optimization.</p></div></details>
        </div></div></div></div>
      </section>
      <Contact />
    </main>
    <Footer />
    <a className="whatsapp-link" href="https://wa.me/919428691316?text=I%20want%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer" aria-label="Contact Devora on WhatsApp"><i className="bi bi-whatsapp" aria-hidden="true" /></a>
  </>;
}
