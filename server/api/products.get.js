export default defineEventHandler(async (event) => {
  const { category } = getQuery(event);
  const products = category 
  ? await event.context.prisma.products.findMany({
    where: {
      id: Number(category)
    }
  }) 
  : await event.context.prisma.products.findMany();
  return products;
})
