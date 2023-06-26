import { URL as API_URL } from "@/urls";

export const useGET = async (url, conf) => {
  const get = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...conf?.headers,
    },
  };
  const myUrl = new URL(`${API_URL}/${url}`);
  myUrl.search = new URLSearchParams({
    ...conf?.data,
    offset: conf?.offset,
  }).toString();
  const results = await fetch(myUrl, get)
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
      ...conf?.headers,
    },
    body: "",
  };
  if (conf?.data?.image && typeof conf?.data?.image == "object") {
    delete post.headers["Content-Type"];
    const formData = new FormData();
    formData.append("file", conf.data.image);
    delete conf.data.image;
    formData.append("json_data", JSON.stringify(conf?.data));
    post.body = formData;
  } else {
    post.body = JSON.stringify(conf?.data);
  }

  const results = await fetch(`${API_URL}/${url}`, post)
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
