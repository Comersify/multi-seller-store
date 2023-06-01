import { useRouter } from "next/router";
import { useGET, usePOST } from "./utils";
import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";

export const refreshToken = async (data) => {
  const res = await usePOST("refresh/", { data: data });
  return res;
};

export const useRefresh = () => {
  const { handleToken, handleNotification, token } = useStateContext();
  let access;
  useEffect(() => {
    if (typeof window !== "undefined") {
      access = localStorage.getItem("refresh");
    }
    if (access) {
      refreshToken({ refresh: access }).then((data) => {
        if (data?.type == "success") {
          handleToken(data);
        } else {
          if (data?.type == "error") handleNotification(data);
        }
      });
    }
  }, []);
  return {token}
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
  const { handleNotification, token } = useStateContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    usePOST("account/update/", { data: settings, token: token })
      .then((res) => {
        if (res?.type == "error") handleNotification(res);
        if (res?.type == "success") handleNotification(res);
      })
      .catch(() => {});
  };
  useEffect(() => {
    useGET("account/info/", { token: token }).then((res) => {
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
  }, []);
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
      console.log(res);
      if (res.type == "error") handleNotification(res);
      if (res.type == "success") {
        router.replace("/login");
        handleNotification(res);
      }
    });
  };
  return { handleSubmit, form, setForm };
};
