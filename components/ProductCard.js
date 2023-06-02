import Image from "next/image";
import { Stars } from "./Stars";
import Link from "next/link";
import { MinusIcon, PlusIcon, XIcon } from "./shared/Icons";
import { useState } from "react";
import { useStateContext } from "@/context/contextProvider";

const DiscountTag = ({ value }) => {
  return (
    <span className="absolute top-1 left-1 bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
      {value}% off
    </span>
  );
};

export const ProductItem = ({
  id,
  image,
  name,
  discount,
  price,
  num,
  shipping,
  handleDelete,
  handleUpdate,
}) => {
  const { handleNotification } = useStateContext();
  const [quantity, setQuantity] = useState(num);
  const handleUpdateQuantity = (action) => {
    if (action == "dec") {
      if (quantity <= 1) {
        handleNotification({
          type: "error",
          message: "Can't decrease quantity any more",
        });
        setQuantity(1);
        return;
      }
      if (quantity > 1) {
        setQuantity(quantity - 1);
        handleUpdate(id, quantity);
        return;
      }
    }
    if (action == "inc") {
      setQuantity(quantity + 1);
      handleUpdate(id, quantity);
      return;
    }
  };
  return (
    <div className="w-[600px] max-sm:w-[220px] flex flex-col justify-center p-5">
      <div className="flex items-center rounded-md border-b-2 max-sm:border-2 pb-4 max-sm:pb-0 max-sm:block relative">
        <Image
          src={image}
          alt="Product Image"
          width={150}
          height={150}
          className="max-sm:w-full object-cover max-sm:rounded-none rounded-md"
        />
        <DiscountTag value={discount} />
        <div className="w-full flex max-sm:px-2 px-4 justify-between max-sm:block">
          <div>
            <h2 className="font-semibold text-lg">{name}</h2>
            <div className="mt-4 max-sm:mt-0">
              <p className="text-gray-500 max-sm:hidden text-sm">Price:</p>
              <p className="text-lg font-semibold">${price}</p>
              <p className="text-gray-500 text-sm mt-2 max-sm:mt-0">
                Shipping:
              </p>
              <p className="text-sm font-semibold">
                {shipping > 0 ? `$${shipping}` : "Free Shipping"}
              </p>
            </div>
          </div>
          <div className="flex flex-col max-sm:flex-row">
            <div className="self-end max-sm:absolute max-sm:top-0 max-sm:right-0">
              <button
                onClick={() => handleDelete(id)}
                className="self-start flex-1 text-sm text-red-400 hover:text-red-500 rounded-full p-1 bg-red-100 focus:outline-none mt-1"
              >
                <XIcon />
              </button>
            </div>
            <div className="w-full flex-1 flex items-end justify-end my-3">
              <button
                onClick={() => handleUpdateQuantity("dec")}
                className="bg-gray-200 text-gray-900 text-sm font-bold p-2 rounded-full"
                id="decreaseBtn"
              >
                <MinusIcon />
              </button>
              <span className="px-4 text-gray-900 font-bold text-lg" id="count">
                {quantity}
              </span>
              <button
                onClick={() => handleUpdateQuantity("inc")}
                className="bg-gray-200 text-gray-900 font-bold p-2 rounded-full"
                id="increaseBtn"
              >
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({ id, title, rating, price, image, discount, orders }) => {
  const acctualPrice = (price - (discount * price) / 100) 
  return (
    <Link href={`/products/${id}`}>
      <div className="w-52 border border-gray-200 rounded relative overflow-hidden hover:shadow-sm">
        <img width={600} height={600} src={"http://127.0.0.1:8000/media" + image } className="w-full h-[13rem]" alt="Product Image" />
        {discount && <DiscountTag value={discount} />}
        <div className="px-4 py-2">
          <h2 className="font-bold text-lg text-gray-900">{title}</h2>
          <div className="flex justify-between items-center font-bold text-sm text-gray-400">
            {rating > 0 ? <Stars num={rating} /> : "Not rated yet"}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-ccenter py-1">
              <div className="flex text-lg font-bold text-gray-900">
                {discount ? acctualPrice.toFixed(2) : price}
                <div className="text-sm font-bold text-gray-900">$</div>
              </div>
              {discount && <div className="px-2 self-end text-sm line-through text-gray-500">
                ${price}
              </div>}
            </div>
            <p className="text-gray-500 self-end text-sm font-bold">{orders} orders</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
