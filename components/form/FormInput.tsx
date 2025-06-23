import { Input } from "@heroui/input";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

const FormInput = ({
  name,
  type,
  label,
  defaultValue,
  placeholder,
}: FormInputProps) => {
  return (
    <div className='mb-2'>
      <Input
        required
        defaultValue={defaultValue}
        id={name}
        label={label || name}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default FormInput;
