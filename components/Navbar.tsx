"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/10 backdrop-blur-2xl border-b border-white/10 py-4 shadow-xl" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer group">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:rotate-12 transition-transform duration-300"
          >
            <path
              d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
              fill="url(#gradient)"
              stroke="white"
              strokeWidth="1"
            />
            <defs>
              <linearGradient id="gradient" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F97316" />
                <stop offset="1" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-3xl font-black tracking-tighter text-black">
            RAW
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-white/80 font-medium">
          <a href="#" className="hover:text-white transition-colors">Products</a>
          <a href="#" className="hover:text-white transition-colors">Our Story</a>
          <a href="#" className="hover:text-white transition-colors">Sustainability</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-white hover:scale-110 transition-transform">
            <ShoppingBag size={24} />
          </button>
          <button className="glow-button bg-orange-500 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition-all active:scale-95">
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
