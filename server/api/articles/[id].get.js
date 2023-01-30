export default defineEventHandler(async (event) => {
  const article = await event.context.prisma.articles.findUnique({
    where: {
      id: Number(event.context.params.id)
    }
  });
  return article;
})
