import prisma from "@/lib/prisma/index";
import { AvailabilityStatus } from "@/lib/types";
import { parseRequestBody } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const parsedBody = await parseRequestBody(req);
  const structuredAvailability = parsedBody.availability.map(
    (avail: AvailabilityStatus) => {
      return {
        userId: "fjnjnf",
        dayId: avail.id,
      };
    }
  );

  await prisma.userAvailability.createMany({
    data: structuredAvailability,
  });

  await prisma.user.update({
    where: {
      userId: "fjnjnf",
    },
    data: {
      time_zone: parsedBody.timeZone,
    },
  });
  return NextResponse.json({
    message: "User availability created succesfully",
  });
}
