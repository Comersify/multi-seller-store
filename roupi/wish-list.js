"use client";

import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";
import { useGET, usePOST } from "./utils";
import { useRouter } from "next/navigation";

// wish list
export const useWishList = () => {
  const [refresh, setRefresh] = useState(false);
  const [products, setProducts] = useState([]);
  const { handleNotification, token } = useStateContext();

  useEffect(() => {
    useGET(`wish-list/products/`, {
      headers: { Authorization: token.access },
    }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") setProducts(res?.data);
    });
  }, [refresh]);

  const handleDelete = (id) => {
    usePOST(`wish-list/delete-product/`, {
      data: { product_id: id },
      headers: { Authorization: token.access },
    }).then((res) => {
      handleNotification(res);
      if (res?.type == "success") {
        setRefresh(!refresh);
      }
    });
  };

  return { products, handleDelete };
};

export const useProductInWishList = (id) => {
  const [added, setAdded] = useState();
  const router = useRouter();

  const { handleNotification, token, trackID } = useStateContext();

  useEffect(() => {
    useGET(`wish-list/has-product/${id}`, {
      headers: {
        Authorization: token.access,
        "X-Comercify-Visitor": trackID,
      },
    }).then((res) => {
      setAdded(res.data);
    });
  }, []);

  const handleAddToWishList = () => {
    if (!token) {
      router.replace("/login");
      return;
    }
    if (!added) {
      usePOST(`wish-list/add-product/`, {
        data: { product_id: id },
        headers: {
          Authorization: token.access,
          "X-Comercify-Visitor": trackID,
        },
      }).then((res) => {
        handleNotification(res);
        if (res.type == "success") setAdded(!added);
      });
    } else {
      usePOST(`wish-list/delete-product/`, {
        data: { product_id: id },
        headers: {
          Authorization: token.access,
          "X-Comercify-Visitor": trackID,
        },
      }).then((res) => {
        handleNotification(res);
        if (res.type == "success") setAdded(!added);
      });
    }
  };
  return { handleAddToWishList, added };
};
