import { img, bg } from '../../utils';

const testimonials = [
  { className: "col-lg align-self-sm-end ftco-animate", className2: "testimony", text: "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”", image: "person_1.jpg" },
  { className: "col-lg align-self-sm-end", className2: "testimony overlay", text: "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”", image: "person_2.jpg" },
  { className: "col-lg align-self-sm-end ftco-animate", className2: "testimony", text: "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name. ”", image: "person_3.jpg" },
  { className: "col-lg align-self-sm-end", className2: "testimony overlay", text: "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however.”", image: "person_2.jpg" },
  { className: "col-lg align-self-sm-end ftco-animate", className2: "testimony", text: "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name. ”", image: "person_3.jpg" },
];

export default function TestimonySection() {
  return (
    <section className="ftco-section img" id="ftco-testimony" style={{ backgroundImage: bg('bg_1.jpg') }} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Testimony</span>
            <h2 className="mb-4">Customers Says</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
      </div>
      <div className="container-wrap">
        <div className="row d-flex no-gutters">
          {testimonials.map((item, i) => (
            <div key={i} className={item.className}>
              <div className={item.className2}>
                <blockquote>
                  <p>{item.text}</p>
                </blockquote>
                <div className="author d-flex mt-4">
                  <div className="image mr-3 align-self-center">
                    <img src={img(item.image)} alt="" />
                  </div>
                  <div className="name align-self-center">
                    Louise Kelly
                    {' '}
                    <span className="position">Illustrator Designer</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
