import Image from "next/image";
import Link from "next/link";

export const CategoriesCard = ({ id, name, products = [] }) => {
  return (
    <div>
      <div className="w-[16rem] h-[16rem] mb-2 bg-white p-5 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className=" grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-10">
          {products.map((product) => {
            <Link href={`products/${id}`} className="w-20 h-20 block">
              <Image
                width={80}
                height={80}
                className="rounded-md"
                alt="Product image"
                src={product.image}
              />
              <p className="text-gray-900 hover:text-indigo-500 hover:underline cursor-pointer text-center pt-2 text-sm">
                {product.title}
              </p>
            </Link>;
          })}
          <Link href={`products/${id}`} className="w-20 h-20 block">
            <Image
              width={80}
              height={80}
              alt="Product image"
              className="rounded-md"
              src="https://via.placeholder.com/150"
            />
            <p className="text-gray-900 hover:text-indigo-500 hover:underline cursor-pointer text-center pt-2 text-sm">
              product title
            </p>
          </Link>
          <Link href={`products/${id}`} className="w-20 h-20 block">
            <Image
              width={80}
              alt="Product image"
              height={80}
              className="rounded-md"
              src="https://via.placeholder.com/150"
            />
            <p className="text-gray-900 hover:text-indigo-500 hover:underline cursor-pointer text-center pt-2 text-sm">
              product title
            </p>
          </Link>
          <Link href={`products/${id}`} className="w-20 h-20 block">
            <Image
              width={80}
              height={80}
              alt="Product image"
              className="rounded-md"
              src="https://via.placeholder.com/150"
            />
            <p className="text-gray-900 hover:text-indigo-500 hover:underline cursor-pointer text-center pt-2 text-sm">
              product title
            </p>
          </Link>
          <Link href={`products/${id}`} className="w-20 h-20 block">
            <Image
              width={80}
              height={80}
              alt="Product image"
              className="rounded-md"
              src="https://via.placeholder.com/150"
            />
            <p className="text-gray-900 hover:text-indigo-500 hover:underline cursor-pointer text-center pt-2 text-sm">
              product title
            </p>
          </Link>
        </div>
      </div>
      <Link
        href={`products/category=${id}`}
        className="p-2 text-xl text-black hover:text-indigo-500 hover:underline cursor-pointer"
      >
        {name}
      </Link>
    </div>
  );
};
