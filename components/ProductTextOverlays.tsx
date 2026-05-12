"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "@/data/products";

interface ProductTextOverlaysProps {
  product: Product;
}

const ProductTextOverlays: React.FC<ProductTextOverlaysProps> = ({ product }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transforms for each section
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.4, 0.55], [100, 0, -100]);

  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.7, 0.85], [100, 0, -100]);

  const opacity4 = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.85, 1], [100, 0]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-10 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute text-center px-6 max-w-4xl"
        >
          <h1 className="text-7xl md:text-9xl font-black text-white mb-4 drop-shadow-2xl">
            {product.section1.title}
          </h1>
          <p className="text-2xl md:text-4xl font-medium text-white/90">
            {product.section1.subtitle}
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute text-center px-6 max-w-4xl"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6">
            {product.section2.title}
          </h2>
          <p className="text-xl md:text-3xl font-medium text-white/80 leading-tight">
            {product.section2.subtitle}
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute text-center px-6 max-w-4xl"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6">
            {product.section3.title}
          </h2>
          <p className="text-xl md:text-3xl font-medium text-white/80 leading-tight">
            {product.section3.subtitle}
          </p>
        </motion.div>

        {/* Section 4 */}
        <motion.div
          style={{ opacity: opacity4, y: y4 }}
          className="absolute text-center px-6 max-w-4xl"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6">
            {product.section4.title}
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductTextOverlays;
