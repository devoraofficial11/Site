import { useEffect, useRef, useState } from 'react';

const links = [['hero', 'Home'], ['about', 'About'], ['our-projects', 'Projects'], ['services', 'Services'], ['pricing', 'Pricing'], ['contact', 'Contact']];

export default function Header() {
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || 'light');
  const [menu, setMenu] = useState(false);
  const [mobileViewport, setMobileViewport] = useState(() => window.matchMedia('(max-width: 1199px)').matches);
  const [active, setActive] = useState('hero');
  const menuButton = useRef(null);
  const navigation = useRef(null);
  const explicit = useRef(false);
  useEffect(() => {
    try { explicit.current = ['light', 'dark'].includes(localStorage.getItem('devora-theme')); } catch { /* Storage may be disabled. */ }
    const storage = (event) => {
      if (event.key !== 'devora-theme' && event.key !== null) return;
      explicit.current = ['light', 'dark'].includes(event.newValue);
      setTheme(explicit.current ? event.newValue : 'light');
    };
    window.addEventListener('storage', storage);
    return () => window.removeEventListener('storage', storage);
  }, []);
  useEffect(() => {
    const sync = () => {
      document.body.classList.toggle('scrolled', window.scrollY > 100);
      const sections = links.map(([id]) => document.getElementById(id)).filter(Boolean);
      const current = sections.filter(section => section.getBoundingClientRect().top <= 150).at(-1);
      setActive(current?.id || 'hero');
    };
    sync();
    window.addEventListener('scroll', sync, { passive: true });
    return () => window.removeEventListener('scroll', sync);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.bsTheme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0c1515' : '#ffffff');
  }, [theme]);
  useEffect(() => {
    document.body.classList.toggle('mobile-nav-active', menu);
    document.body.style.overflow = menu ? 'hidden' : '';
    return () => { document.body.classList.remove('mobile-nav-active'); document.body.style.overflow = ''; };
  }, [menu]);
  useEffect(() => {
    if (menu) navigation.current?.querySelector('ul a[href]')?.focus();
  }, [menu]);
  useEffect(() => {
    const close = (event) => { if (event.key === 'Escape' && menu) { setMenu(false); document.body.classList.remove('mobile-nav-active'); menuButton.current?.focus(); } };
    const desktop = matchMedia('(min-width: 1200px)');
    const resize = () => { setMobileViewport(!desktop.matches); if (desktop.matches) { setMenu(false); document.body.classList.remove('mobile-nav-active'); } };
    document.addEventListener('keydown', close);
    desktop.addEventListener('change', resize);
    return () => { document.removeEventListener('keydown', close); desktop.removeEventListener('change', resize); };
  }, [menu]);
  async function handleGetStarted(event) {
    event.preventDefault();
    const phone = '+919428691316';
    const message = 'I want to discuss a project';
    const waHref = `https://wa.me/919428691316?text=${encodeURIComponent(message)}`;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      || ('ontouchstart' in window && navigator.maxTouchPoints > 0);
    if (!isMobile) { window.open(waHref, '_blank', 'noopener'); return; }
    try { await navigator.clipboard?.writeText(phone); } catch { /* Dial the number if clipboard access is unavailable. */ }
    window.location.href = `tel:${phone}`;
  }
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    explicit.current = true;
    setTheme(next);
    try { localStorage.setItem('devora-theme', next); } catch { /* Still works for this session. */ }
  }
  function closeMenu() { setMenu(false); }
  function toggleMenu() { setMenu(current => !current); }
  function closeFromBackdrop(event) { if (event.target === event.currentTarget) closeMenu(); }
  function keepFocusInMenu(event) {
    if (!menu || event.key !== 'Tab') return;
    const targets = navigation.current?.querySelectorAll('a[href], button:not([disabled])');
    if (!targets?.length) return;
    const first = targets[0];
    const last = targets[targets.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
  return <header className="header d-flex align-items-center fixed-top" id="header">
    <div className="container position-relative d-flex align-items-center justify-content-between">
      <a href="#hero" className="logo d-flex align-items-center me-auto me-xl-0" onClick={closeMenu}>
        <picture><source type="image/avif" srcSet="./assets/img/logo.36x36.avif"/><source type="image/webp" srcSet="./assets/img/logo.36x36.webp"/><img src="./assets/img/logo.36x36.png" alt="" width="36" height="36"/></picture>
        <h1 className="sitename">Devora</h1>
      </a>
      <nav ref={navigation} id="navmenu" className={`navmenu${menu ? ' is-open' : ''}`} aria-label="Main navigation" onClick={closeFromBackdrop} onKeyDown={keepFocusInMenu}>
        <ul aria-hidden={!menu && mobileViewport ? true : undefined} inert={!menu && mobileViewport ? true : undefined}>{links.map(([id, label]) => <li key={id}><a href={`#${id}`} className={active === id ? 'active' : undefined} aria-current={active === id ? 'location' : undefined} onClick={closeMenu}>{label}</a></li>)}</ul>
        <button ref={menuButton} type="button" className={`mobile-nav-toggle d-xl-none bi bi-${menu ? 'x' : 'list'}`} aria-expanded={menu} aria-controls="navmenu" aria-label={menu ? 'Close menu' : 'Open menu'} onClick={toggleMenu}/>
      </nav>
      <div className="header-utilities">
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}><i aria-hidden="true" className={`bi bi-${theme === 'dark' ? 'sun' : 'moon-stars'}`} /></button>
        <a id="btn-getstarted" className="btn-getstarted" href="https://wa.me/919428691316?text=I%20want%20to%20discuss%20a%20project" onClick={handleGetStarted}>Get Started</a>
      </div>
    </div>
  </header>;
}
