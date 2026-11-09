import { useEffect, useState } from 'react';

/** Full-screen spinner shown until the app has mounted (same markup/CSS as the original #ftco-loader). */
export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="ftco-loader" className={`${show ? 'show ' : ''}fullscreen`}>
      <svg className="circular" width="48px" height="48px">
        <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
        <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00" />
      </svg>
    </div>
  );
}
