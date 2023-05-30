import { useRouter } from "next/router";
import { useGET, usePOST } from "./utils";
import { useStateContext } from "@/context/contextProvider";
import { useEffect, useState } from "react";

export const refreshToken = async (data) => {
  const res =  await usePOST("refresh/", {data: data});
  return res;
};

export const useSettings = () => {
  const [settings, setSettings] = useState({
    firstName: "",
    lastName: "",
    email: "",
    oldPassword: "",
    password: "",
    passwordConfermation: "",
  });
  const { handleNotification, token } = useStateContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res =  await usePOST("account/info/", {data:settings, token:token});
    if (res?.type == "error") handleNotification(res);
    if (res?.type == "success") handleNotification(res);
  };
  useEffect( () => {
      useGET("account/info/", {token: token}).then((res)=>{
        if (res?.type == "error") handleNotification(res);
        if (res?.type == "success") setSettings({
          ...settings, 
          firstName: res.data.first_name,
          lastName: res.data.last_name,
          email: res.data.email,
        });
      });    
  }, []);
  return { settings, handleSubmit, setSettings };
};

export const useLogin = () => {
  const [auth, setAuth] = useState({ username: "", password: "" });
  const { handleToken, handleNotification } = useStateContext();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await usePOST("login/", auth)
    if (res?.type == "error") handleNotification(res);
    if (res?.type == "success") {
      router.replace("/products")
      handleToken(res);}
    
  };
  return { handleSubmit, setAuth, auth };
};
export const useSignup = () => {
  const router = useRouter();
  const { handleNotification } = useStateContext();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfermation: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await usePOST("signup/", form);
    if (res.type == "error") handleNotification(res);
    if (res.type == "success") {
      router.replace("/login");
    }
  };
  return { handleSubmit, form, setForm };
};