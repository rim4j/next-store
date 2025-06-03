import { FaStar } from "react-icons/fa";

const ProductRating = () => {
  const rating = 4.2;
  const count = 25;

  const className = `flex gap1 items-center text-medium mt-1 mb-4`;
  const countValue = `(${count}) reviews`;

  return (
    <span className={className}>
      <FaStar className='w-3 h-3' />
      {rating} {countValue}
    </span>
  );
};

export default ProductRating;
