import Link from "next/link"

export function AdList({ ads, projectId }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Ads</h2>
      <ul className="space-y-2">
        {ads.map((ad) => (
          <li key={ad.id} className="border p-4 rounded flex justify-between items-center">
            <span>{ad.name}</span>
            <div>
              <Link href={`/project/${projectId}/ad/${ad.id}`} className="text-blue-500 hover:underline mr-4">
                Edit
              </Link>
              <Link href={`/api/ads/${ad.id}/iframe`} className="text-green-500 hover:underline" target="_blank">
                View iFrame
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

