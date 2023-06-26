import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";
import { useGET } from "./utils";

export const useGetCustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { handleNotification, trackID } = useStateContext();
  useEffect(() => {
    useGET(`app-reviews/`, {
      headers: { "X-Comercify-Visitor": trackID },
    }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") setReviews(res?.data);
    });
  }, []);
  return { reviews };
};

export const useGetReviews = (id) => {
  const [reviews, setReviews] = useState([]);
  const { handleNotification, trackID } = useStateContext();
  useEffect(() => {
    useGET(`reviews/${id}`, {
      headers: { "X-Comercify-Visitor": trackID },
    }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") setReviews(res?.data);
    });
  }, []);
  return { reviews };
};
