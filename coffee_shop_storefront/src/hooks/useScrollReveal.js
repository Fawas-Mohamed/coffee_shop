import { useEffect } from 'react';

/**
 * Fade-in-on-scroll for every ".ftco-animate" element (replaces jQuery Waypoints).
 * An element triggers once its top passes 95% of the viewport height; elements that
 * trigger together are staggered by 50ms, exactly like the original main.js.
 * Re-runs on every route change because the page content is swapped.
 */
export default function useScrollReveal(routeKey) {
  useEffect(() => {
    const targets = document.querySelectorAll('.ftco-animate');
    let timer = null;

    const flush = () => {
      timer = null;
      document.querySelectorAll('.ftco-animate.item-animate').forEach((el, k) => {
        setTimeout(() => {
          el.classList.add('fadeInUp', 'ftco-animated');
          el.classList.remove('item-animate');
        }, k * 50);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        let triggered = false;
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.target.classList.contains('ftco-animated')) return;
          observer.unobserve(entry.target);
          entry.target.classList.add('item-animate');
          triggered = true;
        });
        if (triggered && !timer) timer = setTimeout(flush, 100);
      },
      { rootMargin: '0px 0px -5% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [routeKey]);
}
