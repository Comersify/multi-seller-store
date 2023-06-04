import { useStateContext } from "@/context/contextProvider";
import { useState } from "react";
import { usePOST } from "./utils";

// coupon
export const useGetCouponValue = () => {
  const [coupon, setCoupon] = useState("");
  const [coupons, setCoupons] = useState([]);
  const { handleNotification, token } = useStateContext();

  const handleApply = async (e) => {
    e.preventDefault();
    if (coupon == "") {
      handleNotification({ type: "error", message: "Coupon Code is missing " });
      return;
    }
    const found = coupons.filter((obj) => obj.coupon__code == coupon);
    if (found.length > 0) {
      handleNotification({ type: "error", message: "Coupon already used" });
      setCoupon("");
      return;
    }
    usePOST(`cart/apply-coupon/`, {
      data: { code: coupon },
      token: token,
    }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") {
        setCoupons([...coupons, res?.data]);
        setCoupon("");
      }
    });
  };
  return { setCoupon, coupon, handleApply, coupons, setCoupons };
};
