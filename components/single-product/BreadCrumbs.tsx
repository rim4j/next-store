import Link from "next/link";

const BreadCrumbs = ({ name }: { name: string }) => {
  return (
    <div>
      <ul className='flex '>
        <li>
          <Link className='capitalize text-lg px-2' href='/'>
            Home
          </Link>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <Link className='capitalize text-lg px-2' href='/products'>
            Products
          </Link>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <p className='capitalize text-lg px-2 text-gray-500'>{name}</p>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
