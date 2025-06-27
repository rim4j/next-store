"use server";

import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import { productSchema, validateWithZodSchema } from "./schemas";

import db from "@/utils/db";

const getAuthUser = async () => {
  const user = await currentUser();

  if (!user) redirect("/");

  return user;
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);

  return {
    message: error instanceof Error ? error.message : "an error occurred",
  };
};

export const fetchFeaturedProducts = async () => {
  return await db.product.findMany({
    where: {
      featured: true,
    },
  });
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  return await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) redirect("/products");

  return product;
};

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    // const name = formData.get("name") as string;
    // const company = formData.get("company") as string;
    // const price = Number(formData.get("price") as string);
    // const image = formData.get("image") as File;
    // const description = formData.get("description") as string;
    // const featured = Boolean(formData.get("featured") as string);

    // await db.product.create({
    //   data: {
    //     name,
    //     company,
    //     price,
    //     image: "/images/product-1.jpg",
    //     description,
    //     featured,
    //     clerkId: user.id,
    //   },
    // });

    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(productSchema, rawData);

    await db.product.create({
      data: {
        ...validatedFields,
        image: "/images/product-3.jpg",
        clerkId: user.id,
      },
    });

    return { message: "product created" };
  } catch (error) {
    console.log(error);

    return renderError(error);
  }
};
