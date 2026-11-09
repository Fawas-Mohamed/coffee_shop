import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { bg } from '../utils';

/**
 * Banner at the top of every inner page. The original was a one-slide Owl carousel,
 * so it keeps Owl's markup (and therefore its CSS) but needs no JavaScript.
 */
export default function PageHero({ title, image, crumbs }) {
  return (
    <section className="home-slider owl-carousel owl-loaded">
      <div className="owl-stage-outer">
        <div className="owl-stage" style={{ width: '100%' }}>
          <div className="owl-item active" style={{ width: '100%' }}>
            <div className="slider-item" style={{ backgroundImage: bg(image) }} data-stellar-background-ratio="0.5">
              <div className="overlay"></div>
              <div className="container">
                <div className="row slider-text justify-content-center align-items-center">
                  <div className="col-md-7 col-sm-12 text-center ftco-animate">
                    <h1 className="mb-3 mt-5 bread">{title}</h1>
                    <p className="breadcrumbs">
                      {crumbs.map((c, i) => (
                        <Fragment key={c.label}>
                          {i > 0 && ' '}
                          {c.to ? (
                            <span className="mr-2"><Link to={c.to}>{c.label}</Link></span>
                          ) : (
                            <span>{c.label}</span>
                          )}
                        </Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
