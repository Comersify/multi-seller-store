export const PaymentCard = ({ active }) => {
  return (
    <div
      className={`w-full cursor-pointer select-none bg-white flex shadow-sm p-6 max-[741px]:flex-col max-[741px]:w-[300px] justify-between rounded-lg focus:outline-none ${
        active
          ? "ring-2 ring-orange-500 ring-offset-orange-200"
          : "border border-gray-300"
      }`}
    >
      <div className="flex flex-col mb-4 mr-4">
        <label className="font-bold mb-2" htmlFor="full-name">
          Full Name
        </label>
        <span id="full-name">John Doe</span>
      </div>
      <div className="flex flex-col mb-4 mr-4">
        <label className="font-bold mb-2" htmlFor="address">
          Address
        </label>
        <span id="address">123 Main Street</span>
      </div>
      <div className="flex flex-col mb-4 mr-4">
        <label className="font-bold mb-2" htmlFor="phone-number">
          Phone Number
        </label>
        <span id="phone-number">(123) 456-7890</span>
      </div>
      <div className="flex flex-col mb-4 mr-4">
        <label className="font-bold mb-2" htmlFor="postal-code">
          Postal Code
        </label>
        <span id="postal-code">A1B 2C3</span>
      </div>
      <div className="flex flex-col mb-4 mr-4">
        <label className="font-bold mb-2" htmlFor="card-number">
          Visa Card Number
        </label>
        <span id="card-number">**** **** **** 1234</span>
      </div>
    </div>
  );
};
