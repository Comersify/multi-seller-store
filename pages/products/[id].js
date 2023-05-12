import { Gallery } from "./Gallery";
import { ReviewCard } from "@/components/ReviewCards";
import { ProductDetailsCard } from "./ProductDetailsCard";
import Head from "next/head";

export default function ProductDetails() {
  return (
    <>
      <Head>
        <title>Title</title>
      </Head>
      <main class="px-6 md:px-20 lg:px-34">
        <div class="px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
          <Gallery />
          <ProductDetailsCard />
          <ReviewCard />
        </div>
      </main>
    </>
  );
}
