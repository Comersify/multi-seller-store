import { useStateContext } from "@/context/contextProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Logout() {
  const { handleToken } = useStateContext();
  const router = useRouter();
  useEffect(() => {
    handleToken({ refresh: null, exp: null, access: null, image: null });
    localStorage.setItem("refresh", null);
    router.replace("/products");
  }, []);
  return <p className="text-gray-900">Logging out</p>;
}
