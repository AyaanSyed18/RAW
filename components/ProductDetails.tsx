"use client";

import React from "react";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <section className="py-32 px-6 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold tracking-[0.2em] text-orange-500 uppercase mb-4">
              Detailed View
            </h3>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              {product.detailsSection.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              {product.detailsSection.description}
            </p>
            
            <div className="grid grid-cols-3 gap-8">
              {product.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-black text-gray-900 mb-1">{stat.val}</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent z-10" />
            <img
              src={`${product.folderPath}/ezgif-frame-${product.frameCount.toString().padStart(3, '0')}.${product.extension}`}
              alt={product.detailsSection.imageAlt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, order: 2 }}
            whileInView={{ opacity: 1, order: 2 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:order-2"
          >
            <h3 className="text-sm font-bold tracking-[0.2em] text-orange-500 uppercase mb-4">
              Our Process
            </h3>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              {product.freshnessSection.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {product.freshnessSection.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, order: 1 }}
            whileInView={{ opacity: 1, order: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:order-1 flex flex-col gap-6"
          >
            {product.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-xl font-bold">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
