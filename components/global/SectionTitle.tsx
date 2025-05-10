import { Divider } from "@heroui/divider";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <h2 className='text-3xl font-medium tracking-wider capitalize mb-8'>
        {title}
      </h2>
      <Divider />
    </div>
  );
};

export default SectionTitle;
