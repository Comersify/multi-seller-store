import { Stars } from "./Stars";

const DiscountTag = ({ value }) => {
  return (
    <span className="absolute top-1 right-1 bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
      {value}% off
    </span>
  );
};

export const ProductCard = () => {
  return (
    <div className="w-52 border border-gray-200 rounded relative overflow-hidden hover:shadow-sm">
      <img
        className="w-full h-36"
        src="https://via.placeholder.com/150"
        alt="Product Image"
      />
      <DiscountTag value={10} />
      <div className="px-4 py-2">
        <h2 className="font-bold text-lg text-gray-900">Product Title</h2>
        <div className="flex justify-between items-center mt-1">
          <Stars />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-ccenter py-2">
            <div className="flex text-lg font-bold text-gray-900">
              90
              <div className="text-sm font-bold text-gray-900">$</div>
            </div>
            <div className="px-2 self-end text-sm line-through text-gray-500">
              $98
            </div>
          </div>
          <p className="text-sm self-end text-gray-500">Shipping $23</p>
        </div>
      </div>
    </div>
  );
};
