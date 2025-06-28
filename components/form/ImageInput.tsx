import { Input } from "@heroui/input";
import React from "react";

const ImageInput = () => {
  const name = "image";

  return (
    <div className='mb-2'>
      <Input accept='image/*' id={name} label={name} name={name} type='file' />
    </div>
  );
};

export default ImageInput;
