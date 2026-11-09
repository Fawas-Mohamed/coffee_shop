import { bg } from '../utils';

const recentPosts = [{ image: 'menu-1.jpg' }, { image: 'menu-2.jpg' }];

const services = ['Cooked', 'Deliver', 'Quality Foods', 'Mixed'];

const contactLinks = [
  { icon: 'icon icon-phone', text: '+2 392 3929 210' },
  { icon: 'icon icon-envelope', text: 'info@yourdomain.com' },
];

export default function Footer() {
  return (
    <footer className="ftco-footer ftco-section modern-footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About Us</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                {['icon-twitter', 'icon-facebook', 'icon-instagram'].map((icon) => (
                  <li key={icon} className="ftco-animate">
                    <a href="#"><span className={icon}></span></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5 mb-md-5">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Recent Blog</h2>
              {recentPosts.map((post, i) => (
                <div key={i} className="block-21 mb-4 d-flex">
                  <a className="blog-img mr-4" style={{ backgroundImage: bg(post.image) }}></a>
                  <div className="text">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar"></span> Sept 15, 2018</a></div>
                      <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                      <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-5 mb-md-5">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                {services.map((s) => (
                  <li key={s}><a href="#" className="py-2 d-block">{s}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
                  </li>
                  {contactLinks.map((c) => (
                    <li key={c.text}>
                      <a href="#"><span className={c.icon}></span><span className="text">{c.text}</span></a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row modern-footer-bottom">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;{new Date().getFullYear()} All rights reserved 
              
            </p>
            <p>Developed by : Neirah Tech</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
