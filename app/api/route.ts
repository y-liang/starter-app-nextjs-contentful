import { NextResponse } from 'next/server';
import { getEntries } from '../lib/getEntries';

// can be accessed from browser at /api
export async function GET(req: Request) {
  const data = await getEntries();

  return NextResponse.json({ data });
}


