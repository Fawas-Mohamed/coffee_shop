import { useEffect, useRef } from 'react';

/** Link that opens its image in a Magnific Popup lightbox (same options as the original main.js). */
export default function ImagePopup({ children, ...props }) {
  const ref = useRef(null);
  useEffect(() => {
    const $ = window.jQuery;
    const $link = $(ref.current);
    $link.magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: true,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom',
      gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] },
      image: { verticalFit: true },
      zoom: { enabled: true, duration: 300 },
    });
    return () => {
      $link.off('click.magnificPopup');
      if ($.magnificPopup && $.magnificPopup.instance && $.magnificPopup.instance.isOpen) $.magnificPopup.close();
    };
  }, []);
  return (
    <a ref={ref} {...props}>
      {children}
    </a>
  );
}
