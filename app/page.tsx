"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import ProductTextOverlays from "@/components/ProductTextOverlays";
import ProductDetails from "@/components/ProductDetails";
import BuyNow from "@/components/BuyNow";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = products[currentIndex];

  // Scroll reset on flavor change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <main className="relative min-h-screen">
      {/* Background sync with product theme */}
      <style jsx global>{`
        body {
          background: ${currentProduct.gradient};
        }
      `}</style>

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProduct.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Scrollytelling Section */}
          <section className="relative">
            <ProductBottleScroll product={currentProduct} />
            <ProductTextOverlays product={currentProduct} />
          </section>

          {/* Detailed Content */}
          <ProductDetails product={currentProduct} />
          
          {/* Buy Now Section */}
          <BuyNow product={currentProduct} />

          {/* Next Flavor CTA */}
          <section className="py-20 bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
            <h3 className="text-white/50 text-xl font-bold mb-8 uppercase tracking-[0.3em]">Thirsty for more?</h3>
            <button
              onClick={handleNext}
              className="group relative px-12 py-8 bg-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 text-3xl font-black text-black flex items-center gap-4">
                Explore {products[(currentIndex + 1) % products.length].name}
                <ChevronRight size={32} />
              </span>
              <motion.div
                className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 transition-opacity"
              />
            </button>
          </section>
        </motion.div>
      </AnimatePresence>

      {/* Fixed Navigation Arrows */}
      <div className="fixed top-1/2 left-8 -translate-y-1/2 z-40 hidden xl:block">
        <button
          onClick={handlePrev}
          className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all"
        >
          <ChevronLeft size={32} />
        </button>
      </div>
      <div className="fixed top-1/2 right-8 -translate-y-1/2 z-40 hidden xl:block">
        <button
          onClick={handleNext}
          className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Bottom Flavor Menu */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-4 bg-black/40 backdrop-blur-2xl p-3 rounded-full border border-white/10 shadow-2xl">
          {products.map((product, i) => (
            <button
              key={product.id}
              onClick={() => setCurrentIndex(i)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                currentIndex === i
                  ? "bg-white text-black scale-110 shadow-xl"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {product.name.split(' ')[1] || product.name}
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
