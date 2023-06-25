import { useRouter } from "next/router";
import { useGET, usePOST } from "./utils";
import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";


export const useSignupWithProvider = (provider) => {
  const { handleToken, handleNotification } = useStateContext();
  
  const signup = (token) => {
    usePOST("sign-up/" + provider, { data: { token: token.access } }).then((res)=>{
      if (res.type == "error") handleNotification(res)
      if (res.type == "success") handleToken(res.data)
    });
  };
  return { signup };
};

export const useRefresh = () => {
  const { handleToken, handleNotification, user, isTokenExpired } =
    useStateContext();
  const router = useRouter();
  const [laoding, setLoading] = useState(false);
  const data = { refresh: localStorage?.getItem("refreshAdmin") };
  function refresh() {
    if (isTokenExpired() || !user.access) {
      if (data.refresh) {
        usePOST("refresh/", { data: data }).then((res) => {
          if (res.type == "success") {
            handleToken(res);
          } else {
            handleNotification(res);
            router.replace("/login");
          }
        });
      } else {
        router.replace("/login");
      }
    }
  }
  useEffect(() => {
    if (!user.access) {
      setLoading(true);
      refresh();
      setLoading(false);
    }
    setInterval(() => refresh(), 240000);
  }, []);
  return { laoding };
};

export const useSettings = () => {
  const [settings, setSettings] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    image: "",
    oldPassword: "",
    password: "",
    passwordConfermation: "",
  });
  const [refresh, setRefresh] = useState(false);
  const { handleNotification, token } = useStateContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    usePOST("account/update/", { data: settings, token: token.access }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") {
        handleNotification(res);
        setRefresh(!refresh);
      }
    });
  };
  useEffect(() => {
    useGET("account/info/", { token: token.access }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") {
        setSettings({
          ...setSettings,
          firstName: res.data.first_name,
          lastName: res.data.last_name,
          email: res.data.email,
          phoneNumber: res.data.phone_number,
          image: res.data.image,
        });
      }
    });
    return;
  }, [refresh]);
  return { settings, handleSubmit, setSettings };
};

export const useLogin = () => {
  const [auth, setAuth] = useState({ username: "", password: "" });
  const { handleToken, handleNotification, token } = useStateContext();
  const router = useRouter();
  if (token) router.replace("/products");
  const handleSubmit = (e) => {
    e.preventDefault();
    const res = usePOST("login/", { data: auth }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") {
        router.replace("/products");
        handleToken(res);
      }
    });
  };
  return { handleSubmit, setAuth, auth };
};

export const useSignup = () => {
  const router = useRouter();
  const { handleNotification, token } = useStateContext();
  if (token) router.replace("/products");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfermation: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const res = usePOST("signup/", { data: form }).then((res) => {
      if (res.type == "error") handleNotification(res);
      if (res.type == "success") {
        router.replace("/login");
        handleNotification(res);
      }
    });
  };
  return { handleSubmit, form, setForm };
};
