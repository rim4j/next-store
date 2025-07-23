"use client";
import { Select, SelectItem } from "@heroui/select";

const RatingInput = ({
  name,
  labelText,
}: {
  name: string;
  labelText?: string;
}) => {
  const numbers = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;

    return value.toString();
  }).reverse();

  return (
    <div className='mb-2 max-w-xs'>
      <Select
        isRequired
        className='max-w-xs'
        defaultSelectedKeys={numbers[0]}
        label={labelText || name}
        name={name}
      >
        {numbers.map((item) => {
          return (
            <SelectItem key={item} textValue={item}>
              {item}
            </SelectItem>
          );
        })}
      </Select>
    </div>
  );
};

export default RatingInput;
