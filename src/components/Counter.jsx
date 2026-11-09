import { createContext, useContext, useEffect, useRef, useState } from 'react';

const CounterContext = createContext(false);

/** The counters section. Starts the count-up once it scrolls into view (95% offset, like the original waypoint). */
export function CounterBlock({ children, ...props }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -5% 0px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <CounterContext.Provider value={started}>
      <section ref={ref} {...props}>
        {children}
      </section>
    </CounterContext.Provider>
  );
}

/** Counts 0 -> `to` over 7 seconds with jQuery's "swing" easing and thousands separators (jquery.animateNumber behaviour). */
export function CountUp({ to, duration = 7000 }) {
  const started = useContext(CounterContext);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return undefined;
    let frame;
    let start;
    const tick = (now) => {
      start ??= now;
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * (0.5 - Math.cos(progress * Math.PI) / 2)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, to, duration]);

  return (
    <strong className="number" data-number={to}>
      {value.toLocaleString('en-US')}
    </strong>
  );
}
