import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  const body = await request.json()
  const project = await prisma.project.create({
    data: { name: body.name },
  })
  return NextResponse.json(project)
}

