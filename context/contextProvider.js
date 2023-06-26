import React, { createContext, useContext, useEffect, useState } from "react";
import { PushNotification } from "../components/PushNotification";
import { useInitTracker } from "@/api/tracker";
export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [trackID, setTrackID] = useState();
  const [notification, setNotifiction] = useState({
    type: null,
    message: null,
  });

  useEffect(() => {
    if (localStorage?.getItem("trackID")) {
      setTrackID(localStorage?.getItem("trackID"));
    } else {
      const { tracker } = useInitTracker();
      setTrackID(tracker);
    }
  }, []);

  const handleToken = (data) => {
    localStorage.setItem("refresh", data.refresh);
    localStorage.setItem("exp", data.exp);
    setToken(data);
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
    if (typeof window !== "undefined") {
      const exp = localStorage.getItem("exp");
      const tokenExpiration = new Date(exp * 1000).getTime();
      const currentTime = new Date().getTime();
      return currentTime > tokenExpiration;
    }
  }

  return (
    <StateContext.Provider
      value={{
        handleNotification,
        token,
        trackID,
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
