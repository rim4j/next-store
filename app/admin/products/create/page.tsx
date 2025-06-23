import { faker } from "@faker-js/faker";

import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import ImageInput from "@/components/form/ImageInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CheckboxInput from "@/components/form/CheckboxInput";
import Buttons from "@/components/form/Buttons";

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
          <PriceInput />
          <ImageInput />
          <CheckboxInput label='checkbox' name='checkbox' />
          <TextAreaInput labelText='text' name='text' />

          <Buttons />
        </form>
      </div>
    </section>
  );
};

export default CreateProductPage;
