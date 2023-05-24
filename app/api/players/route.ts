import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fetchPlayers = async () => {
  try {
    const players = await prisma.player.findMany({});
    return players;
  } catch (error: any) {
    throw new Error(error);
  }
};

export async function GET(request: Request) {
  const players = await fetchPlayers();
  return NextResponse.json({ players });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: 'Data has been received!' });
}
