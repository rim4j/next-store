import EmptyList from "@/components/global/EmptyList";
import TableApp from "@/components/TableApp";
import { fetchAdminProducts } from "@/utils/actions";

const AdminProductsPage = async () => {
  const items = await fetchAdminProducts();

  if (items.length === 0) return <EmptyList />;

  return (
    <section>
      <TableApp items={items} />
      <h1 className='capitalize mt-5 text-center'>
        Total products:{items.length}
      </h1>
    </section>
  );
};

export default AdminProductsPage;
