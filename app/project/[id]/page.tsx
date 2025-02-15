import { prisma } from "@/lib/prisma"
import { AdList } from "@/components/AdList"
import { CreateAdForm } from "@/components/CreateAdForm"

export default async function ProjectPage({ params }) {
  const project = await prisma.project.findUnique({
    where: { id: params.id },
    include: { ads: true },
  })

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
      <CreateAdForm projectId={project.id} />
      <AdList ads={project.ads} projectId={project.id} />
    </main>
  )
}

