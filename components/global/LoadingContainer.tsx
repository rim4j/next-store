import { Card } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

function LoadingContainer() {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
}

const LoadingProduct = () => {
  return (
    <Card className='w-full h-[300px] space-y-5 p-4' radius='lg'>
      <Skeleton className='rounded-lg'>
        <div className='h-[300px] rounded-lg bg-default-300' />
      </Skeleton>
      <div className='space-y-3'>
        <Skeleton className='w-3/5 rounded-lg'>
          <div className='h-3 w-3/5 rounded-lg bg-default-200' />
        </Skeleton>
        <Skeleton className='w-4/5 rounded-lg'>
          <div className='h-3 w-4/5 rounded-lg bg-default-200' />
        </Skeleton>
        <Skeleton className='w-2/5 rounded-lg'>
          <div className='h-3 w-2/5 rounded-lg bg-default-300' />
        </Skeleton>
      </div>
    </Card>
  );
};

export default LoadingContainer;
