import { useGET, usePOST } from "./utils";
/**
 * @Todo
 *
 */

// shipping info done
export const getMyAdresse = () => {
  const res = useGET(`shipping-info/`);
  return res;
};

export const createAddress = (data) => {
  const res = usePOST(`shipping-info/create/`, data);
  return res;
};

// app reviews done
