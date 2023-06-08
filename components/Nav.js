import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  AuthButtons,
  CartButton,
  MobileMenuButtons,
  NotificationButton,
  ProfileButoon,
} from "./shared/Buttons";
import { useRefresh } from "@/api/auth";

const Logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10 p-0.5 rounded-md  bg-gradient-to-r from-[#ff80b5] to-[#9089fc]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
        />
      </svg>
    </div>
  );
};

const DropDownLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block hover:bg-gray-100  px-4 py-2 text-sm text-gray-700"
    >
      {title}
    </Link>
  );
};

const DropDownMenu = ({ Icon, children }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
        document.removeEventListener("click", () => "");
      }
    }

    document.addEventListener("click", (e) => handleClickOutside(e));
  }, []);
  return (
    <div ref={dropdownRef} className="relative ml-3">
      <Icon action={() => setDropdown(!dropdown)} />
      {dropdown && (
        <div
          onClick={() => setDropdown(!dropdown)}
          className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          id="menu"
        >
          {children}
        </div>
      )}
    </div>
  );
};

const MenuLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="text-gray-800 font-bold hover:bg-gradient-to-r from-[#ff80b5] to-[#9089fc] hover:text-white rounded-md px-3 py-2 text-sm"
    >
      {title}
    </Link>
  );
};

const Navigation = () => {
  return (
    <>
      <MenuLink href="/" title="Home" />
      <MenuLink href="/products" title="products" />
      <MenuLink href="/contact-us" title="Contact Us" />
      <MenuLink href="/faqs" title="FAQs" />
    </>
  );
};

export const Nav = () => {
  const { token } = useRefresh();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="bg-gray-50">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/*Mobile menu button */}
          <MobileMenuButtons
            onclick={() => setOpenMenu(!openMenu)}
            open={openMenu}
          />
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Logo />
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Navigation />
              </div>
            </div>
          </div>
          {!token && (
            <div className="flex h-full items-center">
              <AuthButtons />
            </div>
          )}
          {token && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <CartButton acive={true} />
              <DropDownMenu Icon={NotificationButton}>
                <DropDownLink href="/account/orders" title="Your Orders" />
                <DropDownLink href="/account/settings" title="Settings" />
                <DropDownLink href="/sign-out" title="Sign out" />
              </DropDownMenu>
              <DropDownMenu Icon={ProfileButoon}>
                <DropDownLink href="/account/" title="My Wish List" />
                <DropDownLink href="/account/orders" title="Orders" />
                <DropDownLink href="/account/settings" title="Settings" />
                <DropDownLink href="/sign-out" title="Sign out" />
              </DropDownMenu>
            </div>
          )}
        </div>
      </div>
      {openMenu && (
        <div className="space-y-1 px-2 pb-3 pt-2 min-[640px]:hidden">
          <Navigation />
        </div>
      )}
    </nav>
  );
};
