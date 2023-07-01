"use client";

import { useStateContext } from "@/context/contextProvider";
import { useGET, usePOST } from "./utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useCart = () => {
  const [refresh, setRefresh] = useState(false);
  const [products, setproducts] = useState([]);
  const { handleNotification, token, trackID } = useStateContext();

  useEffect(() => {
    useGET(`cart/products/`, {
      headers: {
        Authorization: token.access,
        "X-Comercify-Visitor": trackID,
      },
    }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") setproducts(res?.data);
    });
  }, [refresh]);

  const handleDelete = (id) => {
    usePOST(`cart/delete-product/`, {
      data: { order_id: id },
      headers: {
        Authorization: token.access,
        "X-Comercify-Visitor": trackID,
      },
    }).then((res) => {
      handleNotification(res);
      if (res?.type == "success") setRefresh(!refresh);
    });
  };

  const handleUpdate = (id, quantity) => {
    usePOST(`cart/update-product/`, {
      data: {
        order_id: id,
        quantity: quantity,
      },
      headers: {
        Authorization: token.access,
        "X-Comercify-Visitor": trackID,
      },
    }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") setRefresh(!refresh);
    });
  };
  return { products, handleUpdate, handleDelete, setRefresh };
};

export const useAddProductToCart = (id) => {
  const [order, setOrder] = useState(false);
  const { handleNotification, token, trackID } = useStateContext();
  const router = useRouter();

  const handleAddProductToCart = async (e, hasPacks) => {
    e.preventDefault();
    if (hasPacks) {
      if (!order.packID) {
        handleNotification({
          type: "error",
          message: "Please select your Pack",
        });
        return;
      }
      if (!order.shippingID) {
        handleNotification({
          type: "error",
          message: "Please select your province",
        });
        return;
      }
    }
    if (!token) {
      router.replace("/login");
      return;
    }
    const conf = {
      data: {
        product_id: id,
        pack_id: order.packID,
        shipping_id: order.shippingID,
      },
      headers: {
        Authorization: token.access,
        "X-Comercify-Visitor": trackID,
      },
    };
    usePOST(`cart/add-product/`, conf).then((res) => {
      handleNotification(res);
    });
  };
  return { handleAddProductToCart, order, setOrder };
};
