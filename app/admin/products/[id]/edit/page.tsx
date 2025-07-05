import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { fetchAdminProductDetails, updateProductAction } from "@/utils/actions";

const EditProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = await fetchAdminProductDetails(id);

  const { name, company, description, featured, image, price } = product;

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize '>
        update product
      </h1>
      <div className='border p-8 rounded mb-8'>
        <FormContainer action={updateProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4 '>
            <input name='id' type='hidden' value={id} />
            <FormInput
              defaultValue={name}
              label='product name'
              name='name'
              type='text'
            />
            <FormInput defaultValue={company} name='company' type='text' />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            defaultValue={description}
            labelText='product description'
            name='description'
          />
          <div className='mt-6'>
            <CheckboxInput
              defaultChecked={featured}
              label='featured'
              name='featured'
            />
          </div>
          <SubmitButton className='mt-8' text='update product' />
        </FormContainer>
      </div>
    </section>
  );
};

export default EditProductPage;
