import { bg } from '../utils';
import { CounterBlock, CountUp } from '../components/Counter';

const counters = [
  { number: "100", text: "Coffee Branches" },
  { number: "85", text: "Number of Awards" },
  { number: "10567", text: "Happy Customer" },
  { number: "900", text: "Staff" },
];

export default function CounterSection() {
  return (
    <CounterBlock className="ftco-counter ftco-bg-dark img" id="section-counter" style={{ backgroundImage: bg('bg_2.jpg') }} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              {counters.map((item, i) => (
                <div key={i} className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <div className="icon">
                        <span className="flaticon-coffee-cup"></span>
                      </div>
                      <CountUp to={Number(item.number)} />
                      <span>{item.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CounterBlock>
  );
}
