import Link from "next/link";
import { Stars } from "./Stars";
import Image from "next/image";
import { MEDIA_URL } from "@/urls";

export const StoreCard = ({ id, image, name, rating, description }) => {
  return (
    <Link href={`store/${id}`}>
      <div className="w-[20rem] mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <div className=" md:h-full mb-2 md:w-48 mt-4 md:mt-0 flex items-center justify-center">
            <Image
              width={100}
              height={100}
              className="h-[6rem] w-[6rem] my-2 rounded-full"
              src={MEDIA_URL + image?.replace("/media/", "")}
              alt="Store Logo"
            />
          </div>
          {rating > 0 ? (
            <Stars num={rating} />
          ) : (
            <p className="text-gray-500 font-bold text-sm">Not reviewed yet</p>
          )}
        </div>
        <div className="pt-3 pb-5">
          <div className=" uppercase text-center tracking-wide text-lg text-indigo-500 font-semibold">
            {name}
          </div>
          <p
            href="#"
            className="px-2 block mt-1 text-md leading-tight text-center font-medium text-black"
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
