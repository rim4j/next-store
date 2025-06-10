"use client";
import { SignOutButton } from "@clerk/nextjs";
import { addToast } from "@heroui/toast";
import Link from "next/link";

const SignOutLink = () => {
  const handleLogout = () => {
    addToast({
      title: "Log Out",
      description: "Logged out successfully",
      color: "success",
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
