"use client";
import { addToast } from "@heroui/toast";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

const SignOutLink = () => {
  const handleLogout = () => {
    addToast({
      title: "Log Out",
      description: "Logged out successfully",
    });
  };

  return (
    <SignOutButton>
      <Link className='w-full text-left ' href='/' onClick={handleLogout}>
        <p className='text-danger'>logout</p>
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
