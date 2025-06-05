import { Button } from "@heroui/button";

const AddToCart = ({ productId }: { productId: string }) => {
  return (
    <Button className='capitalize mt-8 ' color='primary' size='lg'>
      add to cart
    </Button>
  );
};

export default AddToCart;
