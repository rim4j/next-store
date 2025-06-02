import { Product } from "@prisma/client";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

Link;
import Link from "next/link";

import FavoriteToggleButton from "./FavoriteToggleButton";

import { formatCurrency } from "@/utils/format";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className='mt-12 grid gap-y-8'>
      {products.map((item) => {
        const { name, price, image, company } = item;
        const dollarsAmount = formatCurrency(price);
        const productId = item.id;

        return (
          <article key={productId} className='group relative'>
            <Card
              isFooterBlurred
              className='w-full h-[300px] col-span-12 sm:col-span-5'
            >
              <CardHeader className='absolute z-10 top-1 flex-col items-end'>
                <FavoriteToggleButton />
              </CardHeader>
              <Link href={`/products/${productId}`}>
                <CardBody>
                  <div className='flex '>
                    <Image
                      alt={name}
                      className='object-cover w-80 h-52'
                      src={image}
                    />
                    <div>
                      <p className='text-black text-lg ml-10 font-bold'>
                        {name}
                      </p>
                      <p className='text-black text-md ml-10'>{company}</p>
                    </div>
                  </div>
                </CardBody>
              </Link>

              <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
                <div>
                  <p className='text-black text-md font-bold'>
                    {dollarsAmount}
                  </p>
                </div>
              </CardFooter>
            </Card>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsList;
