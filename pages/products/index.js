import { useGetProducts } from "@/api/product";
import { FiltersSideBar } from "./FiltersSideBar";
import { ProductCard } from "@/components/ProductCard";
import { OrderByIcon, SearchIcon } from "@/components/shared/Icons";
import Head from "next/head";
import { useState } from "react";

const SearchInput = ({ onChange }) => {
  const [q, setQ] = useState();
  const [cron, setCron] = useState();
  const handleOnChange = (e) => {
    clearTimeout(cron);
    setQ(e.target.value);
    setCron(
      setTimeout(() => {
        onChange(e);
      }, 1600)
    );
  };
  return (
    <div className="flex items-center text-gray-900 justify-between border-2 border-gray-200 hover:border-blue-400 rounded-md px-2">
      <input
        value={q}
        onChange={(e) => handleOnChange(e)}
        type="text"
        placeholder="Search ..."
        className="text-lg py-1 outline-none w-full"
      />
      <SearchIcon />
    </div>
  );
};

const OrderBy = ({ text, onClick, active }) => {
  return (
    <div
      onClick={() => onClick()}
      className={`flex text-gray-900 items-center transition-shadow duration-200
      ${active && "bg-gray-100 shadow-md"}
      rounded-md hover:bg-gray-100 font-bold select-none cursor-pointer px-2`}
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
    stars: 0,
    categories: [],
    from: 0.0,
    to: 0.0,
  });
  const [orderby, setOrderby] = useState();
  const [cron, setCron] = useState();
  const handleOnChange = (v) => {
    if (v == orderby) setOrderby("");
    else setOrderby(v);
    clearTimeout(cron);
    setCron(
      setTimeout(() => {
        setFilter({ ...filter, orderBy: filter.orderBy == v ? "" : v });
      }, 1000)
    );
  };
  const { products } = useGetProducts({ params: filter });
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <main className="w-full">
        <FiltersSideBar setFilter={setFilter} />
        <div className="flex-1 pl-6 pt-6 h-full">
          <div className="flex max-sm:block itmes-center justify-between px-4 pb-4 md:mr-10">
            <div className="flex max-sm:py-4 items-start max-w-[330px]">
              <OrderBy
                active={orderby == "act_price"}
                onClick={() => handleOnChange("act_price")}
                text="Price"
              />
              <OrderBy
                active={orderby == "reviews"}
                onClick={() => handleOnChange("reviews")}
                text="Rating"
              />
              <OrderBy
                active={orderby == "orders"}
                onClick={() => handleOnChange("orders")}
                text="Orders"
              />
            </div>
            <SearchInput
              onChange={(e) => setFilter({ ...filter, q: e.target.value })}
            />
          </div>
          <div className="hover:overflow-y-auto border-t overflow-hidden h-[90vh] p-4 max-sm:-mb-[71px]">
            <div className="flex items-start justify-start flex-wrap gap-4 pb-32 relative">
              {products?.map((product) => {
                return (
                  <ProductCard
                    id={product.id}
                    title={product.title}
                    rating={product.reviews}
                    price={product.price}
                    image={product.image}
                    orders={product.orders}
                    discount={product.discount_value}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
