"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { LuAlignLeft } from "react-icons/lu";

import SignOutLink from "./SignOutLink";

import { navLinks } from "@/utils/links";

const LinkDropDown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant='flat'>
          <LuAlignLeft size={22} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Action event example' variant='flat'>
        <>
          {navLinks.map((item, i) => (
            <>
              <DropdownItem
                key={i}
                href={item.href}
                showDivider={navLinks.length - 1 === i ? true : false}
              >
                {item.label}
              </DropdownItem>
            </>
          ))}
          <DropdownItem key='logout' color='danger'>
            {/* <p className='text-danger'>logout</p> */}
            <SignOutLink />
          </DropdownItem>
        </>
      </DropdownMenu>
    </Dropdown>
  );
};

export default LinkDropDown;
