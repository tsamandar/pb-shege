export default defineEventHandler(async (event) => {
  const product = await event.context.prisma.products.findUnique({
    where: {
      id: Number(event.context.params.id)
    }
  });
  return product;
})
