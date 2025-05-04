"use client";

import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { useTheme } from "next-themes";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const DarkMode = () => {
  const { setTheme, theme } = useTheme();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant='light'>
          {domLoaded && theme === "light" ? (
            <FaRegMoon size={18} />
          ) : (
            <MdOutlineWbSunny size={18} />
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
