import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/service/api";


/* -------------------- TYPES -------------------- */
export interface Blog {
       id: number;
       title: string;
       category: readonly string[];
       description: string;
       date: string;
       coverImage: string;
       content: string;
     };

/* -------------------- COMPONENT -------------------- */
export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();

  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => {
      if (!id) {
        throw new Error("Blog ID is missing");
      }
      return getBlogById(id);
    },
    enabled: Boolean(id),
  });

  /* -------------------- STATES -------------------- */
  if (isLoading) {
    return <p className="p-6">Loading...</p>;
  }

  if (isError) {
    return <p className="p-6 text-red-500">Failed to load blog</p>;
  }

  if (!blog) {
    return <p className="p-6">Blog not found</p>;
  }

  /* -------------------- UI -------------------- */
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT SIDEBAR */}
        <aside className="lg:col-span-4 space-y-4 order-2 lg:order-1">
          <h2 className="text-lg font-semibold">Latest Articles</h2>

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="p-4 border rounded-xl hover:shadow-md transition bg-white"
            >
              <span className="text-xs text-indigo-600 font-medium">
                FINANCE
              </span>

              <h3 className="font-semibold mt-1 line-clamp-2">
                Future of Fintech
              </h3>

              <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                Exploring how AI and blockchain are reshaping financial services.
              </p>

              <span className="text-xs text-gray-400 mt-2 block">
                2 days ago
              </span>
            </div>
          ))}
        </aside>

        {/* MAIN CONTENT */}
        <main className="lg:col-span-8 space-y-6 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border order-1 lg:order-2">
          {/* HERO IMAGE */}
          <div className="rounded-xl overflow-hidden h-96">
            <img
              src={blog.coverImage || "/placeholder.jpg"}
              alt={blog.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-5">
            {/* META */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="uppercase text-indigo-600 font-medium">
               {blog.category.length > 0
                  ? blog.category.join(", ")
                  : "Uncategorized"}
              </span>

              <span>•</span>

              <span>{new Date(blog.date).toLocaleDateString()}</span>


              <span>•</span>

              <span>5 min read</span>
            </div>

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
              {blog.title}
            </h1>

            {/* SHARE */}
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white w-fit hover:bg-indigo-700"
            >
              Share Article
            </button>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              {blog.description}
            </p>

            {/* ARTICLE BODY */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold
                prose-headings:text-gray-900
                prose-p:text-gray-700
                prose-p:leading-relaxed
                prose-li:text-gray-700"
            >
              {blog.content}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
