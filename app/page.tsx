import { prisma } from "@/lib/prisma"
import { ProjectList } from "@/components/ProjectList"
import { CreateProjectForm } from "@/components/CreateProjectForm"

export default async function Home() {
  const projects = await prisma.project.findMany({
    include: { ads: true },
  })

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Digital Signage Manager</h1>
      <CreateProjectForm />
      <ProjectList projects={projects} />
    </main>
  )
}

