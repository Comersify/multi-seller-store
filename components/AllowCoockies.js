("use client");
import Link from "next/link";
import { useRef } from "react";

export const AllowCockies = () => {
  const cockiesRef = useRef(null);
  const handleAccept = (e) => {
    e.preventDefault();
    localStorage.setItem("accept-cockies", 1);
    cockiesRef.current.remove();
  };
  return (
    <div
      ref={cockiesRef}
      className="p-10 border-blue-200 m-2 z-30  fixed bg-gray-100 border rounded-t-md bottom-0"
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
