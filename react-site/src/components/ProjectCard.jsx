import { useEffect, useRef, useState } from 'react';

export default function ProjectCard({ project }) {
  const video = useRef(null);
  const card = useRef(null);
  const [requested, setRequested] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const active = visible && !failed && !reduced && (hovered || focused);

  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setReduced(media.matches);
    const visibility = () => { if (document.hidden) { setHovered(false); setFocused(false); } };
    media.addEventListener('change', change);
    document.addEventListener('visibilitychange', visibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(card.current);
    return () => { observer.disconnect(); media.removeEventListener('change', change); document.removeEventListener('visibilitychange', visibility); };
  }, []);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    let cancelled = false;
    let timer;
    if (active) {
      setRequested(true);
      element.playbackRate = 1.5;
      element.play().catch(() => { if (!cancelled) setPlaying(false); });
    } else {
      setPlaying(false);
      timer = setTimeout(() => { element.pause(); element.currentTime = 0; }, reduced ? 0 : 360);
    }
    return () => { cancelled = true; clearTimeout(timer); };
  }, [active, loaded, reduced, requested]);
  function startHover(event) {
    if (event.pointerType === 'mouse') setHovered(true);
  }
  function focusPreview(event) {
    if (!event.target.matches(':focus-visible')) return;
    setFocused(true);
  }
  return <article ref={card} className="project-card" onPointerEnter={startHover} onPointerLeave={() => setHovered(false)}
    onFocus={focusPreview}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <div className={`project-media ${active && playing ? 'is-playing' : ''}`}>
      <picture className="project-thumb"><img src={project.image} alt={`${project.title} preview`} loading="lazy" decoding="async" width="640" height="400" /></picture>
      {project.video && <video ref={video} src={requested ? project.video : undefined} poster={project.image} muted loop playsInline preload="none" aria-hidden="true" onLoadedData={() => setLoaded(true)} onPlaying={() => setPlaying(true)} onError={() => { setFailed(true); setPlaying(false); }} />}
    </div>
    <div className="p-3 p-lg-4">
      <div className="project-tags d-flex flex-wrap gap-2 mb-3">{project.tags.map(tag => <span className="badge bg-success-subtle text-success" key={tag}>{tag}</span>)}</div>
      <h5 className="mb-2">{project.title}</h5><p className="mb-3">{project.description}</p>
      {project.result && <p className="project-result">{project.result}</p>}
      <div className="d-flex align-items-center gap-3 project-card-links">
        {project.href ? <a className="d-inline-flex align-items-center" href={project.href} target="_blank" rel="noopener noreferrer"><i className="bi bi-link-45deg me-1" aria-hidden="true" />Live Experience</a> : <span className="d-inline-flex align-items-center project-type"><i className={`bi ${project.icon || 'bi-person-workspace'} me-1`} aria-hidden="true" />{project.type || 'Personal Project'}</span>}
      </div>
    </div>
  </article>;
}
