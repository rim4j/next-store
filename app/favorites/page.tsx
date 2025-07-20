import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorites } from "@/utils/actions";

const FavoritesPage = async () => {
  const favorites = await fetchUserFavorites();

  if (favorites.length === 0)
    return <SectionTitle title='you have no favorites yet' />;

  return (
    <div>
      <SectionTitle title='Favorites' />
      <ProductsGrid products={favorites.map((item) => item.product)} />
    </div>
  );
};

export default FavoritesPage;
