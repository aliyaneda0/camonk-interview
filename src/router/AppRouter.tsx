
import { Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar"
import BlogsPage from "@/pages/BlogsPage";
import BlogDetailPage from "@/pages/BlogDetailPage";
import CreateBlogPage from "@/pages/CreateBlogPage";
import HeroSection from "@/components/HeroSection";
// import BlogById from "@/pages/BlogById";




export default function AppRouter() {
  return (
    
       <>
         <Navbar />
         <div className="pt-20"> {/* offset for sticky navbar */}
           <Routes>
             <Route path="/" element={<HeroSection />} />
             <Route path="/blogs" element={<BlogsPage />} />
             <Route path="/post" element={<CreateBlogPage />} />
             <Route path="/blogs/:id" element={<BlogDetailPage />} />
             <Route path="/blog/:id" element={<BlogDetailPage/>} />
           </Routes>
         </div>
       </>
    
  );
}
