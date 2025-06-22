import { Button } from "@heroui/button";
import { faker } from "@faker-js/faker";

import FormInput from "@/components/form/FormInput";

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
          <FormInput
            defaultValue={name}
            label='Product Name'
            name='name'
            type='text'
          />
          <Button color='primary' type='submit'>
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CreateProductPage;
