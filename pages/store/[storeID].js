import { ProductCard } from "@/components/ProductCard";
import { Star } from "@/components/Stars";
import { OrderIcon } from "@/components/shared/Icons";
import Link from "next/link";

export const Cover = () => {
  return (
    <div className="mb-4">
      <img
        src="https://picsum.photos/id/1018/1200/500"
        alt="Store cover"
        className="w-full rounded-lg"
      />
    </div>
  );
};

export const StoreHeader = () => {
  return (
    <div className="flex items-center mb-4">
      <img
        src="https://picsum.photos/id/1018/1200/500"
        alt="Store logo"
        className="w-16 h-16 rounded-full mr-4"
      />
      <h1 className="text-lg font-medium">Store Name</h1>
    </div>
  );
};

export const StoreActivities = () => {
  return (
    <div className="flex items-center mb-4">
      <div className="mr-4 flex items-center">
        <span className="text-lg flex items-center font-medium">
          4.5
          <Star active />
        </span>
        <p className="text-sm text-gray-500">124 ratings</p>
      </div>
      <div className="mr-4 flex items-center">
        <OrderIcon />
        <p className="text-sm ml-2 text-gray-500">6,789 orders</p>
      </div>
    </div>
  );
};

export const StoreDetails = () => {
  return (
    <>
      <p className="text-sm">Expected shipping time: 2-4 business days</p>
      <p className="text-sm mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eros non
        nunc rhoncus posuere. Nunc vel lorem tincidunt, aliquam magna a,
        pulvinar nisi. Aliquam at justo vitae est vestibulum eleifend. Donec
        commodo, ipsum eu scelerisque maximus, arcu mi volutpat tellus, at
        tristique orci lacus in mauris. Aenean tincidunt sapien et venenatis
        interdum. Nulla facilisi.
      </p>
    </>
  );
};

function Store() {
  return (
    <section className=" text-gray-900 w-full p-6 flex flex-col justify-center items-center">
      <div className="max-w-6xl">
        <div className="bg-white  w-full  h-full rounded-lg border border-gray-200 p-4">
          <Cover />
          <StoreHeader />
          <StoreActivities />
          <StoreDetails />
        </div>
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Link href="/products/1">
            <ProductCard />
          </Link>
          <Link href="/products/1">
            <ProductCard />
          </Link>
          <Link href="/products/1">
            <ProductCard />
          </Link>
          <Link href="/products/1">
            <ProductCard />
          </Link>
          <Link href="/products/1">
            <ProductCard />
          </Link>
          <Link href="/products/1">
            <ProductCard />
          </Link>
          <Link href="/products/1">
            <ProductCard />
          </Link>
          <Link href="/products/1">
            <ProductCard />
          </Link>
          <Link href="/products/1">
            <ProductCard />
          </Link>
          <Link href="/products/1">
            <ProductCard />
          </Link>
          <Link href="/products/1">
            <ProductCard />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Store;
