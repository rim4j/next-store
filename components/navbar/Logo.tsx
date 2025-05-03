import { Button } from "@heroui/button";
import Link from "next/link";
import { VscCode } from "react-icons/vsc";

const Logo = () => {
  return (
    <Button color='primary' variant='shadow'>
      <Link href='/'>
        <VscCode className='w-6 h-6' color='white' />
      </Link>
    </Button>
  );
};

export default Logo;
