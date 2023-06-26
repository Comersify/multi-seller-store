import { useEffect } from "react";
import { useGET } from "./utils";
import { useStateContext } from "@/context/contextProvider";

export const useInitTracker = () => {
  const { setTrackID } = useStateContext();

  useEffect(() => {
    if (localStorage?.getItem("trackID")) {
      setTrackID(localStorage?.getItem("trackID"));
    }
    if (localStorage?.getItem("accept-cockies") == 1) {
      useGET("tarcker/init/").then((res) => {
        if (res.type == "success") setTrackID(res.data);
      });
    }
    if (localStorage?.getItem("accept-cockies") == 0) {
      setTrackID("0&0");
    }
  }, []);

  return { tracker };
};
