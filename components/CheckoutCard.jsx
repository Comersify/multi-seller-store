import { useGetCouponValue } from "@/api/coupon";
import Link from "next/link";
import { useEffect } from "react";
import { PaymentForm } from "./PaymentForm";

const ApplyCoupon = ({ handleApply, setCoupon, coupon }) => {
  return (
    <div className="flex items-center justify-between mb-2 py-4 border-b-2 border-gray-400">
      <p className="text-lg font-bold text-gray-500 py-1 mr-2">Coupon:</p>
      <input
        onChange={(e) => setCoupon(e.target.value)}
        type="text"
        value={coupon}
        className="py-1 px-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        onClick={(e) => handleApply(e)}
        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 ml-2 px-4 py-1 text-base font-bold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Apply
      </button>
    </div>
  );
};

export const CheckoutCard = ({
  refresh,
  total = 0,
  subTotal = 0,
  discount = 0,
  usedCoupons,
}) => {
  const { setCoupon, handleApply, setCoupons, coupon, coupons } =
    useGetCouponValue(refresh);
  useEffect(() => {
    setCoupons(usedCoupons);
  }, [usedCoupons]);
  return (
    <div className="max-sm:m-0 ml-8 border bg-gray-100 rounded-md p-4">
      <ApplyCoupon
        handleApply={handleApply}
        setCoupon={setCoupon}
        coupon={coupon}
      />
      {coupons?.map((c) => {
        return (
          <div
            key={c.coupon__code}
            className="flex items-center justify-between mb-2"
          >
            <p className="text-lg font-bold text-gray-500">
              Coupon [{c.coupon__code}]:
            </p>
            <p className="text-lg font-bold">${c.coupon__value}</p>
          </div>
        );
      })}
      <div className="flex items-center justify-between mb-2">
        <p className="text-lg font-bold text-gray-500">SubTotal:</p>
        <p className="text-lg font-bold">${subTotal}</p>
      </div>
      <div className="flex items-center justify-between mb-2 pb-2 border-0 border-b-2 border-b-gray-400">
        <p className="text-lg font-bold text-gray-500">Discount:</p>
        <p className="text-lg font-bold">${discount}</p>
      </div>
      <div className="flex items-center justify-between mb-2 overflow-hidden">
        <p className="font-bold text-lg">Total:</p>
        <p className="text-lg font-bold">${total}</p>
      </div>
      <PaymentForm />
    </div>
  );
};
