import { Product } from "@prisma/client";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import React from "react";
import { Link } from "@heroui/link";

import FavoriteToggleButton from "./FavoriteToggleButton";

import { formatCurrency } from "@/utils/format";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className='pt-12 gap-8 grid md:grid-cols-2 lg:grid-cols-3'>
      {products.map((item) => {
        const { name, price, image } = item;
        const productId = item.id;
        const dollarsAmount = formatCurrency(price);

        return (
          <article key={productId}>
            <Card
              isFooterBlurred
              className='w-full h-[300px] col-span-12 sm:col-span-5'
            >
              <CardHeader className='absolute z-10 top-1 flex-col items-end'>
                <FavoriteToggleButton productId={productId} />
              </CardHeader>
              <CardBody>
                <Link
                  className='z-0 w-full h-full scale-125 overflow-hidden -translate-y-6'
                  href={`/products/${productId}`}
                >
                  <Image
                    isZoomed
                    alt={name}
                    className='object-cover'
                    src={image}
                  />
                </Link>
              </CardBody>
              <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
                <div>
                  <p className='text-black text-md'>{name}</p>
                </div>
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

export default ProductsGrid;
