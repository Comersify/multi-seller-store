import { useStateContext } from "@/context/contextProvider";
import { useGET } from "./utils";
import { useEffect, useState } from "react";


export const useGetOrders = () => {
  const [orders, setOrders] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    async function getOrders(){
      return await useGET("my-orders/");
    }
    const res = getOrders()
    if (res?.type == "error") handleNotification(res);
    if (res?.typ == "success") setOrders(res?.data);
  }, []);
  return { orders };
};