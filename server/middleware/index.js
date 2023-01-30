import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ datasources: { db: { url: 'mysql://root:767003SA@localhost:3306/bot_shege?schema=public' } } })

export default defineEventHandler((event) => {
  event.context.prisma = prisma
})
