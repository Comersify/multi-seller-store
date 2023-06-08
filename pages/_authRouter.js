import { useStateContext } from "@/context/contextProvider";
import { useRefresh } from "@/api/auth";
import { useRouter } from "next/router";

const useWithAuth = (WrappedComponent) => {
  return (props) => {
    const { token, isTokenExpired } = useStateContext();
    if (isTokenExpired()) {
      useRefresh();
    }
    if (token) return <WrappedComponent {...props} />;
    if (typeof window !== "undefined") {
      const router = useRouter();
      router.push("/login");
      return;
    }
  };
};

export default useWithAuth;
