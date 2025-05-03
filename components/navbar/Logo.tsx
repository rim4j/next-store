import { Button } from "@heroui/button";
import Link from "next/link";
import { VscCode } from "react-icons/vsc";

const Logo = () => {
  return (
    <Link href='/'>
      <Button color='primary' variant='shadow'>
        <VscCode className='w-6 h-6' color='white' />
      </Button>
    </Link>
  );
};

export default Logo;
