import { useGetCouponValue } from "@/api/coupon";
import Link from "next/link";
import { discountCalc } from "../utils";
import { useEffect } from "react";

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

export const CheckoutCard = ({total = 0, subTotal = 0, discount = 0, usedCoupons }) => {
  const { setCoupon, handleApply, setCoupons, coupon, coupons } =
    useGetCouponValue();
  useEffect(() => {
    setCoupons(usedCoupons);
  }, [usedCoupons]);
  console.log(coupons);
  var coupons_value = 0;

  return (
    <div className="relative">
      <div className="fixed max-[1150px]:relative bg-gray-100 rounded-md p-4">
        <ApplyCoupon
          handleApply={handleApply}
          setCoupon={setCoupon}
          coupon={coupon}
        />
        {coupons?.map((c) => {
          const value = discountCalc(
            c.product__price,
            c.coupon__percentage
          ).toFixed(2);
          coupons_value += parseFloat(value);
          return (
            <div
              key={c.coupon__code}
              className="flex items-center justify-between mb-2"
            >
              <p className="text-lg font-bold text-gray-500">
                Coupon [{c.coupon__code}]:
              </p>
              <p className="text-lg font-bold">${value}</p>
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
          <p className="text-lg font-bold">
            ${(total - coupons_value).toFixed(2)}
          </p>
        </div>
        <Link
          href="checkout"
          className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};
