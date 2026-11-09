import { img } from '../utils';

const mobileVideo = `${import.meta.env.BASE_URL}hero/Creating_iced_coffee_advertiseme%E2%80%A6_d7b90686_1080p.mp4`;
const desktopVideo = `${import.meta.env.BASE_URL}hero/Hand_preparing_iced_coffee_adver%E2%80%A6_ef1b8d2b_1080p.mp4`;

export default function HomeSlider() {
  return (
    <section className="home-slider owl-carousel owl-loaded">
      <div className="slider-item">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src={mobileVideo} media="(max-width: 767.98px)" type="video/mp4" />
          <source src={desktopVideo} media="(min-width: 768px)" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="container">
          <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
            <div className="col-md-8 col-sm-12 text-center ftco-animate">
              <span className="subheading">Welcome</span>
              <h1 className="mb-4">The Best Coffee Tasting Experience</h1>
              <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="#" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
