import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { LuUser } from "react-icons/lu";

const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        alt='profile'
        className='w-6 h-6 rounded-full object-cover'
        height={32}
        src={profileImage}
        width={32}
      />
    );
  }

  return <LuUser className='w-6 h-6 bg-primary rounded-full text-white' />;
};

export default UserIcon;
