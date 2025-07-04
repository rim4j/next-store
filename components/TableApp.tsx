"use client";
import { Link } from "@heroui/link";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Product } from "@prisma/client";

import { IconButton } from "./form/Buttons";
import FormContainer from "./form/FormContainer";

import { formatCurrency } from "@/utils/format";
import { deleteProductAction } from "@/utils/actions";

const TableApp = ({ items }: { items: Product[] }) => {
  return (
    <Table removeWrapper aria-label='Example static collection table'>
      <TableHeader>
        <TableColumn>Product Name</TableColumn>
        <TableColumn>Company</TableColumn>
        <TableColumn>Price</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {items.map((item, i) => {
          return (
            <TableRow key={i}>
              <TableCell>
                <Link
                  className='capitalize underline text-gray-500 tracking-wide'
                  href={`/products/${item.id}`}
                >
                  {item.name}
                </Link>
              </TableCell>
              <TableCell>{item.company}</TableCell>
              <TableCell>{formatCurrency(item.price)}</TableCell>
              <TableCell className='flex items-center gap-x-2'>
                <Link href={`/admin/products/${item.id}/edit`}>
                  <IconButton actionType='edit' />
                </Link>
                <Link href={`/admin/products/${item.id}/edit`}>
                  <DeleteProduct productId={item.id} />
                </Link>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TableApp;

function DeleteProduct({ productId }: { productId: string }) {
  const deleteProduct = deleteProductAction.bind(null, { productId });

  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType='delete' color='danger' />
    </FormContainer>
  );
}
