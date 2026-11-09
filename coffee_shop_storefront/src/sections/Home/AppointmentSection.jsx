import { preventSubmit } from '../../utils';
import DateInput from '../../components/DateInput';
import TimeInput from '../../components/TimeInput';
import GoogleMap from '../../components/GoogleMap';

export default function AppointmentSection() {
  return (
    <section className="ftco-appointment">
      <div className="overlay"></div>
      <div className="container-wrap">
        <div className="row no-gutters d-md-flex align-items-center">
          <div className="col-md-6 d-flex align-self-stretch">
            <GoogleMap />
          </div>
          <div className="col-md-6 appointment ftco-animate">
            <h3 className="mb-3">Book a Table</h3>
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
                  <input type="submit" value="Appointment" className="btn btn-primary py-3 px-4" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
