const TruckIcon = () => {
  return (
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
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      />
    </svg>
  );
};

export const ShippingCard = () => {
  return (
    <div className="-max-w-[450px] rounded-md mb-4 mr-6 shadow-sm border border-gray-200 p-6 text-gray-900">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold flex items-center">
          <TruckIcon />
          <p className="px-2">Shipping Service</p>
        </div>
        <div className="bg-gray-200 rounded-md px-2 py-1 text-xs">
          <span className="text-gray-700">Free Shipping</span>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <p>
          <span className="font-medium">Estimated Delivery:</span> 3-5 business
          days
        </p>
        <p>
          <span className="font-medium">Price:</span> $20
        </p>
      </div>
    </div>
  );
};
