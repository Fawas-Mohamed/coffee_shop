import { bg } from '../../utils';

const pricingEntries = [
  { image: "menu-1.jpg", title: "Coffee Capuccino", price: "$20.00" },
  { image: "menu-2.jpg", title: "Coffee Capuccino", price: "$29.00" },
  { image: "menu-3.jpg", title: "Coffee Capuccino", price: "$20.00" },
  { image: "menu-4.jpg", title: "Coffee Capuccino", price: "$20.00" },
];

const pricingEntries2 = [
  { image: "menu-1.jpg", title: "Coffee Capuccino", price: "$49.91" },
  { image: "menu-2.jpg", title: "Coffee Capuccino", price: "$20.00" },
  { image: "menu-3.jpg", title: "Coffee Capuccino", price: "$20.00" },
  { image: "menu-4.jpg", title: "Coffee Capuccino", price: "$20.00" },
];

const pricingEntries3 = [
  { image: "dessert-1.jpg", title: "Dessert ", price: "$20.00" },
  { image: "dessert-2.jpg", title: "Dessert ", price: "$29.00" },
  { image: "dessert-3.jpg", title: "Dessert ", price: "$20.00" },
  { image: "dessert-4.jpg", title: "Dessert ", price: "$20.00" },
];

const pricingEntries4 = [
  { image: "drink-5.jpg", title: "Lemonade Juice", price: "$49.91" },
  { image: "drink-6.jpg", title: "Pineapple Juice", price: "$20.00" },
  { image: "drink-7.jpg", title: "Soda Drinks", price: "$20.00" },
  { image: "drink-8.jpg", title: "Lemonade Juice", price: "$20.00" },
];

export default function PricingSection() {
  return (
    <section className="ftco-section menu-pricing-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-5 pb-3">
            <h3 className="mb-5 heading-pricing ftco-animate">Starter</h3>
            {pricingEntries.map((item, i) => (
              <div key={i} className="pricing-entry d-flex ftco-animate">
                <div className="img" style={{ backgroundImage: bg(item.image) }}></div>
                <div className="desc pl-3">
                  <div className="d-flex text align-items-center">
                    <h3>
                      <span>{item.title}</span>
                    </h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <div className="d-block">
                    <p>A small river named Duden flows by their place and supplies</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6 mb-5 pb-3">
            <h3 className="mb-5 heading-pricing ftco-animate">Coffees</h3>
            {pricingEntries2.map((item, i) => (
              <div key={i} className="pricing-entry d-flex ftco-animate">
                <div className="img" style={{ backgroundImage: bg(item.image) }}></div>
                <div className="desc pl-3">
                  <div className="d-flex text align-items-center">
                    <h3>
                      <span>{item.title}</span>
                    </h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <div className="d-block">
                    <p>A small river named Duden flows by their place and supplies</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            <h3 className="mb-5 heading-pricing ftco-animate">Desserts</h3>
            {pricingEntries3.map((item, i) => (
              <div key={i} className="pricing-entry d-flex ftco-animate">
                <div className="img" style={{ backgroundImage: bg(item.image) }}></div>
                <div className="desc pl-3">
                  <div className="d-flex text align-items-center">
                    <h3>
                      <span>{item.title}</span>
                    </h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <div className="d-block">
                    <p>A small river named Duden flows by their place and supplies</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            <h3 className="mb-5 heading-pricing ftco-animate">Drinks</h3>
            {pricingEntries4.map((item, i) => (
              <div key={i} className="pricing-entry d-flex ftco-animate">
                <div className="img" style={{ backgroundImage: bg(item.image) }}></div>
                <div className="desc pl-3">
                  <div className="d-flex text align-items-center">
                    <h3>
                      <span>{item.title}</span>
                    </h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <div className="d-block">
                    <p>A small river named Duden flows by their place and supplies</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
