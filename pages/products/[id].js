import { Gallery } from "@/components/Gallery";
import { ReviewCard } from "@/components/ReviewCards";
import { ProductDetailsCard } from "@/components/ProductDetailsCard";
import Head from "next/head";
import { useRouter } from "next/router";
import { useGetProducts } from "@/api/product";
import { useGetReviews } from "@/api/review";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  if (!id) return <p>Loading</p>;
  const { products: product } = useGetProducts({ filter: `id/${id}/` });
  const { reviews } = useGetReviews(id);
  if (!reviews) return <p>Loading</p>;

  return (
    <>
      <Head>
        <title>{product?.title}</title>
      </Head>
      <main className="px-6 md:px-20 lg:px-34">
        <div className="px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
          <Gallery images={product?.images} />
          <ProductDetailsCard
            id={product?.id}
            price={product?.price}
            stars={product?.reviews_avg}
            starsCount={product?.reviews}
            description={product?.description}
            discount={product?.discount_value}
            packs={product?.packs}
            title={product?.title}
          />
        </div>
        {/*      
          <div className="md:flex sm:block mb-12 items-center justify-center">
            <ShippingCard />
            <ShippingCard />
          </div> 
        */}
        {reviews?.reviews?.length > 0 ? (
          <ReviewCard reviews={reviews} />
        ) : (
          <p className="text-xl text-gray-400 font-bold text-center border rounded-md py-20 mb-20">
            Not Reviewed yet ..
          </p>
        )}
      </main>
    </>
  );
}
