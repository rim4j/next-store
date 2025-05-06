import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";

import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinkDropDown from "./LinkDropDown";
import Logo from "./Logo";

const NavbarApp = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='start'>
        <NavSearch />
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <CartButton />
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <DarkMode />
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <LinkDropDown />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarApp;
