import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

import { fetchFeaturedProducts } from "@/utils/actions";

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList />;

  return (
    <section className='pt-24'>
      <SectionTitle title='featured products' />
      <ProductsGrid products={products} />
    </section>
  );
};

export default FeaturedProducts;
