import React from "react";
import { Twitter, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black tracking-tighter text-white">
              RAW
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Revolutionizing the way you experience freshness. Pure, cold-pressed, and delivered to your doorstep.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Shop</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Cream Mango</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Dutch Chocolate</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ruby Pomegranate</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Bundles</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-gray-400 mb-6">Get fresh updates and exclusive offers.</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-gray-800 border border-gray-700 rounded-full py-3 px-6 text-white focus:outline-none focus:border-orange-500"
            />
            <button className="absolute right-2 top-2 p-1.5 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
              <Mail size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © 2024 RAW. All rights reserved. Crafted with passion.
      </div>
    </footer>
  );
};

export default Footer;
