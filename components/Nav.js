import Link from "next/link";
import { useState } from "react";
import {
  AuthButtons,
  CartButton,
  MobileMenuButtons,
  NotificationButton,
  ProfileButoon,
} from "./Button";

const Logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <img
        className="block h-8 w-auto lg:hidden"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
      />
      <img
        className="hidden h-8 w-auto lg:block"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
      />
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

const DropDownMenu = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="relative ml-3">
      <ProfileButoon action={() => setDropdown(!dropdown)} />
      {dropdown && (
        <div
          className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          id="menu"
        >
          <DropDownLink href="/account" title="Your Profile" />
          <DropDownLink href="/account/orders" title="Your Orders" />
          <DropDownLink href="/account/settings" title="Settings" />
          <DropDownLink href="/sign-out" title="Sign out" />
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
      aria-current="page"
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
  const [openMenu, setOpenMenu] = useState(false);
  const [loggedIn, _] = useState(false);
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
          {!loggedIn && (
            <div className="flex h-full items-center">
              <AuthButtons />
            </div>
          )}
          {loggedIn && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <CartButton />
              <NotificationButton />
              <DropDownMenu />
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
