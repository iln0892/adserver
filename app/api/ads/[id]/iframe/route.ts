import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request, { params }) {
  const ad = await prisma.ad.findUnique({
    where: { id: params.id },
  })

  if (!ad) {
    return new NextResponse("Ad not found", { status: 404 })
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${ad.name}</title>
        <style>
          body, html { margin: 0; padding: 0; height: 100%; }
          img { max-width: 100%; max-height: 100%; object-fit: contain; }
        </style>
      </head>
      <body>
        ${ad.imageUrl ? `<img src="${ad.imageUrl}" alt="${ad.name}">` : `<p>${ad.name}</p>`}
      </body>
    </html>
  `

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  })
}

