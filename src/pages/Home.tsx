import { Link } from "react-router-dom";
import ProductCard from "../components/Product-card";


const Home = () => {


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
            <ProductCard
              key="asdads"
              productId={124335}
              name="Asus 11"
              price={130000}
              stock={12}
              handler={addToCartHandler}
              photo="https://s.yimg.com/os/creatr-uploaded-images/2020-12/d37e0460-3eeb-11eb-b7f9-449e864b9135"
            />
            <ProductCard
              key="asdads"
              productId={124335}
              name="Iphone 15 pro"
              price={120000}
              stock={12}
              handler={addToCartHandler}
              photo="https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2022/12/iPhone-15-Ultra.jpg"
            />
            <ProductCard
              key="asdads"
              productId={124335}
              name="PS 5"
              price={72000}
              stock={12}
              handler={addToCartHandler}
              photo="https://s.yimg.com/os/creatr-uploaded-images/2020-11/7c9dc7a0-24f3-11eb-aed4-9f1ba3e2dec3"
            />
      </main>
    </div>
  );
};

export default Home;