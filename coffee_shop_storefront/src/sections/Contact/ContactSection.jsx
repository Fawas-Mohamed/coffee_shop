import { preventSubmit } from '../../utils';

const contactLinks = [
  { text: "Phone:", href: "tel://1234567920", text2: "+ 1235 2355 98" },
  { text: "Email:", href: "mailto:info@yoursite.com", text2: "info@yoursite.com" },
  { text: "Website:", href: "#", text2: "yoursite.com" },
];

export default function ContactSection() {
  return (
    <section className="ftco-section contact-section">
      <div className="container mt-5">
        <div className="row block-9">
          <div className="col-md-4 contact-info ftco-animate">
            <div className="row">
              <div className="col-md-12 mb-4">
                <h2 className="h4">Contact Information</h2>
              </div>
              <div className="col-md-12 mb-3">
                <p>
                  <span>Address:</span>
                  {' '}
                  198 West 21th Street, Suite 721 New York NY 10016
                </p>
              </div>
              {contactLinks.map((item, i) => (
                <div key={i} className="col-md-12 mb-3">
                  <p>
                    <span>{item.text}</span>
                    {' '}
                    <a href={item.href}>{item.text2}</a>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 ftco-animate">
            <form className="contact-form" onSubmit={preventSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Email" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea cols="30" rows="7" className="form-control" placeholder="Message" />
              </div>
              <div className="form-group">
                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
