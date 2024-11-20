import React from 'react';
import { motion } from 'framer-motion';
import {
  PlusIcon,
  CalendarIcon,
  TagIcon,
  ChartPieIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';

const promotions = [
  {
    id: 1,
    name: 'Summer Beauty Sale',
    type: 'Discount',
    discount: '25%',
    startDate: '2024-06-01',
    endDate: '2024-06-30',
    products: ['Premium Hair Oil', 'Natural Shampoo'],
    status: 'Scheduled',
  },
  {
    id: 2,
    name: 'New Retailer Bundle',
    type: 'Bundle',
    discount: '30%',
    startDate: '2024-02-01',
    endDate: '2024-02-28',
    products: ['Hair Treatment Kit', 'Natural Shampoo'],
    status: 'Active',
  },
  {
    id: 3,
    name: 'Holiday Special',
    type: 'BOGO',
    discount: '50%',
    startDate: '2024-12-01',
    endDate: '2024-12-31',
    products: ['Premium Hair Oil'],
    status: 'Draft',
  },
];

export default function Promotions() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Promotions</h1>
          <p className="text-gray-500">Create and manage promotional campaigns</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
          <PlusIcon className="h-5 w-5 mr-2" />
          Create Promotion
        </button>
      </div>

      {/* Promotion Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-50 p-4 rounded-lg"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-emerald-800 font-medium">Active Promotions</h3>
            <TagIcon className="h-6 w-6 text-emerald-600" />
          </div>
          <p className="text-2xl font-bold text-emerald-900">5</p>
          <p className="text-sm text-emerald-600">2 ending this week</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 p-4 rounded-lg"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-blue-800 font-medium">Scheduled</h3>
            <CalendarIcon className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-blue-900">8</p>
          <p className="text-sm text-blue-600">3 starting next week</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-purple-50 p-4 rounded-lg"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-purple-800 font-medium">Performance</h3>
            <ChartPieIcon className="h-6 w-6 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-purple-900">+18%</p>
          <p className="text-sm text-purple-600">Average sales increase</p>
        </motion.div>
      </div>

      {/* Promotions Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Promotion
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Discount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Range
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Products
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {promotions.map((promo) => (
                <tr key={promo.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{promo.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{promo.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{promo.discount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {promo.startDate} - {promo.endDate}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {promo.products.map((product, index) => (
                        <span
                          key={index}
                          className="inline-block px-2 py-1 mr-1 mb-1 text-xs bg-gray-100 rounded"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        promo.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : promo.status === 'Scheduled'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {promo.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-emerald-600 hover:text-emerald-900 mr-3">
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
