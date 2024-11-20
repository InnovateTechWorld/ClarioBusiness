import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CTAProps {
  inView: boolean;
}

export function CTA({ inView }: CTAProps) {
  return (
    <div className="relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/10 rounded-full blur-3xl transform rotate-45"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transform transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-200"
            >
              Ready to Transform Your Product Management?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Join Clario Business and make product information accessible, accurate, and impactful.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <Link
                to="/auth/signup"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border border-green-500/20"
              >
                Get Started Now
                <motion.span
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1,
                  }}
                >
                  →
                </motion.span>
              </Link>
              <Link
                to="/auth/signin"
                className="inline-flex items-center px-8 py-3.5 text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-200 hover:from-green-200 hover:to-emerald-100 transition-all duration-300 border border-green-500/10 rounded-full hover:border-green-500/30"
              >
                Sign In
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex-1 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
            <img 
              src="assets/user.jpg"
              alt="Happy User"
              className="rounded-2xl shadow-2xl relative z-10 transform transition-all group-hover:scale-105 duration-500 border border-green-500/20"
            />
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl"></div>
            <div className="absolute -left-4 -top-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}