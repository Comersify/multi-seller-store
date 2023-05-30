import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStateContext } from "@/context/contextProvider";
import { refreshToken } from "@/api/auth";

const useWithAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { token, handleToken, handleNotification } = useStateContext();
    if (token) return <WrappedComponent {...props} />;

    useEffect(() => {
      let access;
      let data;
      async function refresh(){
        if (typeof window !== "undefined") {
          access = localStorage.getItem("refresh");
          if (access) {
            data = await refreshToken({refresh: access});
            if (data?.type == "success") {
              handleToken(data);
            } else {
              if (data?.type == "error") handleNotification(data);
              router.replace("/login");
            }
          } else {
            router.replace("/login");
          }
      }
      }
      refresh()
    }, []);

    // Render the wrapped component if the user is authenticated
    return token ? <WrappedComponent {...props} /> : null;
  };
};

export default useWithAuth;
