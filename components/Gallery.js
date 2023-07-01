"use client";
import { MEDIA_URL } from "@/urls";
import { useState } from "react";

export const Gallery = ({ images }) => {
  if (!images) return;
  images = images.map((image) => image.image);
  const [bigImage, setBigImage] = useState(images[0]);
  const [smallImages, setSmallImages] = useState(
    images.slice(1, images.length)
  );
  const showImage = (image) => {
    setSmallImages(images.filter((im) => im != image));
    setBigImage(image);
  };
  return (
    <section className="mx-auto h-90 py-16 sm:col-span-1 md:col-span-2 lg:col-span-2 relative lg:gap-x-8 lg:px-8">
      <div className="flex justify-center">
        <div className="block space-y-4 mr-2">
          {smallImages.map((image, i) => {
            return (
              <img
                key={i}
                src={MEDIA_URL + image?.replace("/media/", "")}
                className="max-w-[60px] max-h-[60px] cursor-pointer md:mb-2"
                onClick={() => showImage(image)}
              />
            );
          })}
        </div>
        <img
          src={MEDIA_URL + bigImage?.replace("/media/", "")}
          className="max-sm:w-[300px] max-sm:h-[300px] max-md:w-[400px] h-[400px]"
        />
      </div>
    </section>
  );
};
