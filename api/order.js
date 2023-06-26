import { useStateContext } from "@/context/contextProvider";
import { useGET, usePOST } from "./utils";
import { useEffect, useState } from "react";

export const useGetOrders = () => {
  const [orders, setOrders] = useState([]);
  const { handleNotification, token, trackID } = useStateContext();
  useEffect(() => {
    useGET("my-orders/", {
      Autho: token.access,
      headers: { "X-Comercify-Visitor": trackID },
    }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") setOrders(res?.data);
    });
  }, []);
  return { orders };
};

export const useCreateOrder = () => {
  const { handleNotification, token, trackID } = useStateContext();
  const submit = (e, data) => {
    e.preventDefault();

    usePOST("order/create/", {
      data: data,
      headers: {
        Authorization: token.access,
        "X-Comercify-Visitor": trackID,
      },
    }).then((res) => {
      if (res?.type == "success") handleNotification(res);
      if (res?.type == "error") handleNotification(res);
    });
  };
  return { submit };
};
