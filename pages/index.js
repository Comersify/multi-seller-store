import Head from "next/head";
import Link from "next/link";
import { Ads } from "@/components/Ads";
import { ProductCard } from "@/components/ProductCard";
import { Title } from "@/components/Title";
import { StoreCard } from "@/components/StoreCard";
import { CategoriesCard } from "@/components/CategoriesCard";
import { HomeReviewCard } from "@/components/ReviewCards";

const BigDeals = () => {
  return (
    <div class="flex flex-wrap gap-4 justify-center pt-8">
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
  );
};

const FeaturedStores = () => {
  return (
    <div class="flex flex-wrap gap-4 justify-center pt-8">
      <Link href="/stores/1">
        <StoreCard />
      </Link>
      <Link href="/stores/1">
        <StoreCard />
      </Link>
      <Link href="/stores/1">
        <StoreCard />
      </Link>
      <Link href="/stores/1">
        <StoreCard />
      </Link>
    </div>
  );
};

const HotCategories = () => {
  return (
    <div class="flex flex-wrap gap-6 justify-center pt-8">
      <CategoriesCard />
      <CategoriesCard />
      <CategoriesCard />
      <CategoriesCard />
    </div>
  );
};

const Reviews = () => {
  return (
    <div class="flex flex-wrap gap-6 justify-center mt-14 ">
      <HomeReviewCard />
      <HomeReviewCard />
      <HomeReviewCard />
      <HomeReviewCard />
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Ads />
        <section className="py-4 px-16">
          <Title text="Big Deals" emoji="&#x1F947;" />
          <BigDeals />
        </section>
        <section className="py-4 px-16">
          <Title text="Hot Categories" emoji="&#x1F525;" />
          <HotCategories />
        </section>
        <section className="py-4 px-16">
          <Title text="Featured Stores" emoji="&#x2705;" />
          <FeaturedStores />
        </section>
        <section className="py-4 px-16 mb-10">
          <Title text="Customer Reviews" emoji="&#x1F5E8;" />
          <Reviews />
        </section>
      </main>
    </>
  );
}
