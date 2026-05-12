"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { Product } from "@/data/products";

interface ProductBottleScrollProps {
  product: Product;
}

const ProductBottleScroll: React.FC<ProductBottleScrollProps> = ({ product }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, product.frameCount - 1]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];
    setImages([]); // Clear old images
    setIsLoading(true);

    for (let i = 1; i <= product.frameCount; i++) {
      const img = new Image();
      // Format index as 001, 002, etc.
      const formattedIndex = i.toString().padStart(3, '0');
      img.src = `${product.folderPath}/ezgif-frame-${formattedIndex}.${product.extension}`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === product.frameCount) {
          setImages(loadedImages);
          setIsLoading(false);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${img.src}`);
      };
      loadedImages[i - 1] = img;
    }
  }, [product]);

  // Draw to canvas
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context || images.length === 0) return;

      const currentFrame = Math.floor(frameIndex.get());
      const img = images[currentFrame] || images[0];

      if (!img || !img.complete) return;

      // Responsive canvas sizing
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;
      
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);

      // Immersive fit logic with slight downward shift to clear navbar
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height) * 0.85;
      const x = (canvas.width - img.width * scale) / 2;
      const y = ((canvas.height - img.height * scale) / 2) + (canvas.height * 0.05);

      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const unsubscribe = frameIndex.on("change", render);
    render(); // Initial render

    return () => unsubscribe();
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white/20 backdrop-blur-md z-20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mb-4"
              />
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-orange-600 font-bold text-xl tracking-widest uppercase"
              >
                Blending Flavours
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
    </div>
  );
};

export default ProductBottleScroll;
