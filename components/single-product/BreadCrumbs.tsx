import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumbs = ({ name }: { name: string }) => {
  return (
    <div>
      <ul className='flex items-center'>
        <li>
          <Link className='capitalize text-lg px-2  text-gray-500' href='/'>
            Home
          </Link>
        </li>
        <li>
          <span>
            <IoIosArrowForward />
          </span>
        </li>
        <li>
          <Link
            className='capitalize text-lg px-2  text-gray-500 '
            href='/products'
          >
            Products
          </Link>
        </li>
        <li>
          <span>
            <IoIosArrowForward />
          </span>
        </li>
        <li>
          <p className='capitalize text-lg px-2 '>{name}</p>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
