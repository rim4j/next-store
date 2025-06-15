import { currentUser } from "@clerk/nextjs/server";
import { LuUser } from "react-icons/lu";
import { Avatar } from "@heroui/avatar";

const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return <Avatar isBordered src={profileImage} />;
  }

  return <LuUser className='w-6 h-6 bg-gray-500 rounded-full text-white' />;
};

export default UserIcon;
