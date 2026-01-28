import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {
  const [blogId, setBlogId] = useState("")
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleSearch = () => {
    if (!blogId.trim()) return
    navigate(`/blog/${blogId}`)
    setBlogId("")
    setOpen(false)
  }

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[95%] -translate-x-1/2 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
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
              className="w-40 rounded-lg border px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              onClick={handleSearch}
              className="rounded-lg bg-black px-3 py-1 text-sm text-white"
            >
              Go
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setOpen(false)} className="block">Home</Link>
          <Link to="/blogs" onClick={() => setOpen(false)} className="block">Show Blogs</Link>
          <Link to="/post" onClick={() => setOpen(false)} className="block">Post Blog</Link>

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
