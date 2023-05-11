import { Stars } from "./Stars";

export const StoreCard = () => {
  return (
    <div className="max-w-[28rem] mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <div className=" md:h-full mb-2 md:w-48 mt-4 md:mt-0 flex items-center justify-center">
          <img
            className="max-h-[6rem] max-w-[6rem] my-2 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Store Logo"
          />
        </div>
        <Stars />
      </div>
      <div className="pt-3 pb-5">
        <div className="pt-2 uppercase text-lg text-center tracking-wide text-sm text-indigo-500 font-semibold">
          Store Name
        </div>
        <p
          href="#"
          className="px-2 block mt-1 text-md leading-tight text-center font-medium text-black"
        >
          lorem ipsum dollar bala a,a,a,ajfqjfmlsfhlkqsfglkdjfklqdfv jHVSMvhml
        </p>
      </div>
    </div>
  );
};
