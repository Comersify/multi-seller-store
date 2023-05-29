import React, { createContext, useContext, useState } from "react";
import { PushNotification } from "../components/PushNotification";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [notification, setNotifiction] = useState({
    type: null,
    message: null,
  });

  const handleToken = (data) => {
    localStorage.setItem("refresh", data.refresh);
    setToken(data.access);
    console.log(token);
  };

  const handleNotification = (type, message) => {
    setTimeout(() => {
      setNotifiction({ type: null, message: null });
    }, 2000);
    setNotifiction({ type: type, message: message });
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        handleNotification,
        token,
        handleToken,
      }}
    >
      {children}
      {notification.type && (
        <PushNotification
          type={notification.type}
          message={notification.message}
        />
      )}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
