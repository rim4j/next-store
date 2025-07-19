"use client";

import { usePathname } from "next/navigation";

import FormContainer from "../form/FormContainer";
import { CardSubmitButton } from "../form/Buttons";

import { toggleFavoriteAction } from "@/utils/actions";

type FavoriteToggleFormProps = {
  favoriteId: string | null;
  productId: string;
};

const FavoriteToggleForm = ({
  favoriteId,
  productId,
}: FavoriteToggleFormProps) => {
  const pathName = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    productId,
    favoriteId,
    pathName,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
};

export default FavoriteToggleForm;
