import { Link } from 'react-router-dom';
import { bg } from '../../utils';

const blogPosts = [
  { image: "menu-4.jpg" },
  { image: "menu-2.jpg" },
  { image: "menu-3.jpg" },
];

export default function RecentBlogSection() {
  return (
    <section className="ftco-section recent-blog-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftco-animate text-center">
            <h2 className="mb-4">Recent from blog</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className="row d-flex">
          {blogPosts.map((item, i) => (
            <div key={i} className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <Link to="/blog-single" className="block-20" style={{ backgroundImage: bg(item.image) }}></Link>
                <div className="text py-4 d-block">
                  <div className="meta">
                    <div>
                      <a href="#">Sept 10, 2018</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span>
                        {' '}
                        3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading mt-2">
                    <a href="#">Coffee Capuccino</a>
                  </h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
