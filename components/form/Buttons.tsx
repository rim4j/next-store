"use client";

import { Button } from "@heroui/button";
import React from "react";
import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";

type btnSize = "lg" | "md" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

const Buttons = ({
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

export default Buttons;
