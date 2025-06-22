import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { faker } from "@faker-js/faker";

const createProductAction = async (formData: FormData) => {
  "use server";
  const name = formData.get("name") as string;

  console.log(name);
};

const CreateProductPage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });

  return (
    <section>
      <h1 className='text-xl font-semibold mb-8 capitalize'>create product</h1>
      <div className='border p-8 rounded-md'>
        <form action={createProductAction}>
          <div className='mb-2'>
            <Input
              defaultValue={name}
              id='name'
              label='Product Name'
              labelPlacement='outside'
              name='name'
              placeholder='Enter product name'
              type='text'
            />
          </div>
          <Button color='primary' type='submit'>
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CreateProductPage;
