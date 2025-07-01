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

import { formatCurrency } from "@/utils/format";

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
              <TableCell>Active</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TableApp;
