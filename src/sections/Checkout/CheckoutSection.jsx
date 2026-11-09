import { bg, preventSubmit } from '../../utils';

const nameFields = [
  { for: "firstname", text: "Firt Name" },
  { for: "lastname", text: "Last Name" },
];

const addressFields = [
  { for: "towncity", text: "Town / City" },
  { for: "postcodezip", text: "Postcode / ZIP *" },
];

const contactFields = [
  { for: "phone", text: "Phone" },
  { for: "emailaddress", text: "Email Address" },
];

const paymentMethods = [
  { text: "Direct Bank Tranfer" },
  { text: "Check Payment" },
  { text: "Paypal" },
];

const recentPosts = [
  { image: "menu-1.jpg" },
  { image: "menu-2.jpg" },
  { image: "menu-3.jpg" },
];

export default function CheckoutSection() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 ftco-animate">
            <form className="billing-form ftco-bg-dark p-3 p-md-5" onSubmit={preventSubmit}>
              <h3 className="mb-4 billing-heading">Billing Details</h3>
              <div className="row align-items-end">
                {nameFields.map((item, i) => (
                  <div key={i} className="col-md-6">
                    <div className="form-group">
                      <label htmlFor={item.for}>{item.text}</label>
                      {' '}
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                  </div>
                ))}
                <div className="w-100"></div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="country">State / Country</label>
                    <div className="select-wrap">
                      <div className="icon">
                        <span className="ion-ios-arrow-down"></span>
                      </div>
                      <select className="form-control">
                        <option value="">France</option>
                        <option value="">Italy</option>
                        <option value="">Philippines</option>
                        <option value="">South Korea</option>
                        <option value="">Hongkong</option>
                        <option value="">Japan</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="streetaddress">Street Address</label>
                    {' '}
                    <input type="text" className="form-control" placeholder="House number and street name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Appartment, suite, unit etc: (optional)" />
                  </div>
                </div>
                <div className="w-100"></div>
                {addressFields.map((item, i) => (
                  <div key={i} className="col-md-6">
                    <div className="form-group">
                      <label htmlFor={item.for}>{item.text}</label>
                      {' '}
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                  </div>
                ))}
                <div className="w-100"></div>
                {contactFields.map((item, i) => (
                  <div key={i} className="col-md-6">
                    <div className="form-group">
                      <label htmlFor={item.for}>{item.text}</label>
                      {' '}
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                  </div>
                ))}
                <div className="w-100"></div>
                <div className="col-md-12">
                  <div className="form-group mt-4">
                    <div className="radio">
                      <label className="mr-3">
                        <input type="radio" name="optradio" />
                        {' '}
                        Create an Account?
                      </label>
                      {' '}
                      <label>
                        <input type="radio" name="optradio" />
                        {' '}
                        Ship to different address
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="row mt-5 pt-3 d-flex">
              <div className="col-md-6 d-flex">
                <div className="cart-detail cart-total ftco-bg-dark p-3 p-md-4">
                  <h3 className="billing-heading mb-4">Cart Total</h3>
                  <p className="d-flex">
                    <span>Subtotal</span>
                    {' '}
                    <span>$20.60</span>
                  </p>
                  <p className="d-flex">
                    <span>Delivery</span>
                    {' '}
                    <span>$0.00</span>
                  </p>
                  <p className="d-flex">
                    <span>Discount</span>
                    {' '}
                    <span>$3.00</span>
                  </p>
                  <hr />
                  <p className="d-flex total-price">
                    <span>Total</span>
                    {' '}
                    <span>$17.60</span>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="cart-detail ftco-bg-dark p-3 p-md-4">
                  <h3 className="billing-heading mb-4">Payment Method</h3>
                  {paymentMethods.map((item, i) => (
                    <div key={i} className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input type="radio" name="optradio" className="mr-2" />
                            {' '}
                            {item.text}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="form-group">
                    <div className="col-md-12">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" value="" className="mr-2" />
                          {' '}
                          I have read and accept the terms and conditions
                        </label>
                      </div>
                    </div>
                  </div>
                  <p>
                    <a href="#" className="btn btn-primary py-3 px-4">Place an order</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 sidebar ftco-animate">
            <div className="sidebar-box">
              <form className="search-form" onSubmit={preventSubmit}>
                <div className="form-group">
                  <div className="icon">
                    <span className="icon-search"></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Search..." />
                </div>
              </form>
            </div>
            <div className="sidebar-box ftco-animate">
              <div className="categories">
                <h3>Categories</h3>
                <li>
                  <a href="#">
                    Tour
                    {' '}
                    <span>(12)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Hotel
                    {' '}
                    <span>(22)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Coffee
                    {' '}
                    <span>(37)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Drinks
                    {' '}
                    <span>(42)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Foods
                    {' '}
                    <span>(14)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Travel
                    {' '}
                    <span>(140)</span>
                  </a>
                </li>
              </div>
            </div>
            <div className="sidebar-box ftco-animate">
              <h3>Recent Blog</h3>
              {recentPosts.map((item, i) => (
                <div key={i} className="block-21 mb-4 d-flex">
                  <a className="blog-img mr-4" style={{ backgroundImage: bg(item.image) }}></a>
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">Even the all-powerful Pointing has no control about the blind texts</a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar"></span>
                          {' '}
                          July 12, 2018
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person"></span>
                          {' '}
                          Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat"></span>
                          {' '}
                          19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sidebar-box ftco-animate">
              <h3>Tag Cloud</h3>
              <div className="tagcloud">
                <a href="#" className="tag-cloud-link">dish</a>
                {' '}
                <a href="#" className="tag-cloud-link">menu</a>
                {' '}
                <a href="#" className="tag-cloud-link">food</a>
                {' '}
                <a href="#" className="tag-cloud-link">sweet</a>
                {' '}
                <a href="#" className="tag-cloud-link">tasty</a>
                {' '}
                <a href="#" className="tag-cloud-link">delicious</a>
                {' '}
                <a href="#" className="tag-cloud-link">desserts</a>
                {' '}
                <a href="#" className="tag-cloud-link">drinks</a>
              </div>
            </div>
            <div className="sidebar-box ftco-animate">
              <h3>Paragraph</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
