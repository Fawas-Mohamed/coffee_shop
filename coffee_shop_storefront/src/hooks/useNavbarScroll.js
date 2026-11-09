import { useEffect, useState } from 'react';

/**
 * Same thresholds as the original main.js scroll handler:
 *  >150px  -> "scrolled"      <150px -> remove "scrolled" + "sleep"
 *  >350px  -> "awake"         <350px -> remove "awake", add "sleep"
 */
export default function useNavbarScroll() {
  const [state, setState] = useState({ scrolled: false, awake: false, sleep: false });

  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY;
      setState((prev) => {
        let { scrolled, awake, sleep } = prev;
        if (st > 150 && !scrolled) scrolled = true;
        if (st < 150 && scrolled) { scrolled = false; sleep = false; }
        if (st > 350 && !awake) awake = true;
        if (st < 350 && awake) { awake = false; sleep = true; }
        return scrolled === prev.scrolled && awake === prev.awake && sleep === prev.sleep ? prev : { scrolled, awake, sleep };
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
}
