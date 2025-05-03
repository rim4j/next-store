import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { LuShoppingCart } from "react-icons/lu";
import { Badge } from "@heroui/badge";

const CartButton = () => {
  const numInCart = 9;

  return (
    <>
      <Link className='flex justify-center items-center relative' href='/cart'>
        <Button>
          <Badge
            color='primary'
            content={numInCart}
            placement='top-right'
            showOutline={false}
            size='sm'
          >
            <LuShoppingCart size='24' />
          </Badge>
        </Button>
      </Link>
    </>
  );
};

export default CartButton;
