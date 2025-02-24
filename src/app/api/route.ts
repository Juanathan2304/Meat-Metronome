import { NextResponse } from "next/server";

// In-memory storage for generated IDs
const generatedIds = new Set<string>();



function generateId() {
    let id;
    do {
      id = Math.random().toString(36).replace(/[^a-zA-Z]/g, '').substring(0, 6).toUpperCase();
    } while (generatedIds.has(id) || id.length !== 6);
    generatedIds.add(id);
    return id;
  }

export async function POST() {
  const id = generateId();
  console.log(id);
  return NextResponse.json({ id });
}

export async function GET() {
  const id = generateId();
  console.log(id);
  console.log(generatedIds)
  
  return NextResponse.json({ id });
}

interface Room {
  room: string;
  agenda: [
    {
      title: string;
      time: number;
    }
  ];
}