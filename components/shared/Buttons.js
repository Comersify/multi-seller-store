import Link from "next/link";
import {
  CloseMenuIcon,
  LeftArrow,
  NotificationIcon,
  OpenMenuIcon,
  RightArrow,
  ShoppingCartIcon,
} from "./Icons";

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
      <ShoppingCartIcon />
    </Link>
  );
};

export const ProfileButoon = ({ action }) => {
  return (
    <button
      onClick={() => action()}
      type="button"
      className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <img
        className="h-8 w-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </button>
  );
};

export const NotificationButton = ({ action }) => {
  return (
    <button
      onClick={() => action()}
      type="button"
      className="rounded-full hover:bg-gray-200 p-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <NotificationIcon />
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
        {open ? <OpenMenuIcon /> : <CloseMenuIcon />}
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