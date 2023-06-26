import { useEffect, useState } from "react";
import { useGET } from "./utils";

export const useInitTracker = () => {
  const [tracker, setTracker] = useState();

  useEffect(() => {
    useGET("tarcker/init/").then((res) => {
      if (res.type == "success") setTracker(res.data);
    });
  }, []);

  return { tracker };
};
