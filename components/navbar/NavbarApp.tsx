import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Suspense } from "react";

import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinkDropDown from "./LinkDropDown";
import Logo from "./Logo";
import UserIcon from "./UserIcon";

const NavbarApp = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='start'>
        <Suspense>
          <NavSearch />
        </Suspense>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <CartButton />
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <DarkMode />
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <div className='flex items-center'>
            <LinkDropDown />
            <div className='ml-4'>
              <UserIcon />
            </div>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarApp;
