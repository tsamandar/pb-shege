export default defineEventHandler(async (event) => {
  const podcast = await event.context.prisma.podcasts.findUnique({
    where: {
      id: Number(event.context.params.id)
    }
  });
  return podcast;
})
