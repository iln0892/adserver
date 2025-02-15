import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function PUT(request: Request, { params }) {
  const formData = await request.formData()
  const name = formData.get("name") as string
  const image = formData.get("image") as File | null

  let imageUrl = null
  if (image) {
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ resource_type: "auto" }, (error, result) => {
          if (error) reject(error)
          else resolve(result)
        })
        .end(buffer)
    })

    imageUrl = (uploadResult as any).secure_url
  }

  const ad = await prisma.ad.update({
    where: { id: params.id },
    data: {
      name,
      ...(imageUrl && { imageUrl }),
    },
  })

  return NextResponse.json(ad)
}

