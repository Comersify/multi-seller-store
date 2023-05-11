export const CategoriesCard = () => {
  return (
    <div>
      <div className="w-[16rem] h-[16rem]  bg-white p-5 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-10">
          <div className="w-20 h-20 block">
            <img className="rounded-md" src="https://via.placeholder.com/150" />
            <p className="text-gray-900 hover:text-indigo-500 hover:underline cursor-pointer text-center pt-2 text-sm">
              product title
            </p>
          </div>
          <div className="w-20 h-20 block">
            <img className="rounded-md" src="https://via.placeholder.com/150" />
            <p className="text-gray-900 hover:text-indigo-500 hover:underline cursor-pointer text-center pt-2 text-sm">
              product title
            </p>
          </div>
          <div className="w-20 h-20 block">
            <img className="rounded-md" src="https://via.placeholder.com/150" />
            <p className="text-gray-900 hover:text-indigo-500 hover:underline cursor-pointer text-center pt-2 text-sm">
              product title
            </p>
          </div>
          <div className="w-20 h-20 block">
            <img className="rounded-md" src="https://via.placeholder.com/150" />
            <p className="text-gray-900 hover:text-indigo-500 hover:underline cursor-pointer text-center pt-2 text-sm">
              product title
            </p>
          </div>
        </div>
      </div>
      <p className="p-2 text-xl text-black hover:text-indigo-500 hover:underline cursor-pointer">
        Category 1
      </p>
    </div>
  );
};
