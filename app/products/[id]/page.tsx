import Image from "next/image";

import AddToCart from "@/components/single-product/AddToCart";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ProductRating from "@/components/single-product/ProductRating";
import { fetchSingleProduct } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import ShareButton from "@/components/single-product/ShareButton";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = await fetchSingleProduct(id);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={product.name} />

      <div className='mt-6 grid gap-y-6 lg:grid-cols-2 lg:gap-x-16'>
        <div className='relative h-full'>
          <Image
            fill
            priority
            alt={name}
            className='w-full rounded object-cover'
            sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw'
            src={image}
          />
        </div>
        <div>
          <div className='flex gap-x-8 items-center '>
            <h1 className='capitalize text-xl font-bold '>{name}</h1>
            <div className='flex  items-center gap-x-2'>
              <FavoriteToggleButton productId={product.id} />
              <ShareButton name={product.name} productId={product.id} />
            </div>
          </div>
          <ProductRating productId={id} />
          <h4 className='text-xl mt-2'>{company}</h4>
          <p className='mt-3 text-medium bg-muted inline-block p-2 rounded'>
            {dollarsAmount}
          </p>
          <p className='mt-6 leading-8 text-muted-foreground'>{description}</p>
          <AddToCart productId={id} />
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
