import Link from "next/link";
import { LeftArrow, RightArrow } from "./Icons";

export const ToggleSideBarButton = ({ open, setOpen }) => {
  return (
    <div className="absolute text-gray-900 top-16 border border-gray-300 hover:border-gray-500 border-l-0 rounded-md rounded-l-none bg-gray-50 -right-8 px-1 p-2">
      <button
        id="toggleSidebar"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center"
      >
        {open ? <LeftArrow /> : <RightArrow />}
      </button>
    </div>
  );
};

export const CartButton = () => {
  return (
    <Link href="/cart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="w-8 mr-1 h-8 rounded-full hover:bg-gray-200 p-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    </Link>
  );
};

export const ProfileButoon = ({ action }) => {
  return (
    <button
      onClick={() => action()}
      type="button"
      className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      id="user-menu-button"
      aria-expanded="false"
      aria-haspopup="true"
    >
      <span className="sr-only">Open user menu</span>
      <img
        className="h-8 w-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </button>
  );
};

export const NotificationButton = () => {
  return (
    <button
      type="button"
      className="rounded-full hover:bg-gray-200 p-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="sr-only">View notifications</span>
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>
    </button>
  );
};

export const MobileMenuButtons = ({ onclick, open }) => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <button
        onClick={() => onclick()}
        type="button"
        id="dropdownBtn"
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        {!open && (
          <svg
            className="block h-6 w-6"
            id="close"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
        {open && (
          <svg
            id="open"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export const AuthButtons = () => {
  return (
    <>
      <Link
        href="login"
        className="hover:bg-gradient-to-r from-[#ff80b5] to-[#9089fc]  hover:text-white text-indigo-400 border border-indigo-400 mr-4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Login
      </Link>
      <Link
        href="signup"
        className="bg-gradient-to-r from-[#ff80b5] to-[#9089fc]  text-white font-bold py-2 px-4 rounded focus:outline-none border border-indigo-400 focus:shadow-outline"
      >
        Sign Up
      </Link>
    </>
  );
};
