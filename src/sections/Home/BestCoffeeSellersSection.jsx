import { bg } from '../../utils';

const bestSellers = [
  { image: "menu-1.jpg" },
  { image: "menu-2.jpg" },
  { image: "menu-3.jpg" },
  { image: "menu-4.jpg" },
];

export default function BestCoffeeSellersSection() {
  return (
    <section className="ftco-section best-sellers-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftco-animate text-center">
            <span className="subheading">Discover</span>
            <h2 className="mb-4">Best Coffee Sellers</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className="row">
          {bestSellers.map((item, i) => (
            <div key={i} className="col-md-3">
              <div className="menu-entry">
                <a href="#" className="img" style={{ backgroundImage: bg(item.image) }}></a>
                <div className="text text-center pt-4">
                  <h3>
                    <a href="#">Coffee Capuccino</a>
                  </h3>
                  <p>A small river named Duden flows by their place and supplies</p>
                  <p className="price">
                    <span>$5.90</span>
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary btn-outline-primary">Add to Cart</a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
