
const BASE_URL = "http://127.0.0.1:8000";

export const useGET = async (url, conf) => {
  const get = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const myUrl = new URL(`${BASE_URL}/${url}`);
  if (conf?.data){
    myUrl.search = new URLSearchParams(conf?.data).toString();
  }
  if (conf?.token) get.headers["Authorization"] =  conf.token
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
    },
    body: "",
  };
  if (conf?.data?.image && typeof conf?.data?.image == "object" ){
    delete post.headers["Content-Type"] 
    const formData =  new FormData()
    formData.append("file", conf.data.image)
    delete conf.data.image
    formData.append("json_data", JSON.stringify(conf?.data))
    post.body = formData
  } else {
    post.body = JSON.stringify(conf?.data)
  }
  if (conf?.token) post.headers["Authorization"] =  conf.token

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
