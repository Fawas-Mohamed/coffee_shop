import { useEffect, useRef } from 'react';

/** Text input with the bootstrap-datepicker plugin attached (same options as the original main.js). */
export default function DateInput(props) {
  const ref = useRef(null);
  useEffect(() => {
    const $input = window.jQuery(ref.current);
    $input.datepicker({ format: 'm/d/yyyy', autoclose: true });
    return () => $input.datepicker('remove');
  }, []);
  return <input ref={ref} {...props} />;
}
