import { useState } from "react";
import ProductCard from "../components/Product-card";
import { useCategoriesProductsQuery, useSearchProductsQuery } from "../redux/api/productApi";
import { CustomError } from "../types/api-types";
import toast from "react-hot-toast";
import { CartItem } from "../types/types";
import { addToCart } from "../redux/reducer/cartReducer";
import { useDispatch } from "react-redux";
const Search = () => {
  const dispatch = useDispatch();
  const {data : categoriesResponse,isLoading: loadingCategories,isError,error} = useCategoriesProductsQuery("");
 
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [productLoading, setproductLoading] = useState(false);
  const {data : searchedData,isLoading} = useSearchProductsQuery({price: maxPrice,search,page,category,sort})
  const addToCartHandler = (cartItem: CartItem) => {
    if(cartItem.stock < 1) return toast.error("Product Out of stock")
    dispatch(addToCart(cartItem));
    toast.success("Item added to cart")
  };
  if(isError) toast.error((error as CustomError).data.message)

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">ALL</option>
            {
              !loadingCategories && categoriesResponse?.category.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))
            }

          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {productLoading ? (
          "<Skeleton length={10} />"
        ) : (
          <div className="search-product-list">
            {
              searchedData?.products.map((i) => (
                <ProductCard
                  key={i._id}
                  productId={i._id}
                  name={i.name}
                  price={i.price}
                  stock={i.stock}
                  handler={addToCartHandler}
                  photo={i.photo}
              />

              ))
            }
          </div>
        )}

      </main>
    </div>
  );
};

export default Search;