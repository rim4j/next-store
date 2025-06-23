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
    <div className='mb-2'>
      <Textarea
        required
        className='leading-loose'
        defaultValue={defaultValue}
        id={name}
        label={name || labelText}
        name={name}
        rows={5}
      />
    </div>
  );
};

export default TextAreaInput;
