import { useGET, usePOST } from "./utils";
import { useState, useEffect } from "react";
import { useStateContext } from "@/context/contextProvider";
import { useRouter } from "next/router";

// orders done
export const createOrder = (data) => {
  const res = usePOST("products/create/", data);
  return res;
};

/**
 *
 * @filters {
 * super-deals
 *  id/
 *  /
 * }
 */

export const useGetProducts = ({ params, filter }) => {
  const [products, setProducts] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    const res = useGET(`products/${filter || ""}`, params);
    if (res?.type == "error") handleNotification(res);
    if (res?.typ == "success") setProducts(res?.data);
  }, []);
  return { products };
};

/**
 *  @filter {
 *  top/
 *  /
 * }
 */

export const useGetCategories = (filter) => {
  const [categories, setCategories] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    const res = useGET(`categories/${filter || ""}`);
    if (res?.type == "error") handleNotification(res);
    if (res?.typ == "success") setCategories(res?.data);
  }, []);
  return { categories };
};

export const getReviews = (id) => {
  const res = useGET(`products/${id}/reviews/`);
  return res;
};

// cart
export const useCart = () => {
  const [refresh, setRefresh] = useState(false);
  const [products, setproducts] = useState([]);
  const { handleNotification } = useStateContext();

  useEffect(() => {
    const res = useGET(`cart/products/`);
    if (res?.type == "error") handleNotification(res);
    if (res?.typ == "success") setproducts(res?.data);
  }, [refresh]);

  const handleDelete = (id) => {
    const res = usePOST(`cart/delete-product/`, { productID: id });
    handleNotification(res);
    setRefresh(!refresh);
  };

  const handleUpdate = (id, quantity) => {
    const res = usePOST(`cart/update-products/`, {
      productID: id,
      quantity: quantity,
    });
    handleNotification(res);
    setRefresh(!refresh);
  };
  return { products, handleUpdate, handleDelete };
};

export const addProductToCart = (id) => {
  const res = usePOST(`cart/add-products/`, { productID: id });
  return res;
};

// wish list
export const getWishListDetails = (id) => {
  const res = useGET(`wish-list/${id}/products/`);
  return res;
};

export const addProductToWishList = (id) => {
  const res = usePOST(`wish-list/${id}/add-products/`, { productID: id });
  return res;
};

export const deleteProductFromWishList = (id) => {
  const res = usePOST(`wish-list/${id}/delete-products/`, { productID: id });
  return res;
};

// coupon
export const useGetCouponValue = () => {
  const [coupon, setCoupon] = useState("");
  const [values, setValues] = useState(0);
  const [coupons, setCoupons] = useState([{ code: "SJPPJD", value: 20 }]);
  const { handleNotification } = useStateContext();

  const handleApply = (e) => {
    e.preventDefault();
    if (coupon == "") {
      handleNotification({ type: "error", message: "Coupon Code is missing " });
      return;
    }
    const res = useGET(`coupon/${coupon}/`);
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

// stores DONE
export const useGetStores = ({ filter }) => {
  const [stores, setStores] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    const res = useGET(`stores/${filter}`);
    if (res?.type == "error") handleNotification(res);
    if (res?.type == "success") setStores(res?.data);
  }, []);
  return { stores };
};

// account DONE
export const useSettings = () => {
  const [settings, setSettings] = useState({
    firstName: "salah",
    lastName: "saadaoui",
    email: "sad@gmail.com",
    oldPassword: "56565",
    password: "35465465",
    passwordConfermation: "5465465",
  });
  const { handleNotification } = useStateContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const res = usePOST("account/info/", settings);
    if (res?.type == "error") handleNotification(res);
    if (res?.type == "success") handleNotification(res);
  };
  useEffect(() => {
    const res = useGET("account/info/");
    if (res?.type == "error") handleNotification(res);
    if (res?.type == "success") setSettings(res?.data);
  }, []);
  return { settings, handleSubmit, setSettings };
};

export const useLogin = () => {
  const [auth, setAuth] = useState({ username: "", password: "" });
  const { handleToken, handleNotification } = useStateContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = usePOST("login/", auth);
    if (res.type == "error") handleNotification(res);
    if (res.type == "success") handleToken(res);
  };
  return { handleSubmit, setAuth, auth };
};
export const useSignup = () => {
  const router = useRouter();
  const { handleNotification } = useStateContext();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfermation: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const res = usePOST("signup/", form);
    if (res.type == "error") handleNotification(res);
    if (res.type == "success") {
      router.redirect("/login");
    }
  };
  return { handleSubmit, form, setForm };
};

export const refreshToken = (data) => {
  const res = usePOST("refresh/", data);
  return res;
};
// shipping info done
export const getMyAdresse = () => {
  const res = useGET(`shipping-info/`);
  return res;
};

export const createAddress = (data) => {
  const res = usePOST(`shipping-info/create/`, data);
  return res;
};

// app reviews done
export const useGetCustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    const res = useGET(`app-reviews/`);
    if (res?.type == "error") handleNotification(res);
    if (res?.type == "success") setReviews(res?.data);
  }, []);
  return { reviews };
};

// ads
export const useGetAds = () => {
  const [images, setImages] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    const res = useGET("ads/");
    console.log(res);
    if (res?.type == "error") handleNotification(res);
    if (res?.type == "success") setImages(res?.data);
  }, []);
  return { images };
};
