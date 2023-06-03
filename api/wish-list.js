import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";
import { useGET, usePOST } from "./utils";
import { useRouter } from "next/router";

// wish list
export const useWishList = () => {
  const [refresh, setRefresh] = useState(false);
  const [products, setProducts] = useState([]);
  const { handleNotification, token } = useStateContext();

  useEffect(() => {
    useGET(`wish-list/products/`).then((res)=>{
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") setProducts(res?.data);
    });
  }, [refresh]);

  const handleDelete = (id) => {
    usePOST(`wish-list/delete-product/`, {data:{ productID: id }, token:token}).then((res)=>{
      handleNotification(res);
      console.log(res)
      if (res?.type == "success"){
        setRefresh(!refresh);
      } 
    });
  };

  return { products, handleDelete };
};

export const useProductInWishList = (id) => {
  const [added, setAdded] = useState();
  const router = useRouter();

  const { handleNotification, token } = useStateContext();
  

  useEffect(()=>{
    useGET(`wish-list/has-product/${id}`, {token:token}).then((res)=>{
        setAdded(res.data)
    })
  },[])

  
  const handleAddToWishList = () => {
    if (!token) {
      router.replace("/login");
      return;
    }
    if (!added) {
      usePOST(`wish-list/add-product/`, {data:{ product_id: id }, token:token}).then((res)=> {
        handleNotification(res);
      });
    } else {
      usePOST(`wish-list/delete-product/`, {data:{ product_id: id }, token:token}).then((res)=> {
        handleNotification(res);
      });;
    }
    setAdded(!added);
  };
  return { handleAddToWishList, added };
};