import { FiltersSideBar } from "@/components/FiltersSideBar";
import { ProductCard } from "@/components/ProductCard";
import Head from "next/head";

const SearchInput = () => {
  return (
    <div className="flex items-center justify-between border-2 border-gray-200 hover:border-blue-400 rounded-md px-2">
      <input
        type="text"
        placeholder="Search ..."
        className="text-lg py-1 outline-none w-full"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="text-gray-900 w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
};

export const OrderByIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
      />
    </svg>
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
