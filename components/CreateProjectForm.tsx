"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function CreateProjectForm() {
  const [name, setName] = useState("")
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
    if (response.ok) {
      setName("")
      router.refresh()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New project name"
        className="border p-2 mr-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Project
      </button>
    </form>
  )
}

