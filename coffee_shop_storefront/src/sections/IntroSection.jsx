import { preventSubmit } from '../utils';
import DateInput from '../components/DateInput';
import TimeInput from '../components/TimeInput';

const contactInfo = [
  { className: "icon-phone", title: " 0(123) 456 7890", text: "A small river named Duden flows by their place and supplies." },
  { className: "icon-my_location", title: "198 West 21th Street", text: "203 Fake St. Mountain View, San Francisco, California, USA" },
  { className: "icon-clock-o", title: "Open Monday-Friday", text: "8:00am - 9:00pm" },
];

export default function IntroSection() {
  return (
    <section className="ftco-intro">
      <div className="container-wrap">
        <div className="wrap d-md-flex align-items-xl-end">
          <div className="info">
            <div className="row no-gutters">
              {contactInfo.map((item, i) => (
                <div key={i} className="col-md-4 d-flex ftco-animate">
                  <div className="icon">
                    <span className={item.className}></span>
                  </div>
                  <div className="text">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="book p-4">
            <h3>Book a Table</h3>
            <form className="appointment-form" onSubmit={preventSubmit}>
              <div className="d-md-flex">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="form-group ml-md-4">
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
              </div>
              <div className="d-md-flex">
                <div className="form-group">
                  <div className="input-wrap">
                    <div className="icon">
                      <span className="ion-md-calendar"></span>
                    </div>
                    <DateInput type="text" className="form-control appointment_date" placeholder="Date" />
                  </div>
                </div>
                <div className="form-group ml-md-4">
                  <div className="input-wrap">
                    <div className="icon">
                      <span className="ion-ios-clock"></span>
                    </div>
                    <TimeInput type="text" className="form-control appointment_time" placeholder="Time" />
                  </div>
                </div>
                <div className="form-group ml-md-4">
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
              </div>
              <div className="d-md-flex">
                <div className="form-group">
                  <textarea cols="30" rows="2" className="form-control" placeholder="Message" />
                </div>
                <div className="form-group ml-md-4">
                  <input type="submit" value="Appointment" className="btn btn-white py-3 px-4" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
