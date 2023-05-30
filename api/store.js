import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";
import { useGET } from "./utils";

export const useGetStores = ({ filter }) => {
  const [stores, setStores] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    async function getStores (){
      return await useGET(`stores/${filter}`);
    }
    const res = getStores()
    if (res?.type == "error") handleNotification(res);
    if (res?.type == "success") setStores(res?.data);
  }, []);
  return { stores };
};