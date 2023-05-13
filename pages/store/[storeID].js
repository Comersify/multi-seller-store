import { ProductCard } from "@/components/ProductCard";
import { Star } from "@/components/Stars";
import { OrderIcon } from "@/components/shared/Icons";
import Link from "next/link";

export const Cover = () => {
  return (
    <div class="mb-4">
      <img
        src="https://picsum.photos/id/1018/1200/500"
        alt="Store cover"
        class="w-full rounded-lg"
      />
    </div>
  );
};

export const StoreHeader = () => {
  return (
    <div class="flex items-center mb-4">
      <img
        src="https://picsum.photos/id/1018/1200/500"
        alt="Store logo"
        class="w-16 h-16 rounded-full mr-4"
      />
      <h1 class="text-lg font-medium">Store Name</h1>
    </div>
  );
};

export const StoreActivities = () => {
  return (
    <div class="flex items-center mb-4">
      <div class="mr-4 flex items-center">
        <span class="text-lg flex items-center font-medium">
          4.5
          <Star active />
        </span>
        <p class="text-sm text-gray-500">124 ratings</p>
      </div>
      <div class="mr-4 flex items-center">
        <OrderIcon />
        <p class="text-sm ml-2 text-gray-500">6,789 orders</p>
      </div>
    </div>
  );
};

export const StoreDetails = () => {
  return (
    <>
      <p class="text-sm">Expected shipping time: 2-4 business days</p>
      <p class="text-sm mt-4">
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
    <section class=" text-gray-900 w-full p-6 flex flex-col justify-center items-center">
      <div className="max-w-6xl">
        <div class="bg-white  w-full  h-full rounded-lg border border-gray-200 p-4">
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
