import { createContext, useContext, useEffect, useRef, useState } from 'react';

const TabsContext = createContext(null);
const FADE_MS = 150; // Bootstrap's .fade transition

/**
 * Pill tabs (replaces Bootstrap's data-toggle="pill").
 * <Tabs> shares state; <TabLink> and <TabPane> can sit anywhere inside it.
 * Same sequence as Bootstrap: link turns active at once, old pane fades out,
 * then the new pane is displayed and fades in.
 */
export function Tabs({ initial, children }) {
  const [current, setCurrent] = useState(initial); // which link is active
  const [active, setActive] = useState(initial); // which pane is displayed
  const [shown, setShown] = useState(initial); // which pane is faded in
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const select = (id) => {
    if (id === current) return;
    timers.current.forEach(clearTimeout);
    setCurrent(id);
    setShown(null);
    timers.current = [
      setTimeout(() => {
        setActive(id);
        timers.current.push(setTimeout(() => setShown(id), 20));
      }, FADE_MS),
    ];
  };

  return <TabsContext.Provider value={{ current, active, shown, select }}>{children}</TabsContext.Provider>;
}

export function TabLink({ id, target, className = 'nav-link', children }) {
  const { current, select } = useContext(TabsContext);
  const isActive = current === target;
  return (
    <a
      className={`${className}${isActive ? ' active' : ''}`}
      id={id}
      href={`#${target}`}
      role="tab"
      aria-controls={target}
      aria-selected={isActive}
      onClick={(e) => {
        e.preventDefault();
        select(target);
      }}
    >
      {children}
    </a>
  );
}

export function TabPane({ id, className = 'tab-pane fade', children }) {
  const { active, shown } = useContext(TabsContext);
  return (
    <div
      className={`${className}${shown === id ? ' show' : ''}${active === id ? ' active' : ''}`}
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
    >
      {children}
    </div>
  );
}
