import { Link } from 'react-router-dom';
import { bg } from '../../utils';

const galleryImages = [
  { image: "gallery-1.jpg" },
  { image: "gallery-2.jpg" },
  { image: "gallery-3.jpg" },
  { image: "gallery-4.jpg" },
];

export default function GallerySection() {
  return (
    <section className="ftco-gallery">
      <div className="container-wrap">
        <div className="row no-gutters">
          {galleryImages.map((item, i) => (
            <div key={i} className="col-md-3 ftco-animate">
              <Link to="/gallery" className="gallery img d-flex align-items-center" style={{ backgroundImage: bg(item.image) }}>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search"></span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
