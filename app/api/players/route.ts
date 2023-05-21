import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  console.log('Body: ', body.playerPosition);
  return NextResponse.json({ message: 'Data has been received!' });
}
