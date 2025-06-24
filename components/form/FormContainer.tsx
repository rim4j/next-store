"use client";

import { addToast } from "@heroui/toast";
import { useActionState, useEffect } from "react";

import { actionFunction } from "@/utils/types";

const initState = {
  message: "",
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useActionState(action, initState);

  useEffect(() => {
    if (state.message) {
      addToast({
        title: state.message,
      });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
