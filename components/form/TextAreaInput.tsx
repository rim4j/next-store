import { Textarea } from "@heroui/input";

type TextAreaInputProps = {
  name: string;
  labelText: string;
  defaultValue?: string;
};
const TextAreaInput = ({
  labelText,
  name,
  defaultValue,
}: TextAreaInputProps) => {
  return (
    <div className='mb-2 w-full'>
      <Textarea
        isClearable
        required
        defaultValue={defaultValue}
        id={name}
        label={labelText || name}
        name={name}
        rows={5}
      />
    </div>
  );
};

export default TextAreaInput;
