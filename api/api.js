import { useGET, usePOST } from "./utils";
import { useState, useEffect } from "react";
import { useStateContext } from "@/context/contextProvider";
import { useRouter } from "next/router";

// orders done


/**
 *
 * @filters {
 * super-deals
 *  id/:id
 *  /
 * }
 */


/**
 *  @filter {
 *  top/
 *  /
 * }
 */






// stores DONE


// account DONE




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
