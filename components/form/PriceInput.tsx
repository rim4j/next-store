import { NumberInput } from "@heroui/number-input";

const name = "price";

type FormInputNumberProps = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: FormInputNumberProps) => {
  return (
    <div className='mb-2'>
      <NumberInput
        required
        defaultValue={defaultValue || 100}
        id={name}
        label={name}
        min={0}
        name={name}
        placeholder='0.00'
        startContent={
          <div className='pointer-events-none flex items-center'>
            <span className='text-default-400 text-small'>$</span>
          </div>
        }
        type='number'
      />
    </div>
  );
};

export default PriceInput;
