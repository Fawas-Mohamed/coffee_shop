import { Link } from 'react-router-dom';
import { bg } from '../../utils';
import { Tabs, TabLink, TabPane } from '../../components/Tabs';

const coffees = [
  { image: "menu-1.jpg" },
  { image: "menu-2.jpg" },
  { image: "menu-3.jpg" },
  { image: "menu-4.jpg" },
];

const mainDishes = [
  { image: "dish-1.jpg" },
  { image: "dish-2.jpg" },
  { image: "dish-3.jpg" },
  { image: "dish-4.jpg" },
  { image: "dish-5.jpg" },
  { image: "dish-6.jpg" },
];

const drinks = [
  { image: "drink-1.jpg", title: "Lemonade Juice" },
  { image: "drink-2.jpg", title: "Pineapple Juice" },
  { image: "drink-3.jpg", title: "Soda Drinks" },
  { image: "drink-4.jpg", title: "Lemonade Juice" },
  { image: "drink-5.jpg", title: "Pineapple Juice" },
  { image: "drink-6.jpg", title: "Soda Drinks" },
];

const desserts = [
  { image: "dessert-1.jpg" },
  { image: "dessert-2.jpg" },
  { image: "dessert-3.jpg" },
  { image: "dessert-4.jpg" },
  { image: "dessert-5.jpg" },
  { image: "dessert-6.jpg" },
];

export default function ShopSection() {
  return (
    <section className="ftco-menu mb-5 pb-5">
      <Tabs initial="v-pills-0">
        <div className="container">
          <div className="row d-md-flex">
            <div className="col-lg-12 ftco-animate p-md-5">
              <div className="row">
                <div className="col-md-12 nav-link-wrap mb-5">
                  <div className="nav ftco-animate nav-pills justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <TabLink className="nav-link" id="v-pills-0-tab" target="v-pills-0">Coffee</TabLink>
                    <TabLink className="nav-link" id="v-pills-1-tab" target="v-pills-1">Coffee</TabLink>
                    <TabLink className="nav-link" id="v-pills-2-tab" target="v-pills-2">Drinks</TabLink>
                    <TabLink className="nav-link" id="v-pills-3-tab" target="v-pills-3">Desserts</TabLink>
                  </div>
                </div>
                <div className="col-md-12 d-flex align-items-center">
                  <div className="tab-content ftco-animate" id="v-pills-tabContent">
                    <TabPane className="tab-pane fade" id="v-pills-0">
                      <div className="row">
                        {coffees.map((item, i) => (
                          <div key={i} className="col-md-3">
                            <div className="menu-entry">
                              <a href="#" className="img" style={{ backgroundImage: bg(item.image) }}></a>
                              <div className="text text-center pt-4">
                                <h3>
                                  <Link to="/product-single">Coffee Capuccino</Link>
                                </h3>
                                <p>A small river named Duden flows by their place and supplies</p>
                                <p className="price">
                                  <span>$5.90</span>
                                </p>
                                <p>
                                  <Link to="/cart" className="btn btn-primary btn-outline-primary">Add to Cart</Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPane>
                    <TabPane className="tab-pane fade" id="v-pills-1">
                      <div className="row">
                        {mainDishes.map((item, i) => (
                          <div key={i} className="col-md-4 text-center">
                            <div className="menu-wrap">
                              <a href="#" className="menu-img img mb-4" style={{ backgroundImage: bg(item.image) }}></a>
                              <div className="text">
                                <h3>
                                  <Link to="/product-single">Coffee Capuccino</Link>
                                </h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p className="price">
                                  <span>$2.90</span>
                                </p>
                                <p>
                                  <Link to="/cart" className="btn btn-primary btn-outline-primary">Add to cart</Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPane>
                    <TabPane className="tab-pane fade" id="v-pills-2">
                      <div className="row">
                        {drinks.map((item, i) => (
                          <div key={i} className="col-md-4 text-center">
                            <div className="menu-wrap">
                              <a href="#" className="menu-img img mb-4" style={{ backgroundImage: bg(item.image) }}></a>
                              <div className="text">
                                <h3>
                                  <Link to="/product-single">{item.title}</Link>
                                </h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p className="price">
                                  <span>$2.90</span>
                                </p>
                                <p>
                                  <Link to="/cart" className="btn btn-primary btn-outline-primary">Add to cart</Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPane>
                    <TabPane className="tab-pane fade" id="v-pills-3">
                      <div className="row">
                        {desserts.map((item, i) => (
                          <div key={i} className="col-md-4 text-center">
                            <div className="menu-wrap">
                              <a href="#" className="menu-img img mb-4" style={{ backgroundImage: bg(item.image) }}></a>
                              <div className="text">
                                <h3>
                                  <Link to="/product-single">Hot Cake Honey</Link>
                                </h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p className="price">
                                  <span>$2.90</span>
                                </p>
                                <p>
                                  <Link to="/cart" className="btn btn-primary btn-outline-primary">Add to cart</Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPane>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </section>
  );
}
