import { Link } from 'react-router-dom';
import { bg } from '../../utils';

const blogPosts = [
  { image: "image_1.jpg" },
  { image: "image_2.jpg" },
  { image: "image_3.jpg" },
  { image: "image_4.jpg" },
  { image: "image_5.jpg" },
  { image: "image_6.jpg" },
];

export default function BlogListSection() {
  return (
    <section className="ftco-section blog-list-section">
      <div className="container">
        <div className="row d-flex">
          {blogPosts.map((item, i) => (
            <div key={i} className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <Link to="/blog-single" className="block-20" style={{ backgroundImage: bg(item.image) }}></Link>
                <div className="text py-4 d-block">
                  <div className="meta">
                    <div>
                      <a href="#">Sept 28, 2018</a>
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
                    <a href="#">Coffee Testing Day</a>
                  </h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <div className="block-27">
              <ul>
                <li>
                  <a href="#">&lt;</a>
                </li>
                <li className="active">
                  <span>1</span>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">&gt;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
