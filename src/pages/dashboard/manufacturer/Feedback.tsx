import React from 'react';
import { motion } from 'framer-motion';
import {
  ChatBubbleLeftIcon,
  StarIcon,
  ChartBarIcon,
  ExclamationCircleIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid';

const feedback = [
  {
    id: 1,
    product: 'Premium Hair Oil',
    retailer: 'Beauty Haven',
    rating: 4.5,
    comment:
      'Great product quality and packaging. Customers love the results. Would recommend increasing the bottle size option.',
    date: '2024-01-15',
    status: 'New',
  },
  {
    id: 2,
    product: 'Natural Shampoo',
    retailer: 'Glamour Store',
    rating: 3.5,
    comment:
      'Product performance is good but the packaging could be improved. Some bottles arrived with minor leaks.',
    date: '2024-01-14',
    status: 'In Review',
  },
  {
    id: 3,
    product: 'Hair Treatment Kit',
    retailer: 'Style Studio',
    rating: 5.0,
    comment:
      'Excellent product bundle. The step-by-step guide is very helpful. Customers are seeing great results.',
    date: '2024-01-13',
    status: 'Resolved',
  },
];

const renderStars = (rating: number) => {
  return [...Array(5)].map((_, index) => (
    <StarIcon
      key={index}
      className={`h-5 w-5 ${
        index < rating ? 'text-yellow-400' : 'text-gray-300'
      }`}
    />
  ));
};

export default function Feedback() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Retailer Feedback</h1>
          <p className="text-gray-500">Review and manage retailer feedback and suggestions</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <span>Last 30 Days</span>
          <ChevronDownIcon className="h-5 w-5 ml-2 text-gray-500" />
        </button>
      </div>

      {/* Feedback Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-50 p-4 rounded-lg"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-emerald-800 font-medium">Average Rating</h3>
            <StarIcon className="h-6 w-6 text-emerald-600" />
          </div>
          <p className="text-2xl font-bold text-emerald-900">4.3</p>
          <p className="text-sm text-emerald-600">+0.2 from last month</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 p-4 rounded-lg"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-blue-800 font-medium">Total Feedback</h3>
            <ChatBubbleLeftIcon className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-blue-900">128</p>
          <p className="text-sm text-blue-600">15 new this week</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-purple-50 p-4 rounded-lg"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-purple-800 font-medium">Response Rate</h3>
            <ChartBarIcon className="h-6 w-6 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-purple-900">92%</p>
          <p className="text-sm text-purple-600">Above target</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-yellow-50 p-4 rounded-lg"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-yellow-800 font-medium">Pending Review</h3>
            <ExclamationCircleIcon className="h-6 w-6 text-yellow-600" />
          </div>
          <p className="text-2xl font-bold text-yellow-900">5</p>
          <p className="text-sm text-yellow-600">Requires attention</p>
        </motion.div>
      </div>

      {/* Rating Distribution */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Rating Distribution</h2>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center">
              <span className="w-12 text-sm text-gray-600">{rating} star</span>
              <div className="flex-1 h-4 mx-4 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    rating >= 4
                      ? 'bg-green-500'
                      : rating >= 3
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                  style={{
                    width: `${
                      rating === 5
                        ? '45'
                        : rating === 4
                        ? '30'
                        : rating === 3
                        ? '15'
                        : rating === 2
                        ? '7'
                        : '3'
                    }%`,
                  }}
                ></div>
              </div>
              <span className="w-12 text-sm text-gray-600 text-right">
                {rating === 5
                  ? '45%'
                  : rating === 4
                  ? '30%'
                  : rating === 3
                  ? '15%'
                  : rating === 2
                  ? '7%'
                  : '3%'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Feedback</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {feedback.map((item) => (
            <div key={item.id} className="p-6 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center">
                    <h3 className="text-sm font-medium text-gray-900">{item.product}</h3>
                    <span className="ml-2 text-sm text-gray-500">from {item.retailer}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">{renderStars(item.rating)}</div>
                    <span className="ml-2 text-sm text-gray-500">{item.rating}</span>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    item.status === 'New'
                      ? 'bg-blue-100 text-blue-800'
                      : item.status === 'In Review'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{item.comment}</p>
              <div className="mt-2 text-sm text-gray-500">{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
