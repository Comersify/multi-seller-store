import { Gallery } from "./Gallery";
import { ReviewCard } from "@/components/ReviewCards";
import { ProductDetailsCard } from "./ProductDetailsCard";
import { ShippingCard } from "./ShippingCard";
import Head from "next/head";
import { useRouter } from "next/router";
import { useGetProducts } from "@/api/product";
import { useGetReviews } from "@/api/review";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postData = [];

  return {
    props: {
      product: postData,
      reviews: postData,
    },
  };
}

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { product } = useGetProducts({ filter: `id/${id}/` });
  const { reviews } = useGetReviews();
  return (
    <>
      <Head>
        <title>{product?.title || "title"}</title>
      </Head>
      <main className="px-6 md:px-20 lg:px-34">
        <div className="px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
          <Gallery images={product?.images} />
          <ProductDetailsCard
            price={product?.price}
            stars={product?.stars}
            starsCount={product?.starsCount}
            description={product?.description}
            discount={product?.discount}
            packs={product?.packs}
            title={product?.title || "Products Title"}
          />
        </div>
        {/*      <div className="md:flex sm:block mb-12 items-center justify-center">
          <ShippingCard />
          <ShippingCard />
        </div> */}
        <ReviewCard reviews={reviews} />
      </main>
    </>
  );
}
