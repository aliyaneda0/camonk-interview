import { Routes, Route } from "react-router-dom";
import BlogsPage from "@/pages/BlogsPage";
import BlogDetailPage from "@/pages/BlogDetailPage";
import CreateBlogPage from "@/pages/CreateBlogPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<BlogsPage />} />
      <Route path="/blogs/:id" element={<BlogDetailPage />} />
      <Route path="/create" element={<CreateBlogPage />} />
    </Routes>
  );
}
