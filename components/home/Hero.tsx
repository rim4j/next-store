import { Button } from "@heroui/button";
import Link from "next/link";

import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          we are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quia
          est pariatur nihil molestiae fugit atque, velit expedita dignissimos
          eligendi.
        </p>
        <Link href='/products'>
          <Button className='mt-10' color='primary' size='lg'>
            Our Products
          </Button>
        </Link>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
