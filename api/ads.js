import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";
import { useGET } from "./utils";

// ads
export const useGetAds = () => {
  const [images, setImages] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    useGET("ads/").then((res)=> {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") setImages(res?.data);
    })
  }, []);
  return { images };
};
