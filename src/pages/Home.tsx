import { Link } from "react-router-dom";
import ProductCard from "../components/Product-card";
import { useLatestProductQuery } from "../redux/api/productApi";


const Home = () => {

  const { data } = useLatestProductQuery("");
  const addToCartHandler = () => {};

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
        {data?.product.map((i) => (
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