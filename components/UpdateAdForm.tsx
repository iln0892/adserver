"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function UpdateAdForm({ ad }) {
  const [name, setName] = useState(ad.name)
  const [file, setFile] = useState(null)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", name)
    if (file) {
      formData.append("image", file)
    }

    const response = await fetch(`/api/ads/${ad.id}`, {
      method: "PUT",
      body: formData,
    })

    if (response.ok) {
      router.push(`/project/${ad.projectId}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-2">
          Ad Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="image" className="block mb-2">
          Ad Image
        </label>
        <input
          id="image"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2 w-full"
          accept="image/*"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Update Ad
      </button>
    </form>
  )
}

