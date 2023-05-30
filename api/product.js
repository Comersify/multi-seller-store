import { useEffect, useState } from "react";
import { useGET } from "./utils";
import { useStateContext } from "@/context/contextProvider";

export const useGetProducts = ({ params, filter }) => {
  const [products, setProducts] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    async function getProducts (){
      return await useGET(`products/${filter || ""}`, params);
    }
    const res = getProducts()
    if (res?.type == "error") handleNotification(res);
    if (res?.typ == "success") setProducts(res?.data);
  }, []);
  return { products };
};