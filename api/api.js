import { GET, POST } from "./utils";

// orders done
export const createOrder = (data) => {
  const res = POST("products/create/", data);
  return res;
};

// product done
export const getProduct = (params) => {
  const res = GET("products/");
  return res;
};

export const topCategories = () => {
  const res = GET("categories/top/");
  return res;
};

export const topDeals = () => {
  const res = GET("products/top-deals/");
  return res;
};

export const getCategories = () => {
  const res = GET("categories/");
  return res;
};

export const getProductDetails = (id) => {
  const res = GET(`products/${id}/`);
  return res;
};

export const getReviews = (id) => {
  const res = GET(`products/${id}/reviews/`);
  return res;
};

// cart
export const getCartDetails = (id) => {
  const res = GET(`cart/${id}/products/`);
  return res;
};

export const addProductToCart = (id) => {
  const res = POST(`cart/${id}/add-products/`,{productID: id});
  return res;
}

export const deleteProductFromCart = (id) => {
  const res = POST(`cart/${id}/add-products/`, {productID: id});
  return res;
};

// wish list
export const getWishListDetails = (id) => {
  const res = GET(`wish-list/${id}/products/`);
  return res;
};

export const addProductToWishList = (id) => {
  const res = POST(`wish-list/${id}/add-products/`,{productID: id});
  return res;
}

export const deleteProductFromWishList = (id) => {
  const res = POST(`wish-list/${id}/add-products/`, {productID: id});
  return res;
};



// coupon
export const getCouponByID = (id) => {
  const res = GET(`coupons/${id}/`);
  return res;
};

// stores DONE
export const topStores = () => {
  const res = GET("stores/top/");
  return res;
};

export const getStoreByID = (id) => {
  const res = GET(`stores/${id}/`);
  return res;
};

// account DONE
export const updateSettings = (data) => {
  const res = POST("account/update/", data);
  return res;
};

export const login = (data) => {
  const res = POST("login/", data);
  return res;
};
export const signup = (data) => {
  const res = POST("signup/", data);
  return res;
};

// shipping info done
export const getMyAdresse = () => {
  const res = GET(`shipping-info/`);
  return res;
};

export const createAddress = (data) => {
  const res = POST(`shipping-info/create/`, data);
  return res;
};

// app reviews done
export const getCustomerReviews = () => {
  const res = GET(`app-reviews/`);
  return res;
};

// ads
export const getAds = () => {
  const res = GET(`ads/`);
  return res;
};
