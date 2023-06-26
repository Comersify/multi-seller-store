import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";
import { useGET } from "./utils";

// ads
export const useGetAds = () => {
  const [images, setImages] = useState([]);
  const { handleNotification, trackID } = useStateContext();
  useEffect(() => {
    useGET("ads/", { headers: { "X-Comercify-Visitor": trackID } })
      .then((res) => {
        if (res?.type == "error") handleNotification(res);
        if (res?.type == "success") setImages(res?.data);
      })
      .catch((err) => {
        handleNotification({ type: "erroe", message: err });
      });
  }, []);
  return { images };
};
