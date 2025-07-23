"use client";

import { useUser } from "@clerk/nextjs";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { useState } from "react";

import FormContainer from "../form/FormContainer";
import TextAreaInput from "../form/TextAreaInput";
import { SubmitButton } from "../form/Buttons";

import RatingInput from "./RatingInput";

import { createReviewAction } from "@/utils/actions";

const SubmitReview = ({ productId }: { productId: string }) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);

  const { user } = useUser();

  return (
    <div>
      <Button
        className='capitalize'
        size='lg'
        onPress={() => setIsReviewFormVisible((prev) => !prev)}
      >
        leave review
      </Button>
      {isReviewFormVisible && (
        <Card className='p-4'>
          <FormContainer action={createReviewAction}>
            {/* <input name='productId' type='hidden' value={productId} />
            <input
              name='authorName'
              type='authorName'
              value={user?.firstName || "user"}
            />
            <input
              name='productId'
              type='authorImageUrl'
              value={user?.imageUrl}
            /> */}
            <RatingInput name='rating' />
            <TextAreaInput
              defaultValue='Outstanding product'
              labelText='feedback'
              name='comment'
            />
            <SubmitButton className='mt-4' />
          </FormContainer>
        </Card>
      )}
    </div>
  );
};

export default SubmitReview;
