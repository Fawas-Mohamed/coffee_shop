import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero title="Page Not Found" image="bg_3.jpg" crumbs={[{ label: 'Home', to: '/' }, { label: '404' }]} />
      <section className="ftco-section">
        <div className="container text-center">
          <p className="mb-4">The page you are looking for does not exist.</p>
          <p>
            <Link to="/" className="btn btn-primary py-3 px-4">Back to Home</Link>
          </p>
        </div>
      </section>
    </>
  );
}
