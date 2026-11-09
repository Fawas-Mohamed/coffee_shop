import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useNavbarScroll from '../hooks/useNavbarScroll';

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog', also: ['/blog-single'] },
  { to: '/about', label: 'About' },
];

const shopLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/product-single', label: 'Single Product' },
  { to: '/cart', label: 'Cart' },
  { to: '/checkout', label: 'Checkout' },
];

const COLLAPSE_MS = 350; // Bootstrap's collapse transition

export default function Navbar() {
  const { pathname } = useLocation();
  const { scrolled, awake, sleep } = useNavbarScroll();

  /* ---- mobile menu: closed -> opening -> open -> closing, with Bootstrap's height animation ---- */
  const [phase, setPhase] = useState('closed');
  const [height, setHeight] = useState(undefined);
  const panel = useRef(null);

  useLayoutEffect(() => {
    if (phase === 'opening') {
      setHeight(panel.current.scrollHeight); // reading it forces a reflow, so the 0 -> n height animates
      const t = setTimeout(() => { setPhase('open'); setHeight(undefined); }, COLLAPSE_MS);
      return () => clearTimeout(t);
    }
    if (phase === 'closing-start') {
      void panel.current.offsetHeight; // reflow with the explicit pixel height applied
      setHeight(undefined); // falls back to .collapsing { height: 0 } and animates
      setPhase('closing');
      return undefined;
    }
    if (phase === 'closing') {
      const t = setTimeout(() => setPhase('closed'), COLLAPSE_MS);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [phase]);

  const toggleMenu = () => {
    if (phase === 'closed') { setHeight(0); setPhase('opening'); }
    else if (phase === 'open') { setHeight(panel.current.getBoundingClientRect().height); setPhase('closing-start'); }
  };

  // the original reloaded the page on navigation, which closed the menu
  useEffect(() => { setPhase('closed'); setHeight(undefined); }, [pathname]);

  const collapseClass =
    phase === 'open' ? 'collapse navbar-collapse show'
    : phase === 'closed' ? 'collapse navbar-collapse'
    : 'navbar-collapse collapsing';

  /* ---- Shop dropdown: opens on hover (like the original) and on click ---- */
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const close = (e) => { if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdown(false); };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);
  useEffect(() => setDropdown(false), [pathname]);

  const isActive = (l) => pathname === l.to || (l.also || []).includes(pathname);

  const navClass = ['navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light', scrolled && 'scrolled', awake && 'awake', sleep && 'sleep']
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navClass} id="ftco-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">Coffee<small>Blend</small></Link>
        <button
          className={`navbar-toggler${phase === 'closed' || phase === 'closing' ? ' collapsed' : ''}`}
          type="button"
          aria-controls="ftco-nav"
          aria-expanded={phase === 'open' || phase === 'opening'}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className={collapseClass} id="ftco-nav" ref={panel} style={height === undefined ? undefined : { height }}>
          <ul className="navbar-nav ml-auto">
            {links.map((l) => (
              <li key={l.to} className={`nav-item${isActive(l) ? ' active' : ''}`}>
                <Link to={l.to} className="nav-link">{l.label}</Link>
              </li>
            ))}
            <li
              className={`nav-item dropdown${dropdown ? ' show' : ''}`}
              ref={dropdownRef}
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <a
                className="nav-link dropdown-toggle"
                href="/cart"
                id="dropdown04"
                aria-haspopup="true"
                aria-expanded={dropdown}
                onClick={(e) => { e.preventDefault(); setDropdown((v) => !v); }}
              >
                Shop
              </a>
            </li>
            <li className={`nav-item${pathname === '/contact' ? ' active' : ''}`}>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item cart">
              <Link to="/cart" className="nav-link">
                <span className="icon icon-shopping_cart"></span>
                <span className="bag d-flex justify-content-center align-items-center"><small>1</small></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
