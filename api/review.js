import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";
import { useGET } from "./utils";

export const useGetCustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    const res = useGET(`app-reviews/`);
    if (res?.type == "error") handleNotification(res);
    if (res?.type == "success") setReviews(res?.data);
  }, []);
  return { reviews };
};

export const useGetReviews = (id) => {
  const [reviews, setReviews] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    useGET(`products/${id}/reviews/`).then((res)=> {
      if (res?.type == "error") handleNotification(res);
      if (res?.typ == "success") setReviews(res?.data);
    });
  }, []);
  return { reviews };
};
