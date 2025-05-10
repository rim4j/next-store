import db from "@/utils/db";

export const fetchFeaturedProducts = async () => {
  return await db.product.findMany({
    where: {
      featured: true,
    },
  });
};

export const fetchAllProducts = async () => {
  return await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
