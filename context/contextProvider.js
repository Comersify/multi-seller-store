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
    setToken(res.token);
    return;
  };
  const [cron, setCron] = useState(false);
  const handleNotification = ({ type, message }) => {
    setNotifiction({ type: type, message: message });
    if (cron) clearTimeout(cron);
    const tim = setTimeout(() => {
      setNotifiction({ type: null, message: null });
    }, 10000);
    setCron(tim);
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
          onClick={() => setNotifiction({ type: "", message: "" })}
        />
      )}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
