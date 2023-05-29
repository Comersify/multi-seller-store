import { useState } from "react";

export const Gallery = () => {
  var images = [
    "https://via.placeholder.com/450",
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/550",
  ];
  const [bigImage, setBigImage] = useState(images[0]);
  const [smallImages, setSmallImages] = useState([
    images[1],
    images[2],
    images[3],
  ]);
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
                src={image}
                className="max-w-[60px] max-h-[60px] cursor-pointer md:mb-2"
                onClick={() => showImage(image)}
              />
            );
          })}
        </div>
        <img
          src={bigImage}
          className="max-sm:max-w-[300px] max-sm:max-h-[300px] max-md:max-w-[400px] max-h-[400px]"
        />
      </div>
    </section>
  );
};
