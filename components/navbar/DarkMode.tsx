"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { useTheme } from "next-themes";

import { MoonFilledIcon, SunFilledIcon } from "../icons";
const DarkMode = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant='light'>
          {theme === "light" ? (
            <MoonFilledIcon size={22} />
          ) : (
            <SunFilledIcon size={22} />
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Action event example' variant='flat'>
        <DropdownItem key='light' onPress={() => setTheme("light")}>
          Light
        </DropdownItem>
        <DropdownItem key='dark' onPress={() => setTheme("dark")}>
          Dark
        </DropdownItem>
        <DropdownItem key='system' onPress={() => setTheme("system")}>
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DarkMode;
