import { VscError } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react" 
import CartItemCard from "../components/cart-item";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cartReducer, removeCartItem } from "../redux/reducer/cartReducer";
import { cartReducerInitalState } from "../types/reducer-types";
import { CartItem } from "../types/types";
import toast from "react-hot-toast";

const Cart = () => {
  const {cartItems,subtotal,tax,total,shippingCharges,discount} = useSelector((state : {cartReducer : cartReducerInitalState}) => state.cartReducer)
  const[couponCode,setCouponCode] = useState<string>("");
  const [isValidCouponCode,setIsValidCouponCode] = useState<boolean>(false)

  const dispatch = useDispatch()
  const incrementHandler = (cartItem: CartItem) => {
    if(cartItem.quantity >= cartItem.stock) return;
    dispatch(addToCart({...cartItem, quantity : cartItem.quantity +1}));
  };
  const decrementHandler = (cartItem: CartItem) => {
    dispatch(addToCart({...cartItem, quantity : cartItem.quantity -1}));
  };
  const removeHandler = (productId:string) => {
    dispatch(removeCartItem(productId));
  };

  useEffect(() => {
    const timeOutID = setTimeout(() => {
    }, 1000);
  return () => {
    clearTimeout(timeOutID);
    setIsValidCouponCode(false);
  };
}, [couponCode]);
 return (
    <div className="cart">
       <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => (
            <CartItemCard incrementHandler={incrementHandler} decrementHandler={decrementHandler} removeHandler={removeHandler}
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