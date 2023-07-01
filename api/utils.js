import { URL as API_URL } from "@/urls";

export const useGET = async (url, conf) => {
  const get = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",

    },
  };
  if (conf?.headers) get.headers = { ...get.headers, ...conf.headers };

  const myUrl = new URL(`${API_URL}/${url}`);
  myUrl.search = new URLSearchParams({
    ...conf?.params,
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
<<<<<<< HEAD
      ...conf?.headers,
    },
    body: "",
  };
=======
    },
    body: "",
  };
  if (conf?.headers) post.headers = { ...post.headers, ...conf.headers };
>>>>>>> 636e209 (upgrade to next 13)
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
<<<<<<< HEAD

=======
>>>>>>> 636e209 (upgrade to next 13)
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
