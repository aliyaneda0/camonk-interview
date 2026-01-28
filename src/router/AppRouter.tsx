
import { Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar"

// // import Home from "@/pages/Home"
// import ShowBlogs from "@/pages/ShowBlogs"
// import PostBlog from "@/pages/PostBlog"
import BlogById from "@/pages/BlogById"




import BlogsPage from "@/pages/BlogsPage";
import BlogDetailPage from "@/pages/BlogDetailPage";
import CreateBlogPage from "@/pages/CreateBlogPage";




export default function AppRouter() {
  return (
    
       <>
         <Navbar />
         <div className="pt-20"> {/* offset for sticky navbar */}
           <Routes>
             <Route path="/" element={<BlogsPage />} />
             <Route path="/blogs" element={<BlogsPage />} />
             <Route path="/post" element={<CreateBlogPage />} />
             <Route path="/blog/:id" element={<BlogDetailPage />} />
           </Routes>
         </div>
       </>
    
  );
}
