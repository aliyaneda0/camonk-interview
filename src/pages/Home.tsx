import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/service/api";
import BlogCard from "@/components/BlogCard";
import BlogDetailPage from "@/pages/BlogDetailPage";

export default function Home() {
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-12 gap-6 p-6">
      
      {/* LEFT PANEL */}
      <div className="col-span-4 space-y-4">
        {blogs.map((blog: any) => (
          <div key={blog.id} onClick={() => setSelectedBlog(blog)}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div className="col-span-8 border rounded-xl bg-white">
        {selectedBlog ? (
          <BlogDetailPage blog={selectedBlog} />
        ) : (
          <p className="p-6 text-gray-500">
            Select a blog to view details
          </p>
        )}
      </div>

    </div>
  );
}
