import { useState, useEffect } from "react";

export const Banner = () => {
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
    <div class="relative">
      <div class="overflow-hidden">
        <div class="flex relative max-h-[30rem]">
          <button
            className="absolute font-bold hover:opacity-100 text-lg top-[35%] mx-4 p-4 opacity-75 rounded-full bg-gray-100 text-black"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <img
            class="w-screen max-h-[30rem]"
            src={images[currentIndex]}
            alt="Image 1"
          />
          <button
            className="absolute font-bold text-lg top-[35%] right-0 mx-4 p-4 opacity-75 hover:opacity-100 rounded-full bg-gray-100 text-black"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
