"use client";

import React from "react";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { ShoppingCart, Truck, ShieldCheck, RefreshCcw } from "lucide-react";

interface BuyNowProps {
  product: Product;
}

const BuyNow: React.FC<BuyNowProps> = ({ product }) => {
  return (
    <section className="py-32 px-6 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px] bg-white rounded-[100%] -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black mb-6">Get Yours Now.</h2>
          <p className="text-2xl text-gray-500 font-medium">Freshness is just a click away.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[3rem] shadow-2xl flex flex-col justify-between transition-all duration-700"
            style={{ boxShadow: `0 25px 50px -12px ${product.themeColor}33` }} // 33 is ~20% opacity in hex
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-4xl font-black mb-2" style={{ color: product.themeColor }}>{product.name}</h3>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">{product.subName}</p>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-black" style={{ color: product.themeColor }}>{product.buyNowSection.price}</div>
                  <p className="text-gray-400 font-medium">{product.buyNowSection.unit}</p>
                </div>
              </div>

              <div className="space-y-4 mb-12">
                {product.buyNowSection.processingParams.map((param, i) => (
                  <div key={i} className="flex items-center gap-3 text-lg font-bold text-gray-700">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: product.themeColor }} />
                    {param}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-black text-white py-6 rounded-2xl text-xl font-black flex items-center justify-center gap-4 hover:bg-gray-800 transition-colors active:scale-95">
              <ShoppingCart size={24} />
              Add to Cart
            </button>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] flex items-center gap-6"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 flex-shrink-0">
                <Truck size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Fast Delivery</h4>
                <p className="text-gray-500">{product.buyNowSection.deliveryPromise}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] flex items-center gap-6"
            >
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 flex-shrink-0">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Quality Guaranteed</h4>
                <p className="text-gray-500">{product.buyNowSection.returnPolicy}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] flex items-center gap-6"
            >
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 flex-shrink-0">
                <RefreshCcw size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Eco Friendly</h4>
                <p className="text-gray-500">Shipped in insulated eco-friendly coolers to keep freshness intact.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyNow;
