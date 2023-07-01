"use client";
import Head from "next/head";
import { Ads } from "@/components/Ads";
import { ProductCard } from "@/components/ProductCard";
import { Title } from "@/components/shared/Title";
import { StoreCard } from "@/components/StoreCard";
import { CategoriesCard } from "@/components/CategoriesCard";
import { HomeReviewCard } from "@/components/ReviewCards";
import { useGetProducts } from "@/roupi/product";
import { useGetStores } from "@/roupi/store";
import { useGetCategories } from "@/roupi/category";
import { useGetCustomerReviews } from "@/roupi/review";

const BigDeals = () => {
  const { products } = useGetProducts({ filter: "super-deals/" });
  return (
    <div className="flex flex-wrap gap-4 justify-center pt-8">
      {products.map((product) => (
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
  );
};

const FeaturedStores = () => {
  const { stores } = useGetStores({ filter: "top/" });
  return (
    <div className="flex flex-wrap gap-4 justify-center pt-8">
      {stores.map((store) => (
        <StoreCard
          key={store.id}
          id={store.id}
          image={store.logo}
          name={store.name}
          rating={store.reviews_avg}
          description={store.description}
        />
      ))}
    </div>
  );
};

const HotCategories = () => {
  const { categories } = useGetCategories({ filter: "top/" });
  return (
    <div className="flex flex-wrap gap-6 justify-center pt-8">
      {categories.map((category) => (
        <CategoriesCard id={category.id} name={category.name} products={[]} />
      ))}
      <CategoriesCard id={1} name={"Catgeory 1"} products={[]} />
      <CategoriesCard id={1} name={"Catgeory 1"} products={[]} />
      <CategoriesCard id={1} name={"Catgeory 1"} products={[]} />
    </div>
  );
};

const Reviews = () => {
  const { reviews } = useGetCustomerReviews();
  return (
    <div className="flex flex-wrap gap-x-6 justify-center mt-14 ">
      {reviews.map((review) => {
        <HomeReviewCard review={review.review} image={review.image} />;
      })}
      <HomeReviewCard
        review={
          "lorem ipl= ljdfl WFQSJFDPSQ OGF OUSGFOÛgf uoqgf oÛQG FÎUQGFÛQgfÛGFÎQUg i^qugfsîQGFIŶGjfhLD"
        }
        image={"https://via.placeholder.com/150"}
      />
      <HomeReviewCard
        review={
          "lorem ipl= ljdfl WFQSJFDPSQ OGF OUSGFOÛgf uoqgf oÛQG FÎUQGFÛQgfÛGFÎQUg i^qugfsîQGFIŶGjfhLD"
        }
        image={"https://via.placeholder.com/150"}
      />
      <HomeReviewCard
        review={
          "lorem ipl= ljdfl WFQSJFDPSQ OGF OUSGFOÛgf uoqgf oÛQG FÎUQGFÛQgfÛGFÎQUg i^qugfsîQGFIŶGjfhLD"
        }
        image={"https://via.placeholder.com/150"}
      />
    </div>
  );
};

export default function Home() {
  return (
    <>
      <main>
        <Ads />
        <section className="py-4 px-16">
          <Title text="Super Deals" emoji="&#x1F947;" />
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
