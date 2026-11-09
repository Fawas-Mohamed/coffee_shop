import { Link } from 'react-router-dom';

/** <Link> for in-app paths ("/menu"), plain <a> for everything else ("#", mailto:, https://...). */
export default function AppLink({ href, children, ...props }) {
  if (href && href.startsWith('/')) {
    return (
      <Link to={href} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
