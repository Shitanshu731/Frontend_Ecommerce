import { Link } from "react-router-dom";
import ProductCard from "../components/Product-card";
import { useLatestProductQuery } from "../redux/api/productApi";
import toast from "react-hot-toast";
import Loader from "../components/Loader";


const Home = () => {

  const { data,isLoading,isError } = useLatestProductQuery("");
  const addToCartHandler = () => {};

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