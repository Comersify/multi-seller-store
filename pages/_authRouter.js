import { useStateContext } from "@/context/contextProvider";
import { useRefresh } from "@/api/auth";

const useWithAuth = (WrappedComponent) => {
  return (props) => {
    const { token } = useStateContext();
    if (token) return <WrappedComponent {...props} />;
    useRefresh();
    return token ? <WrappedComponent {...props} /> : null;
  };
};

export default useWithAuth;
