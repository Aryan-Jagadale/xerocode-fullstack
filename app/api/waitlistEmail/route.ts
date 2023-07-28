import prisma from "@/app/libs/prismadb";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

 

  const { email } = body;

  if (!email) {
    throw new NextResponse("Missing info", { status: 400 });
  }

  const checkEmail = await prisma.wailtListEmail.findUnique({
    where: {
      email: email,
    },
  });

  if (checkEmail) {
    throw new NextResponse("Already in Waitlist", { status: 500 });
  }

  const newEmail = await prisma.wailtListEmail.create({
    data: {
      email,
    },
  });

  return NextResponse.json(newEmail);
}

export async function GET(request: Request) {

  const wailtList  = await prisma.wailtListEmail.findMany();

  console.log(wailtList);
  


  return NextResponse.json(wailtList);
}




