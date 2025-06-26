import { faker } from "@faker-js/faker";

import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import PriceInput from "@/components/form/PriceInput";
import ImageInput from "@/components/form/ImageInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CheckboxInput from "@/components/form/CheckboxInput";
import { SubmitButton } from "@/components/form/Buttons";
import { createProductAction } from "@/utils/actions";

const CreateProductPage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });

  return (
    <section>
      <h1 className='text-xl font-semibold mb-8 capitalize'>create product</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={createProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            <FormInput
              defaultValue={name}
              label='Product name'
              name='name'
              type='text'
            />
            <FormInput
              defaultValue={company}
              label='Company'
              name='company'
              type='text'
            />
            <PriceInput />
            <ImageInput />
            <TextAreaInput
              defaultValue={description}
              labelText='Product description'
              name='description'
            />
          </div>
          <div className='mt-6'>
            <CheckboxInput label='Featured' name='featured' />
          </div>
          <SubmitButton className='mt-8' text='Create product' />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProductPage;
