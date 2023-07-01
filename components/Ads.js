"use client";

import { useState, useEffect } from "react";
import { LeftArrow, RightArrow } from "./shared/Icons";
import Image from "next/image";
import { useGetAds } from "@/api/ads";
import { MEDIA_URL } from "@/urls";

export const Ads = () => {
  const { images } = useGetAds();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 2500);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  function handleNext() {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }
  function handlePrev() {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }

  return (
    <div className="overflow-hidden p-16 flex items-center justify-center">
      <div className="relative max-w-8xl">
        <button
          className="absolute font-bold hover:opacity-100 text-lg top-[41%] mx-4 p-4 opacity-75 rounded-full bg-gray-100 text-black"
          onClick={handlePrev}
        >
          <LeftArrow />
        </button>
        {images[currentIndex] && (
          <img
            width={1200}
            height={1200}
            onClick={() => window.location.replace(images[currentIndex]?.link)}
            className="min-w-[20rem] cursor-pointer rounded-lg max-h-[25rem]"
            src={
              MEDIA_URL + images[currentIndex]?.image?.replace("/media/", "")
            }
            alt="Ads"
          />
        )}
        <button
          className="absolute font-bold text-lg top-[41%] right-0 mx-4 p-4 opacity-75 hover:opacity-100 rounded-full bg-gray-100 text-black"
          onClick={handleNext}
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};
