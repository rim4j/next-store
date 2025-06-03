import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";

const BreadCrumbs = ({ name }: { name: string }) => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem className='capitalize text-lg' href='/'>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem className='capitalize text-lg' href='/products'>
        products
      </BreadcrumbItem>
      <BreadcrumbItem className='capitalize text-lg'>{name}</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
