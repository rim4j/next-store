import { Button } from "@heroui/button";
import { FaHeart } from "react-icons/fa";

const FavoriteToggleButton = () => {
  return (
    <Button className='p-2 cursor-pointer' variant='flat'>
      <FaHeart />
    </Button>
  );
};

export default FavoriteToggleButton;
