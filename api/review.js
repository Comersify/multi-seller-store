import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";
import { useGET } from "./utils";

export const useGetCustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    useGET(`app-reviews/`).then((res)=>{
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") setReviews(res?.data);
    });
  }, []);
  return { reviews };
};

export const useGetReviews = (id) => {
  const [reviews, setReviews] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    useGET(`reviews/${id}`).then((res)=> {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") setReviews(res?.data);
    });
  }, []);
  return { reviews };
};
