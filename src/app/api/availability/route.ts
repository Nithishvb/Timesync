import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.userAvailability.findMany();
  return NextResponse.json({
    message: "User availability fetched succesfully",
    data: data,
  });
}