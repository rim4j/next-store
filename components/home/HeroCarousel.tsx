import Image from "next/image";

import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";

const imagess = [
  { url: hero1 },
  { url: hero2 },
  { url: hero3 },
  { url: hero4 },
];

const HeroCarousel = () => {
  return (
    <div className='hidden lg:block'>
      <Image
        alt='alt'
        className='w-full h-[24rem] rounded-xl object-cover'
        src={hero1}
      />
    </div>
  );
};

export default HeroCarousel;
