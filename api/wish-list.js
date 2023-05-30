import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";
import { useGET, usePOST } from "./utils";
import { useRouter } from "next/router";

// wish list
export const useWishList = () => {
  const [refresh, setRefresh] = useState(false);
  const [products, setProducts] = useState([]);
  const { handleNotification } = useStateContext();

  useEffect(() => {
    async function getProducts(){
      return await useGET(`wish-list/products/`);
    }
    const res = getProducts()
    if (res?.type == "error") handleNotification(res);
    if (res?.typ == "success") setProducts(res?.data);
  }, [refresh]);

  const handleDelete = (id) => {
    const res = usePOST(`wish-list/delete-product/`, { productID: id });
    if (res?.type == "error") handleNotification(res);
    if (res?.typ == "success") {
      setRefresh(!refresh);
    }
  };

  return { products, handleDelete };
};

export const useProductInWishList = (id) => {
  const [added, setAdded] = useState();
  const router = useRouter();

  const { handleNotification, token } = useStateContext();
  let res;
  const handleAddToWishList = () => {
    if (!token) {
      router.replace("/login");
      return;
    }
    if (!added) {
      res = usePOST(`wish-list/add-product/`, { productID: id });
    } else {
      res = usePOST(`wish-list/delete-product/`, { productID: id });
    }
    handleNotification(res);
    setAdded(!added);
  };
  return { handleAddToWishList, added };
};