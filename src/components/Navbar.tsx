import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [blogId, setBlogId] = useState("")
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate()

  const handleSearch = () => {
  const trimmedId = blogId.trim()

  if (!trimmedId) {
    alert("Please enter a blog ID")
    return
  }

  navigate(`/blog/${trimmedId}`)
  setBlogId("")
  
}


  return (
    <nav className="  max-w-[68rem] mx-auto fixed top-4 left-1/2 z-50 w-[95%] -translate-x-1/2 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg">
      <div className=" max-w-[68rem] flex items-center justify-between  py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800 ml-1">
          Blogify
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/blogs" className="nav-link">Show Blogs</Link>
          <Link to="/post" className="nav-link">Post Blog</Link>

          {/* Search */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter blog ID"
              value={blogId}
              onChange={(e) => setBlogId(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-40 rounded-2xl border px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              onClick={handleSearch}
              className="rounded-3xl bg-black  mr-1 px-3 py-1 text-sm text-white"
            >
              Go
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
         <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl md:hidden"
          >
            <GiHamburgerMenu  color = "blue-300" />
          </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-6 py-4 gap-4 space-y-4  animate-slideDown">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
          <Link to="/blogs" onClick={() => setMenuOpen(false)} className="block">Show Blogs</Link>
          <Link to="/post" onClick={() => setMenuOpen(false)} className="block">Post Blog</Link>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Blog ID"
              value={blogId}
              onChange={(e) => setBlogId(e.target.value)}
              className="flex-1 rounded-lg border px-3 py-1 text-sm"
            />
            <button
              onClick={handleSearch}
              className="rounded-lg bg-black px-3 py-1 text-white"
            >
              Go
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
