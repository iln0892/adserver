import Link from "next/link"

export function ProjectList({ projects }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id} className="border p-4 rounded">
            <Link href={`/project/${project.id}`} className="text-blue-500 hover:underline">
              {project.name}
            </Link>
            <span className="ml-2 text-gray-500">({project.ads.length} ads)</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

