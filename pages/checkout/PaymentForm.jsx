import { Input } from "@/forms/Input";

export const PaymentForm = () => {
  return (
    <form className="max-w-[600px] bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col mb-4">
        <Input label={"Full Name"} type={"text"} />
      </div>
      <div className="flex flex-col mb-4">
        <Input type="text" label="Address" />
      </div>
      <div className="flex flex-col mb-4">
        <Input type="text" label="Phone Number" />
      </div>
      <div className="flex flex-col mb-4">
        <Input type="text" label="Visa Card Number" />
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col mb-4 mr-4 w-[150px]">
          <Input type="text" label="MM/YY" />
        </div>
        <div className="flex flex-col mr-4 mb-4 w-[150px]">
          <Input type="text" label="CVC" />
        </div>
        <div className="flex flex-col mb-4 w-[150px]">
          <Input type="text" label="Postal Code" />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};
