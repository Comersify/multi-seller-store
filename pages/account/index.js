import { useWishList } from "@/api/api";
import { ProductCard } from "@/components/ProductCard";
import { XIcon } from "@/components/shared/Icons";
import { Title } from "@/components/shared/Title";
import Head from "next/head";

export default function Profile() {
  const { handleDelete, products } = useWishList();
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <main className="min-h-[68vh] px-16 pt-8 mb-24">
        <Title text="My Wish List" />
        <div className="mt-8 flex flex-wrap gap-8">
          {products.map((product) => {
            <div className="relative">
              <div className="absolute top-0 right-0 z-10">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-sm text-red-400 hover:text-red-500 rounded-full p-1 bg-red-100 focus:outline-none mt-1"
                >
                  <XIcon />
                </button>
              </div>
              <ProductCard
                id={product.id}
                title={product.title}
                rating={product.rating}
                price={product.price - (product.discount * product.price) / 100}
                image={product.image}
                discount={product.discount}
              />
            </div>;
          })}
          <div className="relative">
            <div className="absolute top-0 right-1 z-10">
              <button
                onClick={() => {}}
                className="text-sm text-red-400 hover:text-red-500 rounded-full p-1 bg-red-100 focus:outline-none mt-1"
              >
                <XIcon />
              </button>
            </div>
            <ProductCard
              id={4}
              title="product title"
              rating={3}
              price={98}
              image="https://via.placeholder.com/150"
              discount={10}
            />
          </div>
          <div className="relative">
            <div className="absolute top-0 right-1 z-10">
              <button
                onClick={() => {}}
                className="text-sm text-red-400 hover:text-red-500 rounded-full p-1 bg-red-100 focus:outline-none mt-1"
              >
                <XIcon />
              </button>
            </div>
            <ProductCard
              id={4}
              title="product title"
              rating={3}
              price={98}
              image="https://via.placeholder.com/150"
              discount={10}
            />
          </div>
          <div className="relative">
            <div className="absolute top-0 right-1 z-10">
              <button
                onClick={() => {}}
                className="text-sm text-red-400 hover:text-red-500 rounded-full p-1 bg-red-100 focus:outline-none mt-1"
              >
                <XIcon />
              </button>
            </div>
            <ProductCard
              id={4}
              title="product title"
              rating={3}
              price={98}
              image="https://via.placeholder.com/150"
              discount={10}
            />
          </div>
          <div className="relative">
            <div className="absolute top-0 right-1 z-10">
              <button
                onClick={() => {}}
                className="text-sm text-red-400 hover:text-red-500 rounded-full p-1 bg-red-100 focus:outline-none mt-1"
              >
                <XIcon />
              </button>
            </div>
            <ProductCard
              id={4}
              title="product title"
              rating={3}
              price={98}
              image="https://via.placeholder.com/150"
            />
          </div>
          <div className="relative">
            <div className="absolute top-0 right-1 z-10">
              <button
                onClick={() => {}}
                className="text-sm text-red-400 hover:text-red-500 rounded-full p-1 bg-red-100 focus:outline-none mt-1"
              >
                <XIcon />
              </button>
            </div>
            <ProductCard
              id={4}
              title="product title"
              rating={3}
              price={98}
              image="https://via.placeholder.com/150"
              discount={10}
            />
          </div>
          <div className="relative">
            <div className="absolute top-0 right-1 z-10">
              <button
                onClick={() => {}}
                className="text-sm text-red-400 hover:text-red-500 rounded-full p-1 bg-red-100 focus:outline-none mt-1"
              >
                <XIcon />
              </button>
            </div>
            <ProductCard
              id={4}
              title="product title"
              rating={3}
              price={98}
              image="https://via.placeholder.com/150"
              discount={10}
            />
          </div>
        </div>
      </main>
    </>
  );
}
