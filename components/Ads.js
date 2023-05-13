import { useState, useEffect } from "react";
import { LeftArrow, RightArrow } from "./shared/Icons";

export const Ads = () => {
  const images = [
    "https://picsum.photos/id/1015/1200/500",
    "https://picsum.photos/id/1013/1200/500",
    "https://picsum.photos/id/1018/1200/500",
  ];
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
        <img
          className="w-full rounded-lg max-h-[30rem]"
          src={images[currentIndex]}
          alt="Image 1"
        />
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
