import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cards = [
    {
      title: 'Products',
      description: 'Manage your product catalog',
      icon: '📦',
      action: () => navigate('/dashboard/products')
    },
    {
      title: 'Orders',
      description: 'View and manage orders',
      icon: '🛍️',
      action: () => navigate('/dashboard/orders')
    },
    {
      title: 'Analytics',
      description: 'Track your performance',
      icon: '📊',
      action: () => navigate('/dashboard/analytics')
    },
    {
      title: 'Settings',
      description: 'Configure your account',
      icon: '⚙️',
      action: () => navigate('/dashboard/settings')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome to Your Dashboard
            </h1>
            <p className="text-xl text-gray-600">
              Manage your business all in one place
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
                onClick={card.action}
              >
                <div className="p-6 space-y-4">
                  <div className="text-4xl">{card.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-8 text-white"
          >
            <h2 className="text-2xl font-bold mb-4">Quick Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-emerald-100">Total Products</p>
                <p className="text-3xl font-bold">0</p>
              </div>
              <div>
                <p className="text-emerald-100">Active Orders</p>
                <p className="text-3xl font-bold">0</p>
              </div>
              <div>
                <p className="text-emerald-100">Total Revenue</p>
                <p className="text-3xl font-bold">$0</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
