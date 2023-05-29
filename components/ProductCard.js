import Image from "next/image";
import { Stars } from "./Stars";
import Link from "next/link";

const DiscountTag = ({ value }) => {
  return (
    <span className="absolute top-1 right-1 bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
      {value}% off
    </span>
  );
};

export const ProductItem = () => {
  return (
    <div className="w-[600px] max-sm:w-[220px] flex flex-col justify-center p-5">
      <div className="flex items-center rounded-md border-b-2 max-sm:border-2 pb-4 max-sm:pb-0 max-sm:block relative">
        <img
          src="https://via.placeholder.com/450"
          alt="Product Image"
          className="w-[150px] h-[150px] max-sm:w-full object-cover max-sm:rounded-none rounded-md"
        />
        <div className="w-full flex max-sm:px-2 px-4 justify-between max-sm:block">
          <div>
            <h2 className="font-semibold text-lg">Product Name</h2>
            <div className="mt-4 max-sm:mt-0">
              <p className="text-gray-500 max-sm:hidden text-sm">Price:</p>
              <p className="text-lg font-semibold">$50.00</p>
              <p className="text-gray-500 text-sm mt-2 max-sm:mt-0">
                Shipping:
              </p>
              <p className="text-sm font-semibold">Free Shipping</p>
            </div>
          </div>
          <div className="flex flex-col max-sm:flex-row">
            <div className="self-end max-sm:absolute max-sm:top-0 max-sm:right-0">
              <button className="self-start flex-1 text-sm text-red-400 hover:text-red-500 rounded-full p-1 bg-red-100 focus:outline-none mt-1">
                <svg
                  className="w-[19px] h-[19px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 6l12 12M6 18L18 6"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="w-full flex-1 flex items-end justify-end my-3">
              <button
                className="bg-gray-200 text-gray-900 text-sm font-bold p-2 rounded-full"
                id="decreaseBtn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </button>
              <span className="px-4 text-gray-900 font-bold text-lg" id="count">
                1
              </span>
              <button
                className="bg-gray-200 text-gray-900 font-bold p-2 rounded-full"
                id="increaseBtn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({ id, title, rating, price, image, discount }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="w-52 border border-gray-200 rounded relative overflow-hidden hover:shadow-sm">
        <Image width={600} height={600} src={image} alt="Product Image" />
        {discount && <DiscountTag value={discount} />}
        <div className="px-4 py-2">
          <h2 className="font-bold text-lg text-gray-900">{title}</h2>
          <div className="flex justify-between items-center mt-1 text-gray-500">
            {rating > 0 ? <Stars num={rating} /> : "Not rated yet"}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-ccenter py-2">
              <div className="flex text-lg font-bold text-gray-900">
                {price - (discount * price) / 100}
                <div className="text-sm font-bold text-gray-900">$</div>
              </div>
              <div className="px-2 self-end text-sm line-through text-gray-500">
                ${price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
