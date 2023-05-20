import { ProductCard } from "@/components/ProductCard";
import { Title } from "@/components/shared/Title";
import Head from "next/head";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <main className="min-h-[68vh] px-16 pt-8">
        <Title text="Wish List" />
        <div className="mt-8 flex flex-wrap gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>
    </>
  );
}
