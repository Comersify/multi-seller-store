import { useEffect } from "react";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    // Check the user's authentication status
    const isAuthenticated = // Your authentication logic to determine if the user is authenticated
      useEffect(() => {
        // If the user is not authenticated, redirect them to the login page
        if (!isAuthenticated) {
          router.replace("/login");
        }
      }, []);

    // Render the wrapped component if the user is authenticated
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
