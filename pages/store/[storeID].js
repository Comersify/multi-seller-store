import { useGetStores } from "@/api/store";
import { ProductCard } from "@/components/ProductCard";
import { Star } from "@/components/Stars";
import { OrderIcon } from "@/components/shared/Icons";
import Image from "next/image";
import Link from "next/link";

export const Cover = ({ cover }) => {
  return (
    <div className="mb-4">
      <Image
        width={1000}
        height={1000}
        src={cover || "https://picsum.photos/id/1018/1200/500"}
        alt="Store cover"
        className="w-full rounded-lg"
      />
    </div>
  );
};

export const StoreHeader = ({ name, logo }) => {
  return (
    <div className="flex items-center mb-4">
      <Image
        width={40}
        height={40}
        src={logo || "https://picsum.photos/id/1018/1200/500"}
        alt="Store logo"
        className="w-16 h-16 rounded-full mr-4"
      />
      <h1 className="text-lg font-medium">{name || "Store Name"}</h1>
    </div>
  );
};

export const StoreActivities = ({ stores }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="mr-4 flex items-center">
        <span className="text-lg flex items-center font-medium">
          {stores.reviews || 4.5}
          <Star active />
        </span>
        <p className="text-sm text-gray-500">
          {stores.reviews || "124 ratings"}
        </p>
      </div>
      <div className="mr-4 flex items-center">
        <OrderIcon />
        <p className="text-sm ml-2 text-gray-500">
          {stores.orders || "6,789 orders"}
        </p>
      </div>
    </div>
  );
};

export const StoreDetails = ({ description }) => {
  return (
    <>
      <p className="text-sm">Expected shipping time: 2-4 business days</p>
      <p className="text-sm mt-4">
        {description ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eros non
        nunc rhoncus posuere. Nunc vel lorem tincidunt, aliquam magna a,
        pulvinar nisi. Aliquam at justo vitae est vestibulum eleifend. Donec
        commodo, ipsum eu scelerisque maximus, arcu mi volutpat tellus, at
        tristique orci lacus in mauris. Aenean tincidunt sapien et venenatis
        interdum. Nulla facilisi.`}
      </p>
    </>
  );
};

function Store() {
  const { stores } = useGetStores({ filter: "id/1/" });
  return (
    <section className=" text-gray-900 w-full p-6 flex flex-col justify-center items-center">
      <div className="max-w-6xl">
        <div className="bg-white  w-full  h-full rounded-lg border border-gray-200 p-4">
          <Cover cover={stores.cover} />
          <StoreHeader logo={stores.logo} name={stores.name} />
          <StoreActivities stores={stores} />
          <StoreDetails description={stores.description} />
        </div>
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          {stores?.products?.map(() => {
            <ProductCard />;
          })}
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
    </section>
  );
}
export default Store;
