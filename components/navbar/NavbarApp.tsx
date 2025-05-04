import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";

import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinkDropDown from "./LinkDropDown";

const NavbarApp = () => {
  // return (
  //   <Navbar shouldHideOnScroll>
  //     <div className=''>
  //       <Container className='flex sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
  //         <Logo />
  //         <NavSearch />
  //         <div className='flex gap-4 items-center '>
  //           <CartButton />
  //           <DarkMode />
  //           {/* <ThemeSwitch /> */}
  //           <LinkDropDown />
  //         </div>
  //       </Container>
  //     </div>
  //     <Divider />
  //   </Navbar>
  // );
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavSearch />
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <CartButton />
        </NavbarItem>
        <NavbarItem>
          <DarkMode />
        </NavbarItem>
        <NavbarItem>
          <LinkDropDown />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarApp;
