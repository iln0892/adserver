import { prisma } from "@/lib/prisma"
import { UpdateAdForm } from "@/components/UpdateAdForm"

export default async function EditAdPage({ params }) {
  const ad = await prisma.ad.findUnique({
    where: { id: params.adId },
  })

  if (!ad) {
    return <div>Ad not found</div>
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Ad: {ad.name}</h1>
      <UpdateAdForm ad={ad} />
    </main>
  )
}

