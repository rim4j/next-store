"use client";

import { Button } from "@heroui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { adminLinks } from "@/utils/links";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside>
      {adminLinks.map((item) => {
        const isActivePage = pathname === item.href;
        const variant = isActivePage ? "flat" : "light";
        const color = isActivePage ? "primary" : "default";

        return (
          <Button
            key={item.href}
            className='w-full mb-2 capitalize font-normal text-left'
            color={color}
            href={item.href}
            variant={variant}
          >
            <Link className=' w-full' href={item.href}>
              {item.label}
            </Link>
          </Button>
        );
      })}
    </aside>
  );
};

export default Sidebar;
