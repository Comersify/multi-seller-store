import { useEffect, useState } from "react";
import { useGET } from "./utils";
import { useStateContext } from "@/context/contextProvider";

export const useGetProducts = ({ params, filter }) => {
  const [products, setProducts] = useState([]);
  const { handleNotification } = useStateContext();
  const [cron, setCron] = useState()
  useEffect(() => {
    clearTimeout(cron)
    const getProducts = () => {
       useGET(`products/${filter || ""}`, {data: params}).then(
        (res) => {
          if (res?.type == "error") handleNotification(res);
          if (res?.type == "success") setProducts(res?.data);
        }
      );
    }
    if (params){
      const time = setTimeout(()=>{
       getProducts()
       setCron(time)
      }, [1600])
    } else{
      getProducts()
    }
  }, [params]);
  return { products };
};