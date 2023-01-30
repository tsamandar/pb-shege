export default defineEventHandler(async (event) => {
  const categories = await event.context.prisma.categories.findMany();
  return categories;
})
