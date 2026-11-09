import { Link } from 'react-router-dom';
import { bg } from '../../utils';

const cartItems = [
  { image: "menu-2.jpg", title: "Creamy Latte Coffee", price: "$4.90", total: "$4.90" },
  { image: "dish-2.jpg", title: "Grilled Ribs Beef", price: "$15.70", total: "$15.70" },
];

export default function CartSection() {
  return (
    <section className="ftco-section ftco-cart">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ftco-animate">
            <div className="cart-list">
              <table className="table">
                <thead className="thead-primary">
                  <tr className="text-center">
                    <th></th>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, i) => (
                    <tr key={i} className="text-center">
                      <td className="product-remove">
                        <a href="#">
                          <span className="icon-close"></span>
                        </a>
                      </td>
                      <td className="image-prod">
                        <div className="img" style={{ backgroundImage: bg(item.image) }}></div>
                      </td>
                      <td className="product-name">
                        <h3>{item.title}</h3>
                        <p>Far far away, behind the word mountains, far from the countries</p>
                      </td>
                      <td className="price">{item.price}</td>
                      <td className="quantity">
                        <div className="input-group mb-3">
                          <input type="text" name="quantity" className="quantity form-control input-number" defaultValue="1" min="1" max="100" />
                        </div>
                      </td>
                      <td className="total">{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col col-lg-3 col-md-6 mt-5 cart-wrap ftco-animate">
            <div className="cart-total mb-3">
              <h3>Cart Totals</h3>
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
            <p className="text-center">
              <Link to="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
