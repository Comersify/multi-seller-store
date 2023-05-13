import Head from "next/head";
import { ProductItem } from "@/components/ProductCard";
import { CheckoutCard } from "./CheckoutCard";

export default function Cart() {
  return (
    <>
      <Head>
        <title>My Cart</title>
      </Head>
      <main className="text-gray-900 md:px-16 px-4 py-10">
        <h1 className="text-4xl font-bold py-6 max-sm:px-2">Shopping Cart</h1>
        <div className="py-4 flex flex-wrap gap-y-2 px-0 justify-start">
          <div className="max-sm:flex max-sm:flex-wrap max-sm:gap-y-2 max-sm:justify-center">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
          <CheckoutCard />
        </div>
      </main>
    </>
  );
}
