import { useStateContext } from "@/context/contextProvider";

const useWithAuth = (WrappedComponent) => {
  return (props) => {
    const { user } = useStateContext();
    if (user.name) return <WrappedComponent {...props} />;
  };
};

export default useWithAuth;
