import { useStateContext } from "@/context/contextProvider";
import { useGET, usePOST } from "./utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// cart
export const useCart = () => {
  const [refresh, setRefresh] = useState(false);
  const [products, setproducts] = useState([]);
  const { handleNotification, token } = useStateContext();

  useEffect(() => {
    useGET(`cart/products/`, { token: token }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") setproducts(res?.data);
      console.log(res?.data);
    });
  }, [refresh]);

  const handleDelete = (id) => {
    usePOST(`cart/delete-product/`, {
      data: { order_id: id },
      token: token,
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
      token: token,
    }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") setRefresh(!refresh);
    });
  };
  return { products, handleUpdate, handleDelete };
};

export const useAddProductToCart = (id) => {
  const [packID, setPackID] = useState(false);
  const { handleNotification, token } = useStateContext();
  const router = useRouter();

  const handleAddProductToCart = async (e, hasPacks) => {
    e.preventDefault();
    if (hasPacks) {
      if (!packID) {
        handleNotification({
          type: "error",
          message: "Please chose your pack",
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
        pack_id: packID,
      },
      token: token,
    };
    const res = await usePOST(`cart/add-product/`, conf);
    handleNotification(res);
  };
  const addPackID = (id) => {
    if (packID == id) setPackID(false);
    else setPackID(id);
  };
  return { handleAddProductToCart, packID, addPackID };
};
