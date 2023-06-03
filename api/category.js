import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";
import { useGET } from "./utils";

export const useGetCategories = ({filter}) => {
  const [categories, setCategories] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
       useGET(`categories/${filter || ""}`).then((res) =>{
         if (res?.type == "error") handleNotification(res);
         if (res?.type == "success") setCategories(res?.data);
        });
      }, []);
  return { categories };
};