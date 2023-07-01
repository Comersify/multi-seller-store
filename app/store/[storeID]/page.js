import { useGetStores } from "@/api/store";
import { ProductCard } from "@/components/ProductCard";
import { Stars } from "@/components/Stars";
import { OrderIcon } from "@/components/shared/Icons";
import { MEDIA_URL } from "@/urls";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Cover = ({ cover }) => {
  return (
    <div className="mb-4">
      <img
        width={1000}
        height={1000}
        src={MEDIA_URL + cover.replace("/media/", "")}
        alt="Store cover"
        className="w-full max-h-[20rem] rounded-lg"
      />
    </div>
  );
};

export const StoreHeader = ({ name, logo }) => {
  return (
    <div className="flex items-center mb-4">
      <img
        width={40}
        height={40}
        src={MEDIA_URL + logo?.replace("/media/", "")}
        alt="Store logo"
        className="w-16 h-16 rounded-full mr-4"
      />
      <h1 className="text-lg font-medium">{name}</h1>
    </div>
  );
};

export const StoreActivities = ({ reviewsAvg, orders, reviews }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="mr-4 flex items-center">
        {reviewsAvg > 0 ? (
          <span className="text-lg flex items-center font-medium">
            <Stars num={reviewsAvg} />

            <p className="text-sm text-gray-500 mx-2 font-bold">
              {reviews + " rating"}
              {reviews > 1 && "s"}
            </p>
          </span>
        ) : (
          <p className="text-gray-500 text-sm font-bold">Not reviewed yet</p>
        )}
      </div>
      <div className="mr-4 flex items-center">
        <OrderIcon />
        <p className="text-sm ml-2 text-gray-500 font-bold">
          {orders + " orders"}
        </p>
      </div>
    </div>
  );
};

export const StoreDetails = ({ description }) => {
  return (
    <>
      <p className="text-sm">Expected shipping time: 2-4 business days</p>
      <p className="text-sm mt-4">{description}</p>
    </>
  );
};

function Store() {
  const router = useRouter();
  const { storeID } = router.query;
  if (!storeID) return <p>Loading</p>;
  const { stores: store } = useGetStores({ filter: `id/${storeID}/` });
  return (
    <section className=" text-gray-900 w-full p-6 flex flex-col justify-center items-center">
      <div className="w-full">
        <div className="bg-white  w-full  max-h-[40rem] rounded-lg border border-gray-200 p-4">
          <Cover cover={store.cover} />
          <StoreHeader logo={store.logo} name={store.name} />
          <StoreActivities
            reviews={store.reviews}
            reviewsAvg={store.reviews_avg}
            orders={store.orders}
          />
          <StoreDetails description={store.description} />
        </div>
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          {store?.products?.map((product) => (
            <ProductCard
              key={product.id}
              orders={product.orders}
              id={product.id}
              title={product.title}
              rating={product.reviews}
              price={product.price}
              image={product.image}
              discount={product.discount_value}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Store;
