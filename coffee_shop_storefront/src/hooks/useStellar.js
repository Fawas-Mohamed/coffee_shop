import { useEffect } from 'react';

/** Parallax backgrounds (elements with data-stellar-background-ratio). Re-initialised per route. */
export default function useStellar(routeKey) {
  useEffect(() => {
    const $ = window.jQuery;
    if (!$ || !$.fn.stellar) return undefined;

    $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll',
      horizontalOffset: 0,
      verticalOffset: 0,
    });

    return () => {
      const plugin = $(window).data('plugin_stellar');
      if (plugin) plugin.destroy();
      $(window).removeData('plugin_stellar');
    };
  }, [routeKey]);
}
