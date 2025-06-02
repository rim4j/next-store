import db from "@/utils/db";

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
