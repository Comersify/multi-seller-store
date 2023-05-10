import { Stars } from "./Stars";

export const ProductCard = () => {
  return (
    <div class="w-52 border border-gray-200 rounded relative overflow-hidden hover:shadow-sm">
      <img
        class="w-full h-36"
        src="https://via.placeholder.com/150"
        alt="Product Image"
      />
      <span class="absolute top-1 right-1 bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
        10% off
      </span>
      <div class="px-4 py-2">
        <h2 class="font-bold text-lg text-gray-900">Product Title</h2>
        <div class="flex justify-between items-center mt-1">
          <Stars />
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-ccenter py-2">
            <div class="flex text-lg font-bold text-gray-900">
              90
              <div class="text-sm font-bold text-gray-900">$</div>
            </div>
            <div class="px-2 self-end text-sm line-through text-gray-500">
              $98
            </div>
          </div>
          <p class="text-sm self-end text-gray-500">Shipping $23</p>
        </div>
      </div>
    </div>
  );
};
