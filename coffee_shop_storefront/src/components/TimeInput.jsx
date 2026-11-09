import { useEffect, useRef } from 'react';

/** Text input with the jquery.timepicker plugin attached. */
export default function TimeInput(props) {
  const ref = useRef(null);
  useEffect(() => {
    const $input = window.jQuery(ref.current);
    $input.timepicker();
    return () => $input.timepicker('remove');
  }, []);
  return <input ref={ref} {...props} />;
}
