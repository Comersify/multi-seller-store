import React, { createContext, useContext, useState } from "react";
import { PushNotification } from "../components/PushNotification";
export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [image, setImage] = useState()
  const [notification, setNotifiction] = useState({
    type: null,
    message: null,
  });

  const handleToken = (data) => {
    localStorage.setItem("refresh", data.refresh);
    localStorage.setItem("exp", data.exp);
    setToken(data?.access);
    setImage(data.image)
    return;
  };

  const [cron, setCron] = useState(false);
  const handleNotification = ({ type, message }) => {
    setNotifiction({ type: type, message: message });
    if (cron) clearTimeout(cron);
    const tim = setTimeout(() => {
      setNotifiction({ type: null, message: null });
    }, 4000);
    setCron(tim);
  };

  function isTokenExpired() {
    const exp = localStorage.getItem("exp");
    const tokenExpiration = new Date(exp).getTime();
    const currentTime = new Date().getTime();
    console.log(currentTime > tokenExpiration)
    return currentTime > tokenExpiration;
}

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        handleNotification,
        token,
        image,
        isTokenExpired,
        handleToken,
      }}
    >
      {children}
      {notification.type && (
        <PushNotification
          type={notification.type}
          message={notification.message}
          onClick={() => setNotifiction({ type: "", message: "" })}
        />
      )}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
