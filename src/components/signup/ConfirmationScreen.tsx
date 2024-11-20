import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface ConfirmationScreenProps {
  accountType: 'brand' | 'retailer';
}

export default function ConfirmationScreen({ accountType }: ConfirmationScreenProps) {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-2xl mx-auto text-center space-y-8 bg-white rounded-xl p-8 shadow-lg"
    >
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          Welcome to Clario Business!
        </h2>
        <p className="text-lg text-gray-600">
          {accountType === 'brand'
            ? 'Your brand account has been successfully created.'
            : 'Your retailer account has been successfully created.'}
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-6">
        <div className="bg-emerald-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h3>
          <ul className="space-y-3 text-left">
            {accountType === 'brand' ? (
              <>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">📦</span> Add your products to the catalog
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">🎨</span> Customize your brand profile
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">🤝</span> Connect with retailers
                </li>
              </>
            ) : (
              <>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">🔍</span> Browse available brands
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">🏪</span> Set up your store profile
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">📱</span> Start creating orders
                </li>
              </>
            )}
          </ul>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/dashboard')}
          className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
        >
          Go to Dashboard
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
