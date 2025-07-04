"use client";

import { Button } from "@heroui/button";
import React from "react";
import { useFormStatus } from "react-dom";
import { LuTrash2 } from "react-icons/lu";
import { Spinner } from "@heroui/spinner";
import { HiOutlinePencilAlt } from "react-icons/hi";

import { cn } from "@/lib/utils";

type btnSize = "lg" | "md" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export const SubmitButton = ({
  className = "",
  size = "lg",
  text = "submit",
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      className={cn("capitalize", className)}
      color='primary'
      disabled={pending}
      isLoading={pending}
      size={size}
      type='submit'
    >
      {text}
    </Button>
  );
};

type actionType = "edit" | "delete";

type color = "primary" | "secondary" | "danger";
export const IconButton = ({
  actionType,
  color = "primary",
}: {
  actionType: actionType;
  color?: color;
}) => {
  const { pending } = useFormStatus();
  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <HiOutlinePencilAlt size={20} />;
      case "delete":
        return <LuTrash2 size={20} />;
      default:
        const never: never = actionType;

        throw new Error(`invalid action type :${never}`);
    }
  };

  return (
    <Button
      className='p-2 cursor-pointer'
      color={color}
      size='sm'
      type='submit'
      variant='light'
    >
      {pending ? <Spinner color='white' /> : renderIcon()}
    </Button>
  );
};
