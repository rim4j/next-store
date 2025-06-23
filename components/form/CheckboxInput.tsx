"use client";

import { Checkbox } from "@heroui/checkbox";

type CheckboxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

const CheckboxInput = ({
  label,
  name,
  defaultChecked = false,
}: CheckboxInputProps) => {
  return (
    <div className='mb-2'>
      <Checkbox defaultChecked={defaultChecked} id={name} name={name}>
        {label}
      </Checkbox>
    </div>
  );
};

export default CheckboxInput;
