import { VscError } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react" 
import CartItem from "../components/cart-item";

const Cart = () => {
  const[couponCode,setCouponCode] = useState<string>("");
  const [isValidCouponCode,setIsValidCouponCode] = useState<boolean>(false)

  useEffect(() => {
    const timeOutID = setTimeout(() => {
    }, 1000);
  return () => {
    clearTimeout(timeOutID);
    setIsValidCouponCode(false);
  };
}, [couponCode]);
const cartItems = [
  {
    name : "Shitanhsu",
    photo : "https://tse4.mm.bing.net/th?id=OIP.Xw_SPhyd8RmIlcil4VrS0AHaEK&pid=Api&P=0&h=180",
    price : 1234,
    stock : 12,
    quantity : 1,
    productId : 1

  }
]

 return (
    <div className="cart">
       <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => (
            <CartItem
              key={idx}
              cartItem={i}
            />
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹12333</p>
        <p>Shipping Charges: ₹12222</p>
        <p>Tax: ₹123</p>
        <p>
          Discount: <em className="red"> - ₹1234</em>
        </p>
        <p>
          <b>Total: ₹1234444</b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹1234 off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;