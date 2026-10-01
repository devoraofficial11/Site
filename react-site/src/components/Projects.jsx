import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  return <section id="our-projects" className="section projects-section">
    <div className="container section-title"><span className="description-title">Our Recent Projects</span><h2>Our Projects</h2><p>See our selected work and projects by Devora</p></div>
    <div className="container">
      <div className="row g-4">{projects.map((project, index) => <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index % 3 * 100} key={project.id}><ProjectCard project={project} /></div>)}</div>
    </div>
  </section>;
}
