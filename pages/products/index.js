import { getProduct, useGetProducts } from "@/api/api";
import { FiltersSideBar } from "./FiltersSideBar";
import { ProductCard } from "@/components/ProductCard";
import { OrderByIcon, SearchIcon } from "@/components/shared/Icons";
import Head from "next/head";
import { useEffect, useState } from "react";

const SearchInput = ({ onChange }) => {
  return (
    <div className="flex items-center text-gray-900 justify-between border-2 border-gray-200 hover:border-blue-400 rounded-md px-2">
      <input
        onChange={(e) => onChange(e)}
        type="text"
        placeholder="Search ..."
        className="text-lg py-1 outline-none w-full"
      />
      <SearchIcon />
    </div>
  );
};

const OrderBy = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex text-gray-900 items-center rounded-md hover:bg-gray-100 font-bold select-none cursor-pointer px-2"
    >
      <p className="px-2 py-2">{text}</p>
      <OrderByIcon />
    </div>
  );
};

export default function Products() {
  const [filter, setFilter] = useState({
    q: "",
    orderBy: "",
    categories: [],
    from: "",
    to: "",
  });
  const { products } = useGetProducts({ params: filter });
  console.log(filter);
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <main className="w-full">
        <FiltersSideBar filter={filter} setFilter={setFilter} />
        <div className="flex-1 pl-6 pt-6 h-full">
          <div className="flex max-sm:block itmes-center justify-between px-4 pb-4 md:mr-10">
            <div className="flex max-sm:py-4 items-center">
              <OrderBy
                onClick={() => setFilter({ ...filter, orderBy: "price" })}
                text="Price"
              />
              <OrderBy
                onClick={() => setFilter({ ...filter, orderBy: "rating" })}
                text="Rating"
              />
              <OrderBy
                onClick={() => setFilter({ ...filter, orderBy: "orders" })}
                text="Orders"
              />
            </div>
            <SearchInput
              onChange={(e) => setFilter({ ...filter, q: e.target.value })}
            />
          </div>
          <div className="overflow-y-scroll h-[90vh] p-4 max-sm:-mb-[71px]">
            <div className="flex items-center justify-start flex-wrap gap-4 pb-32 relative -z-30">
              {products.map((product) => {
                return (
                  <ProductCard
                    title={product.title}
                    rating={product.rating}
                    price={product.price}
                    image={product.image}
                    discount={product.discount}
                  />
                );
              })}
              <ProductCard
                title="product title"
                rating={3}
                price={98}
                image="https://via.placeholder.com/150"
                discount={10}
              />
              <ProductCard
                title="product title"
                rating={3}
                price={98}
                image="https://via.placeholder.com/150"
                discount={10}
              />
              <ProductCard
                title="product title"
                rating={3}
                price={98}
                image="https://via.placeholder.com/150"
                discount={10}
              />
              <ProductCard
                title="product title"
                rating={3}
                price={98}
                image="https://via.placeholder.com/150"
                discount={10}
              />
              <ProductCard
                title="product title"
                rating={3}
                price={98}
                image="https://via.placeholder.com/150"
                discount={10}
              />
              <ProductCard
                title="product title"
                rating={3}
                price={98}
                image="https://via.placeholder.com/150"
                discount={10}
              />
              <ProductCard
                title="product title"
                rating={3}
                price={98}
                image="https://via.placeholder.com/150"
                discount={10}
              />
              <ProductCard
                title="product title"
                rating={3}
                price={98}
                image="https://via.placeholder.com/150"
                discount={10}
              />
              <ProductCard
                title="product title"
                rating={3}
                price={98}
                image="https://via.placeholder.com/150"
                discount={10}
              />
              <ProductCard
                title="product title"
                rating={3}
                price={98}
                image="https://via.placeholder.com/150"
                discount={10}
              />
              <ProductCard
                title="product title"
                rating={3}
                price={98}
                image="https://via.placeholder.com/150"
                discount={10}
              />
              <ProductCard
                title="product title"
                rating={3}
                price={98}
                image="https://via.placeholder.com/150"
                discount={10}
              />
              <ProductCard
                title="product title"
                rating={3}
                price={98}
                image="https://via.placeholder.com/150"
                discount={10}
              />
              <ProductCard
                title="product title"
                rating={3}
                price={98}
                image="https://via.placeholder.com/150"
                discount={10}
              />
              <ProductCard
                title="product title"
                rating={3}
                price={98}
                image="https://via.placeholder.com/150"
                discount={10}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
