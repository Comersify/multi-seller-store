import { useEffect, useState } from "react";
import { useGET } from "./utils";
import { useStateContext } from "@/context/contextProvider";

export const useGetProducts = ({ params, filter }) => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(1);
  const [loading, setLoading] = useState(true);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    setLoading(true);
    console.log(loading);
    useGET(`products/${filter || ""}`, {
      data: params,
      offset: offset,
    }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") {
        setProducts(res?.data);
        setOffset(1);
      }
      setLoading(false);
    });
    console.log(loading);
  }, [params]);

  useEffect(() => {
    setLoading(true);
    useGET(`products/${filter || ""}`, {
      data: params,
      offset: offset,
    }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") {
        if (offset > 1) {
          setProducts((p) => [...p, ...res?.data]);
        } else {
          setProducts(res?.data);
        }
      }
      setLoading(false);
    });
  }, [offset]);
  return { products, setOffset, loading };
};
