import React from "react";

export default function HeroSection() {

    const handleClick = () => {
    
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
          <button className="mt-8 rounded-full bg-black px-8 py-3 text-white text-base hover:opacity-90 transition">
            Start reading
          </button>
        </div>

        {/* Right Illustration Placeholder */}
        <div className="relative hidden md:block">
          <div className="absolute right-0 top-0 h-64 w-64 bg-green-500"></div>
          <div className="absolute right-20 top-10 h-40 w-40 rounded-full bg-green-400"></div>
          <div className="absolute right-10 bottom-0 h-32 w-32 bg-black" onClick={handleClick}></div>
        </div>
      </div>
    </section>
  );
}
