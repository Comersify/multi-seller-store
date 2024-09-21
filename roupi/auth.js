"use client";
import { useRouter } from "next/navigation";
import { useGET, usePOST } from "./utils";
import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";

export const useSignupWithProvider = (provider) => {
  const { handleToken, handleNotification, trackID } = useStateContext();

  const signup = (token) => {
    usePOST("sign-up/" + provider, {
      data: { token: token.access },
      headers: { "X-Comercify-Visitor": trackID },
    }).then((res) => {
      if (res.type == "error") handleNotification(res);
      if (res.type == "success") handleToken(res.data);
    });
  };
  return { signup };
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
  const { handleNotification, token, trackID } = useStateContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    usePOST("account/update/", {
      data: settings,
      headers: {
        Authorization: token.access,
        "X-Comercify-Visitor": trackID,
      },
    }).then((res) => {
      if (res?.type == "error") handleNotification(res);
      if (res?.type == "success") {
        handleNotification(res);
        setRefresh(!refresh);
      }
    });
  };
  useEffect(() => {
    useGET("account/info/", {
      headers: {
        Authorization: token.access,
        "X-Comercify-Visitor": trackID,
      },
    }).then((res) => {
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
  const { handleToken, handleNotification, token, trackID } = useStateContext();
  const router = useRouter();
  if (token) router.replace("/products");
  const handleSubmit = (e) => {
    e.preventDefault();
    const res = usePOST("login/", {
      data: auth,
      headers: { "X-Comercify-Visitor": trackID },
    }).then((res) => {
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
  const { handleNotification, token, trackID } = useStateContext();
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
    const res = usePOST("signup/", {
      data: form,
      headers: { "X-Comercify-Visitor": trackID },
    }).then((res) => {
      if (res.type == "error") handleNotification(res);
      if (res.type == "success") {
        router.replace("/login");
        handleNotification(res);
      }
    });
  };
  return { handleSubmit, form, setForm };
};
