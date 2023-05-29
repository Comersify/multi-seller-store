import { useGET, usePOST } from "./utils";
import { useState, useEffect } from "react";
import { useStateContext } from "@/context/contextProvider";
// orders done
export const createOrder = (data) => {
  const res = usePOST("products/create/", data);
  return res;
};

// product done
export const useGetProducts = ({ params, filter = undefined }) => {
  const [products, setProducts] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    const res = useGET(`products/${filter || ""}`);
    if (res?.type == "error") handleNotification(res);
    if (res?.typ == "success") setProducts(res?.data);
  }, []);
  return { products };
};

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
export const getCartDetails = (id) => {
  const res = useGET(`cart/${id}/products/`);
  return res;
};

export const addProductToCart = (id) => {
  const res = usePOST(`cart/${id}/add-products/`, { productID: id });
  return res;
};

export const deleteProductFromCart = (id) => {
  const res = usePOST(`cart/${id}/add-products/`, { productID: id });
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
export const getCouponByID = (id) => {
  const res = useGET(`coupons/${id}/`);
  return res;
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

export const login = (data) => {
  const res = usePOST("login/", data);
  return res;
};
export const signup = (data) => {
  const res = usePOST("signup/", data);
  return res;
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
