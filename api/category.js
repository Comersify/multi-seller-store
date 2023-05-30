import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";
import { useGET } from "./utils";

export const useGetCategories = ({filter}) => {
  const [categories, setCategories] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    async function getCategories(){
      return useGET(`categories/${filter || ""}`);
    }
    const res = getCategories()
    if (res?.type == "error") handleNotification(res);
    if (res?.typ == "success") setCategories(res?.data);
  }, []);
  return { categories };
};
