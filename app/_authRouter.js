import { useStateContext } from "@/context/contextProvider";
import { useRefresh } from "@/roupi/auth";
import { useRouter } from "next/navigation";

const useWithAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { token, isTokenExpired } = useStateContext();
    if (isTokenExpired()) {
      useRefresh();
    }
    if (token) return <WrappedComponent {...props} />;
  };
};

export default useWithAuth;
