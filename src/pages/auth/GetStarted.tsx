import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function GetStarted() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Join Clario Business: Your Gateway to Growth
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Whether you're a brand or retailer, our platform empowers you to showcase and manage your products with ease. Let's get started!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              to="/auth/signup"
              className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Sign Up
            </Link>
            <Link
              to="/auth/signin"
              className="inline-block px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg shadow-md hover:shadow-lg border border-emerald-200 transform hover:scale-105 transition-all duration-200"
            >
              Sign In
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Brand/Manufacturer Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">For Brands & Manufacturers</h3>
              <p className="text-gray-600">Showcase your products to a network of verified retailers and expand your market reach.</p>
            </motion.div>

            {/* Retailer Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">For Retailers</h3>
              <p className="text-gray-600">Discover unique products from verified brands and streamline your sourcing process.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
