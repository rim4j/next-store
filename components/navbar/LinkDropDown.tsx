"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@heroui/dropdown";
import { LuAlignLeft } from "react-icons/lu";
import { Button } from "@heroui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

import SignOutLink from "./SignOutLink";

import { navLinks } from "@/utils/links";

const LinkDropDown = ({ isAdmin }: { isAdmin: boolean }) => {
  return (
    <>
      <SignedOut>
        <Dropdown>
          <DropdownTrigger>
            <Button variant='flat'>
              <LuAlignLeft size={22} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label='Action event example' variant='flat'>
            <DropdownItem key='login'>
              <SignInButton>
                <button className='w-full  text-left'>
                  <p>Login</p>
                </button>
              </SignInButton>
            </DropdownItem>

            <DropdownItem key='signup'>
              <SignUpButton>
                <button className='w-full  text-left'>
                  <p>Register</p>
                </button>
              </SignUpButton>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </SignedOut>
      <SignedIn>
        <Dropdown>
          <DropdownTrigger>
            <Button variant='flat'>
              <LuAlignLeft size={22} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label='Action event example' variant='flat'>
            <>
              {navLinks.map((item, i) => {
                if (item.label === "dashboard" && !isAdmin) return null;

                return (
                  <DropdownItem
                    key={i}
                    href={item.href}
                    showDivider={navLinks.length - 1 === i ? true : false}
                  >
                    {item.label}
                  </DropdownItem>
                );
              })}
              <DropdownItem key='logout' color='danger'>
                <SignOutLink />
              </DropdownItem>
            </>
          </DropdownMenu>
        </Dropdown>
      </SignedIn>
    </>
  );
};

export default LinkDropDown;
