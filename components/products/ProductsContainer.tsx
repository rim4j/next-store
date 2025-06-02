import { Button } from "@heroui/button";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

import { fetchAllProducts } from "@/utils/actions";

const ProductsContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) => {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <>
      {/* header */}
      <section>
        <div className='flex justify-between items-center'>
          <h4 className='font-medium text-xl'>
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className='flex gap-x-4'>
            <Link href={`products?layout=grid${searchTerm}`}>
              <Button
                color='primary'
                size='sm'
                variant={layout === "grid" ? "solid" : "light"}
              >
                <LuLayoutGrid />
              </Button>
            </Link>
            <Link href={`products?layout=list${searchTerm}`}>
              <Button
                color='primary'
                size='sm'
                variant={layout === "list" ? "solid" : "light"}
              >
                <LuLayoutList />
              </Button>
            </Link>
          </div>
        </div>
        <Divider className='mt-4' />
      </section>
      {/* products */}
      <div>
        {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry no products matched your search ...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
