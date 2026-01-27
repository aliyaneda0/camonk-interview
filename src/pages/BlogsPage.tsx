import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/service/api";
import BlogCard from "@/components/BlogCard";

export default function BlogsPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <p className="p-6">Loading blogs...</p>;
  if (isError) return <p className="p-6 text-red-500">Failed to load blogs</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">CA Monk Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
