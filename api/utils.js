import { useStateContext } from "@/context/contextProvider";

const BASE_URL = "http://127.0.0.1:8000";

export const useGET = async (url, conf) => {
  const get = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (conf.token) get.headers["Authorization"] =  conf.token
  const results = await fetch(`${BASE_URL}/${url}`, get)
    .then((response) => {
      if (!response.ok) {
        return {
          type: "error",
          message: "Network response was not ok",
        };
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return {
        type: "error",
        message: error,
      };
    });
  return results;
};

export const usePOST = async (url, conf) => {
  const post = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(conf.data),
  };
  if (conf.token) post.headers["Authorization"] =  conf.token
  const results =  await fetch(`${BASE_URL}/${url}`, post)
    .then((response) => {
      if (!response.ok) {
        return {
          type: "error",
          message: "Network response was not ok",
        };
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return {
        type: "error",
        message: error,
      };
    });
  return results;
};
