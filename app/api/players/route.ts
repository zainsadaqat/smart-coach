const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handle(req, res) {
  const players = await prisma.player.findMany()
  res.json(players)
}