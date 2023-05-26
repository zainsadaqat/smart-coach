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
  const body = await request.json();
  console.log('Event Body: ', body);
  const { event_type, date, time, location, details } = body;
  try {
    const createdEvent = await prisma.roster.create({
      data: {
        // @ts-ignore
        event_type,
        date,
        time,
        location,
        details,
      },
    });
    return NextResponse.json(createdEvent);
  } catch (error) {
    console.error('Error creating Event:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
