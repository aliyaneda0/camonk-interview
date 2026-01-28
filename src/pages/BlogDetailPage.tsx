import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/service/api";

export default function BlogDetailPage() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id!),
    enabled: !!id,
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (!data) return <p>Blog not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-sm text-gray-500">{data.category}</p>
      <p>{data.content}</p>
    </div>
  );
}
