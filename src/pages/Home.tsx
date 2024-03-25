import { Link } from "react-router-dom";
import ProductCard from "../components/Product-card";
import { useLatestProductQuery } from "../redux/api/productApi";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import { CartItem } from "../types/types";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/cartReducer";


const Home = () => {
  const dispatch = useDispatch()
  const { data,isLoading,isError } = useLatestProductQuery("");
  const addToCartHandler = (cartItem: CartItem) => {
    if(cartItem.stock < 1) return toast.error("Product Out of stock")
    dispatch(addToCart(cartItem));
    toast.success("Item added to cart")
  };

  if(isError) toast.error("Cannot Fetch the Products")
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        {isLoading ? <Loader/> : data?.product.map((i) => (
            <ProductCard
              key={i._id}
              productId={i._id}
              name={i.name}
              price={i.price}
              stock={i.stock}
              handler={addToCartHandler}
              photo={i.photo}
            />
            ))}
           
      </main>
    </div>
  );
};

export default Home;