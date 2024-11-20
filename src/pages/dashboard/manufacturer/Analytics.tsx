import React from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid';

const performanceData = [
  {
    id: 1,
    product: 'Premium Hair Oil',
    sales: 1250,
    revenue: '$112,500',
    growth: '+15%',
    retailers: 25,
    trend: 'up',
  },
  {
    id: 2,
    product: 'Natural Shampoo',
    sales: 980,
    revenue: '$44,100',
    growth: '+8%',
    retailers: 18,
    trend: 'up',
  },
  {
    id: 3,
    product: 'Hair Treatment Kit',
    sales: 750,
    revenue: '$97,425',
    growth: '-3%',
    retailers: 12,
    trend: 'down',
  },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-500">Track your business performance and insights</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <span>Last 30 Days</span>
          <ChevronDownIcon className="h-5 w-5 ml-2 text-gray-500" />
        </button>
      </div>

      {/* Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-50 p-4 rounded-lg"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-emerald-800 font-medium">Total Revenue</h3>
            <CurrencyDollarIcon className="h-6 w-6 text-emerald-600" />
          </div>
          <p className="text-2xl font-bold text-emerald-900">$254,025</p>
          <p className="text-sm text-emerald-600">+12% from last month</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 p-4 rounded-lg"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-blue-800 font-medium">Total Sales</h3>
            <ChartBarIcon className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-blue-900">2,980</p>
          <p className="text-sm text-blue-600">+8% from last month</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-purple-50 p-4 rounded-lg"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-purple-800 font-medium">Active Retailers</h3>
            <UserGroupIcon className="h-6 w-6 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-purple-900">55</p>
          <p className="text-sm text-purple-600">+5 new this month</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-yellow-50 p-4 rounded-lg"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-yellow-800 font-medium">Growth Rate</h3>
            <ArrowTrendingUpIcon className="h-6 w-6 text-yellow-600" />
          </div>
          <p className="text-2xl font-bold text-yellow-900">12%</p>
          <p className="text-sm text-yellow-600">+2% from last month</p>
        </motion.div>
      </div>

      {/* Performance Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Product Performance</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sales
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Growth
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Retailers
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {performanceData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.product}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.sales.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.revenue}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                        item.trend === 'up'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {item.growth}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.retailers}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Placeholder for Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-4 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-medium text-gray-900 mb-4">Sales Trend</h3>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">Sales Chart Placeholder</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-4 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Distribution</h3>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">Revenue Chart Placeholder</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
