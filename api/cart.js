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
  const [packID, setPackID] = useState(false);
  const { handleNotification, token } = useStateContext();
  const router = useRouter();

  const handleAddProductToCart = async (e, hasPacks) => {
    e.preventDefault();
    if (hasPacks){
      if (!packID){
        handleNotification({type:"error", message:"Please chose your pack"});
        return
      }
    }
    if (!token) {
      router.replace("/login");
      return;
    }
    const conf = {
      data:  {
      product_id: id,
      pack_id: packID,
    }, 
    token: token
    } 
    console.log(conf)
    const res = await usePOST(`cart/add-product/`,conf);
    handleNotification(res);
  };
  const addPackID = (id) => {
    if (packID == id) setPackID(false);
    else setPackID(id);
  };
  return { handleAddProductToCart, packID, addPackID };
};
