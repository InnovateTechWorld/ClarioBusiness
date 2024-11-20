import React from 'react';
import { Database, Linkedin, Twitter, Instagram, ChevronRight } from 'lucide-react';

export function Footer() {
  return (
    <div className="relative">
      {/* Subtle brand logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Database className="w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center group">
              <Database className="h-8 w-8 text-blue-500 transform transition-transform group-hover:rotate-12" />
              <span className="ml-2 text-xl font-bold text-white">Clario Business</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering African brands with reliable product information management solutions. Building trust through transparency and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest features and releases.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Clario Business. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}