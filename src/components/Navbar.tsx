import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/sparkle.css';

interface NavbarProps {
  isNavbarVisible: boolean;
}

export function Navbar({ isNavbarVisible }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isNavbarVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-blur bg-black/30' : ''
      }`}
    >
      <div className="relative">
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"></div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3">
                <motion.img 
                  src="/assets/Clario.png" 
                  alt="Clario Business" 
                  className="h-8 sm:h-9 lg:h-10 w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                />
                <motion.span 
                  className="text-lg sm:text-xl lg:text-2xl font-bold sparkle-text hidden sm:block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Clario Business
                </motion.span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-6 lg:ml-10 flex items-center space-x-4 lg:space-x-8">
                {links.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={link.href}
                      className="text-sm lg:text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-200 hover:from-green-200 hover:to-emerald-100 transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex items-center space-x-4 lg:space-x-6 ml-4 lg:ml-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/auth/signin"
                      className="text-sm lg:text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-200 hover:from-green-200 hover:to-emerald-100 transition-all duration-300"
                    >
                      Sign In
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/auth/signup"
                      className="inline-flex items-center justify-center px-4 lg:px-6 py-2 lg:py-2.5 text-sm lg:text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border border-green-500/20"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-green-400 hover:text-green-300 transition-colors duration-300 p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden mb-4"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-black/50 rounded-xl border border-green-500/10 backdrop-blur-sm">
                  {links.map((link) => (
                    <motion.div
                      key={link.name}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={link.href}
                        className="block px-3 py-2 text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-200 hover:from-green-200 hover:to-emerald-100 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div whileHover={{ scale: 1.02, x: 5 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/auth/signin"
                      className="block px-3 py-2 text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-200 hover:from-green-200 hover:to-emerald-100 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/auth/signup"
                      className="block w-full px-5 py-3 mt-4 text-center font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-green-500/20"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}