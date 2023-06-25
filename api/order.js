import { useStateContext } from "@/context/contextProvider";
import { useGET, usePOST } from "./utils";
import { useEffect, useState } from "react";
import { useRefresh } from "./auth";

export const useGetOrders = () => {
  const [orders, setOrders] = useState([]);
  const { handleNotification, token } = useStateContext();
  useEffect(() => {
    useGET("my-orders/", { token: token.access }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") setOrders(res?.data);
    });
  }, []);
  return { orders };
};

export const useCreateOrder = () => {
  const { handleNotification, token } = useStateContext();
  const submit = (e, data) => {
    e.preventDefault();

    usePOST("order/create/", { data: data, token: token.access }).then((res) => {
      if (res?.type == "success") handleNotification(res);
      if (res?.type == "error") handleNotification(res);
    });
  };
  return { submit };
};
