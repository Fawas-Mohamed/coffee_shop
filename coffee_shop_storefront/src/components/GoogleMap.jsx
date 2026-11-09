import { useEffect, useRef } from 'react';
import { img } from '../utils';
import mapStyles from '../data/mapStyles';

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const CENTER = { lat: 40.69847032728747, lng: -73.9514422416687 };

let loading = null;
function loadGoogleMaps() {
  if (window.google && window.google.maps) return Promise.resolve(window.google.maps);
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      window.__initCoffeeMap = () => resolve(window.google.maps);
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&loading=async&callback=__initCoffeeMap`;
      script.async = true;
      script.onerror = () => { loading = null; reject(new Error('Google Maps failed to load')); };
      document.head.appendChild(script);
    });
  }
  return loading;
}

/** Dark-themed Google Map (options carried over from the original google-map.js). */
export default function GoogleMap() {
  const ref = useRef(null);

  useEffect(() => {
    let cancelled = false;
    loadGoogleMaps()
      .then((maps) => {
        if (cancelled || !ref.current) return;
        const map = new maps.Map(ref.current, { zoom: 7, center: CENTER, scrollwheel: false, styles: mapStyles });
        new maps.Marker({ position: CENTER, map, icon: img('loc.png') });
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  return <div id="map" ref={ref}></div>;
}
