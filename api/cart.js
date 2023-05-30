import { useStateContext } from "@/context/contextProvider";
import { useGET, usePOST } from "./utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// cart
export const useCart = () => {
  const [refresh, setRefresh] = useState(false);
  const [products, setproducts] = useState([]);
  const { handleNotification } = useStateContext();

  useEffect(() => {
    async function getCart(){
      return await useGET(`cart/products/`);
    }
    const res = getCart()
    if (res?.type == "error") handleNotification(res);
    if (res?.typ == "success") setproducts(res?.data);
  }, [refresh]);

  const handleDelete = async (id) => {
    const res = await usePOST(`cart/delete-product/`, { productID: id });
    handleNotification(res);
    if (res?.type == "success") setRefresh(!refresh);
  };

  const handleUpdate = async (id, quantity) => {
    const res = await usePOST(`cart/update-products/`, {
      productID: id,
      quantity: quantity,
    });
    handleNotification(res);
    if (res?.type == "success") setRefresh(!refresh);
  };
  return { products, handleUpdate, handleDelete };
};

export const useAddProductToCart = (id) => {
  const [packID, setPackID] = useState();
  const { handleNotification, token } = useStateContext();
  const router = useRouter();

  const handleAddProductToCart = async (e) => {
    e.preventDefault();
    if (!token) {
      router.replace("/login");
      return;
    }
    const res = await usePOST(`cart/add-products/`, {
      productID: id,
      packID: packID,
    });
    handleNotification(res);
  };
  const addPackID = (id) => {
    if (packID == id) setPackID(null);
    else setPackID(id);
  };
  return { handleAddProductToCart, packID, addPackID };
};
