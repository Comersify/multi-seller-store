const BASE_URL = "http://127.0.0.1/api";

export const useGET = async (url) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const results = await fetch(`${BASE_URL}/${url}`, options)
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

export const usePOST = async (url, data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      body: JSON.stringify(data),
    },
  };

  const results = await fetch(`${BASE_URL}/${url}`, options)
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
