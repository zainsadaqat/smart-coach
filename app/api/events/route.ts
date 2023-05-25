import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

const fetchEvents = async () => {
  try {
    const events = await prisma.roster.findMany({});
    return events;
  } catch (error) {
    console.error('Error Message: ', error);
  }
};

export async function GET(request: Request) {
  const events = await fetchEvents();
  console.log('All Events at Backend : ', events);
  return NextResponse.json({ events });
}

export async function POST(request: Request) {
  return;
}
