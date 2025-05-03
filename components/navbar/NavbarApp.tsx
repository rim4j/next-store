import { Divider } from "@heroui/divider";

import Container from "../global/Container";
import { ThemeSwitch } from "../theme-switch";

import CartButton from "./CartButton";
import LinkDropDown from "./LinkDropDown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";

const NavbarApp = () => {
  return (
    <>
      <div className=''>
        <Container className='flex sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
          <Logo />
          <NavSearch />
          <div className='flex gap-4 items-center '>
            <CartButton />
            <ThemeSwitch />
            <LinkDropDown />
          </div>
        </Container>
      </div>
      <Divider />
    </>
  );
};

export default NavbarApp;
