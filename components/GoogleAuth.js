"use client";
import { useSignupWithProvider } from "@/api/auth";
import { useEffect, useRef, useState } from "react";

export function GoogleAuth({
  type = "standard",
  theme = "outline",
  size = "large",
  text,
  shape,
  logoAlignment,
  width,
  locale,
  ...props
}) {
  const { signup } = useSignupWithProvider("google");
  const [isOAuthClientLoaded, setIsOAuthClientLoaded] = useState(false);

  const btnContainerRef = useRef(null);

  const onSuccessRef = useRef(null);
  onSuccessRef.current = (token) => signup(token);

  useEffect(() => {
    const scriptTag = document.createElement("script");

    scriptTag.src = "https://accounts.google.com/gsi/client";
    scriptTag.async = true;
    scriptTag.defer = true;

    scriptTag.onload = () => {
      setIsOAuthClientLoaded(true);
    };

    scriptTag.onerror = () => {
      setIsOAuthClientLoaded(false);
    };

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  useEffect(() => {
    if (!isOAuthClientLoaded) {
      return;
    }

    window.google?.accounts.id.initialize({
      client_id:
        "626908472574-pkrn39o1ded5r8gi2guckphcnpimn4f1.apps.googleusercontent.com",
      scope: "profile email",
      callback: (credentialResponse) => {
        if (!credentialResponse.clientId || !credentialResponse.credential) {
          return;
        }

        onSuccessRef.current(credentialResponse.credential);
      },
      ...props,
    });

    window.google?.accounts.id.renderButton(btnContainerRef.current, {
      type,
      theme,
      size,
      text,
      shape,
      logo_alignment: logoAlignment,
      width,
      locale,
    });
  }, [isOAuthClientLoaded]);

  return (
    <div
      className="flex items-center justify-center mb-4"
      ref={btnContainerRef}
    />
  );
}
