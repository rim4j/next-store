"use client";

import { useState } from "react";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";

import FormContainer from "./FormContainer";
import { SubmitButton } from "./Buttons";
import ImageInput from "./ImageInput";

import { type actionFunction } from "@/utils/types";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};
const ImageInputContainer = (props: ImageInputContainerProps) => {
  const { image, action, name, text } = props;
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);

  return (
    <div className='mb-8'>
      <Image
        alt={name}
        className='rounded object-cover mb-4 w-[200px] h-[200px]'
        height={200}
        src={image}
        width={200}
      />
      <Button
        size='sm'
        variant='flat'
        onPress={() => setIsUpdateVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateVisible && (
        <div className='max-w-md mt-4'>
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size='sm' text={text} />
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ImageInputContainer;
