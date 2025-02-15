import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  const body = await request.json()
  const ad = await prisma.ad.create({
    data: { name: body.name, projectId: body.projectId },
  })
  return NextResponse.json(ad)
}

