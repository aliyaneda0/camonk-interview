import { useParams } from "react-router-dom"

export default function BlogById() {
  const { id } = useParams()

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Blog ID: {id}
      </h1>

      {/* later you’ll fetch using TanStack Query */}
      <p className="text-gray-600">
        Blog content will be displayed here.
      </p>
    </div>
  )
}
