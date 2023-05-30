import { useStateContext } from "@/context/contextProvider";
import { useState } from "react";
import { useGET } from "./utils";

// coupon
export const useGetCouponValue = () => {
  const [coupon, setCoupon] = useState("");
  const [values, setValues] = useState(0);
  const [coupons, setCoupons] = useState([{ code: null, value: null }]);
  const { handleNotification } = useStateContext();

  const handleApply = async (e) => {
    e.preventDefault();
    if (coupon == "") {
      handleNotification({ type: "error", message: "Coupon Code is missing " });
      return;
    }
    const res = await useGET(`coupon/${coupon}/`);
    if (res?.type == "error") handleNotification(res);
    if (res?.type == "success") {
      const found = coupons.filter((coupon) => coupon.code == res?.data?.code);
      if (found.length > 0) {
        handleNotification({
          type: "error",
          message: "This coupon already used",
        });
      }
      if (found.length == 0) {
        setValues(values + res?.data?.value);
        setCoupons([...coupons, res.data]);
      }
    }
  };
  return { setCoupon, coupon, handleApply, coupons, values };
};
