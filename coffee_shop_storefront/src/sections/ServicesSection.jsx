const services = [
  { className: "flaticon-choices", title: "Easy to Order" },
  { className: "flaticon-delivery-truck", title: "Fastest Delivery" },
  { className: "flaticon-coffee-bean", title: "Quality Coffee" },
];

export default function ServicesSection() {
  return (
    <section className="ftco-section ftco-services">
      <div className="container">
        <div className="row">
          {services.map((item, i) => (
            <div key={i} className="col-md-4 ftco-animate">
              <div className="media d-block text-center block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                  <span className={item.className}></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">{item.title}</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
