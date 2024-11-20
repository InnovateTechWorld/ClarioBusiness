import React from 'react';
import { motion } from 'framer-motion';
import {
  CurrencyDollarIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

const stats = [
  {
    name: 'Total Revenue',
    value: '$128,450',
    change: '+18.2%',
    changeType: 'positive',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Active Products',
    value: '85',
    change: '+12.5%',
    changeType: 'positive',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Retailer Network',
    value: '234',
    change: '+8.4%',
    changeType: 'positive',
    icon: UserGroupIcon,
  },
  {
    name: 'Market Share',
    value: '24.8%',
    change: '+5.3%',
    changeType: 'positive',
    icon: ChartBarIcon,
  },
];

const topProducts = [
  {
    id: 1,
    name: 'Premium Hair Oil',
    retailCount: 156,
    revenue: '$45,890',
    growth: '+15.3%',
  },
  {
    id: 2,
    name: 'Natural Shampoo',
    retailCount: 134,
    revenue: '$38,750',
    growth: '+12.8%',
  },
  {
    id: 3,
    name: 'Hair Treatment Kit',
    retailCount: 98,
    revenue: '$29,670',
    growth: '+10.5%',
  },
];

const topRegions = [
  {
    id: 1,
    name: 'Lagos, Nigeria',
    retailers: 45,
    revenue: '$58,900',
    growth: '+22.4%',
  },
  {
    id: 2,
    name: 'Nairobi, Kenya',
    retailers: 38,
    revenue: '$45,670',
    growth: '+18.7%',
  },
  {
    id: 3,
    name: 'Accra, Ghana',
    retailers: 32,
    revenue: '$38,450',
    growth: '+15.2%',
  },
];

const recentFeedback = [
  {
    id: 1,
    retailer: "Beauty Haven",
    product: "Premium Hair Oil",
    rating: 5,
    comment: "Excellent product quality and consistent supply.",
    date: "2024-01-15"
  },
  {
    id: 2,
    retailer: "Glamour Store",
    product: "Natural Shampoo",
    rating: 4,
    comment: "Good product, but packaging could be improved.",
    date: "2024-01-14"
  },
  {
    id: 3,
    retailer: "Hair Care Plus",
    product: "Hair Treatment Kit",
    rating: 5,
    comment: "Our customers love the results!",
    date: "2024-01-13"
  }
];

export default function ManufacturerDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Clario Beauty!</h1>
          <p className="text-gray-500">Here's an overview of your product performance.</p>
        </div>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors">
          Launch New Product
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500">{stat.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm"
        >
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Top Performing Products</h2>
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.retailCount} retailers</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{product.revenue}</p>
                    <p className="text-sm text-green-600">{product.growth}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Top Regions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm"
        >
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Top Performing Regions</h2>
            <div className="space-y-4">
              {topRegions.map((region) => (
                <div
                  key={region.id}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-emerald-500 mr-2" />
                    <div>
                      <h3 className="font-medium text-gray-900">{region.name}</h3>
                      <p className="text-sm text-gray-500">{region.retailers} retailers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{region.revenue}</p>
                    <p className="text-sm text-green-600">{region.growth}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recent Feedback */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-white rounded-lg shadow-sm"
        >
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Retailer Feedback</h2>
            <div className="grid gap-4">
              {recentFeedback.map((feedback) => (
                <div
                  key={feedback.id}
                  className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">{feedback.retailer}</h3>
                      <p className="text-sm text-gray-500">{feedback.product}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <ArrowTrendingUpIcon
                          key={i}
                          className={`h-4 w-4 ${
                            i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">{feedback.comment}</p>
                  <p className="text-sm text-gray-400 mt-2">{feedback.date}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
