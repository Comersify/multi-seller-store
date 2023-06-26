import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";
import { useGET } from "./utils";

export const useGetStores = ({ filter }) => {
  const [stores, setStores] = useState([]);
  const { handleNotification, trackID } = useStateContext();
  useEffect(() => {
    useGET(`stores/${filter}`, {
      headers: { "X-Comercify-Visitor": trackID },
    }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") setStores(res?.data);
    });
  }, []);
  return { stores };
};
