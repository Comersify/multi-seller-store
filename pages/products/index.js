import { FiltersSideBar } from "./FiltersSideBar";
import { ProductCard } from "@/components/ProductCard";
import { OrderByIcon, SearchIcon } from "@/components/shared/Icons";
import Head from "next/head";

const SearchInput = () => {
  return (
    <div className="flex items-center justify-between border-2 border-gray-200 hover:border-blue-400 rounded-md px-2">
      <input
        type="text"
        placeholder="Search ..."
        className="text-lg py-1 outline-none w-full"
      />
      <SearchIcon />
    </div>
  );
};

const OrderBy = ({ text }) => {
  return (
    <div className="flex text-gray-900 items-center rounded-md hover:bg-gray-100 font-bold select-none cursor-pointer px-2">
      <p className="px-2 py-2">{text}</p>
      <OrderByIcon />
    </div>
  );
};

export default function Products() {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <main className="w-full">
        <FiltersSideBar />
        <div className="flex-1 pl-6 pt-6 h-full">
          <div className="flex max-sm:block itmes-center justify-between px-4 pb-4 md:mr-10">
            <div className="flex max-sm:py-4 items-center">
              <OrderBy text="Price" />
              <OrderBy text="Ratings" />
              <OrderBy text="Orders" />
            </div>
            <SearchInput />
          </div>
          <div className="overflow-y-scroll h-[90vh] p-4 max-sm:-mb-[71px]">
            <div className="flex items-center justify-start flex-wrap gap-4 pb-32 relative -z-30">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
