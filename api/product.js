import { useEffect, useState } from "react";
import { useGET } from "./utils";
import { useStateContext } from "@/context/contextProvider";

export const useGetProducts = ({ params, filter }) => {
  const [products, setProducts] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    useGET(`products/${filter || ""}`, { data: params }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") setProducts((p) => res?.data);
    });
  }, [params]);
  return { products };
};
