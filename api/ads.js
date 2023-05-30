import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";
import { useGET } from "./utils";

// ads
export const useGetAds = () => {
  const [images, setImages] = useState([]);
  const { handleNotification } = useStateContext();
  useEffect(() => {
    async function getAds(){
      return await useGET("ads/");

    }
    const res = getAds()
    if (res?.type == "error") handleNotification(res);
    if (res?.type == "success") setImages(res?.data);
  }, []);
  return { images };
};
