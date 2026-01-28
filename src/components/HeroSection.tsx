import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {

     const navigate = useNavigate();

     const handleClick = () => {
      navigate("/blogs");
     };

  return (
    <section className="w-full border-b border-black bg-[#f7f4ed]">
      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div>
          <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight text-black">
            Human <br /> stories & ideas
          </h1>
          <p className="mt-6 text-lg text-gray-800 max-w-md">
            A place to read, write, and deepen your understanding.
          </p>
          <button  onClick={handleClick} className="mt-8 rounded-full bg-black px-8 py-3 text-white text-base hover:opacity-90 transition transform hover:scale-95">
            Start reading
          </button>
        </div>

        {/* Right Illustration Placeholder */}
        <div className="relative hidden md:block">
          <div className="absolute right-0 top-0 h-52 w-52 bg-green-500"></div>
          <div className="absolute right-20 top-10 h-36 w-36 rounded-full bg-green-400"></div>
          <div className="absolute right-10 bottom-0 h-28 w-28 bg-black"></div>
        </div>
      </div>
    </section>
  );
}
