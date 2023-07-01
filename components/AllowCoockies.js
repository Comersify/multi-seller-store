import { useInitTracker } from "@/roupi/tracker";
import { useStateContext } from "@/context/contextProvider";
import Link from "next/link";
import { useEffect } from "react";

export const AllowCockies = () => {
  "use client";
  useInitTracker();
  const { trackID } = useStateContext();
  const handleAccept = (e) => {
    e.preventDefault();
    localStorage.setItem("accept-cockies", 1);
  };
  useEffect(() => {
    const cockiesWindow = document.getElementById("allow-cockies")
    if (!trackID) cockiesWindow.className = cockiesWindow.className.replace("hidden","")
  },[trackID])
  return (
    <div
      id="allow-cockies"
      className="p-10 border-blue-200 m-2 z-30 fixed hidden bg-gray-100 border rounded-t-md bottom-0"
    >
      <p className="text-black">
        Welcome to our website! We use cookies to enhance your browsing
        experience and provide personalized services. By clicking "Accept," you
        agree to the use of cookies as described in our
        <Link
          className="mx-1 text-blue-600 hover:underline"
          href="/cockie-policy"
        >
          Cookies Policy
        </Link>
        .
      </p>
      <div className="mt-2 flex justify-end">
        <Link
          className="text-blue-700 font-bold px-4 py-2 mx-2 hover:bg-blue-100 rounded-md"
          href="/cockie-policy"
        >
          Learn More
        </Link>
        <button
          className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md"
          onClick={(e) => handleAccept(e)}
        >
          Accept
        </button>
      </div>
    </div>
  );
};
