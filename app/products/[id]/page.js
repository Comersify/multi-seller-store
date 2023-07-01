"use client";
import { Gallery } from "@/components/Gallery";
import { ReviewCard } from "@/components/ReviewCards";
import { ProductDetailsCard } from "@/components/ProductDetailsCard";
import { useGetProducts } from "@/api/product";
import { useGetReviews } from "@/api/review";

export default function ProductDetails({ params }) {
  const { id } = params;
  if (!id) return <p>Loading</p>;
  const { products: product } = useGetProducts({ filter: `id/${id}/` });
  const { reviews } = useGetReviews(id);
  if (!reviews) return <p>Loading</p>;

  return (
    <section className="px-6 md:px-20 lg:px-34">
      <div className="px-6 flex min-[200px]:flex-wrap">
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
          shipping={product?.shipping}
        />
      </div>

      {reviews?.reviews?.length > 0 ? (
        <ReviewCard reviews={reviews} />
      ) : (
        <p className="text-xl text-gray-400 font-bold text-center border rounded-md py-20 mb-20">
          Not Reviewed yet ..
        </p>
      )}
    </section>
  );
}
