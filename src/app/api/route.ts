import { NextResponse } from "next/server"

var rooms = [{"roomId": 1234}]

export async function GET(){
  return NextResponse.json({rooms})
}

interface Room {
  roomId: number;
}

interface PostRequest {
  body: any;
}

var rooms: Room[] = [{"roomId": 1234}];

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  rooms.push(body);
  return NextResponse.json({rooms});
}