import React from 'react';
import { motion } from 'framer-motion';
import {
  MagnifyingGlassIcon as SearchIcon,
  FunnelIcon as FilterIcon,
  ExclamationTriangleIcon as ExclamationIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

const inventory = [
  {
    id: 1,
    name: 'Premium Hair Oil',
    sku: 'PHO-001',
    inStock: 45,
    minStock: 20,
    maxStock: 100,
    reorderPoint: 30,
    lastUpdated: '2024-01-15',
    status: 'In Stock',
  },
  {
    id: 2,
    name: 'Natural Shampoo',
    sku: 'NS-002',
    inStock: 15,
    minStock: 25,
    maxStock: 150,
    reorderPoint: 35,
    lastUpdated: '2024-01-14',
    status: 'Low Stock',
  },
  {
    id: 3,
    name: 'Hair Treatment Kit',
    sku: 'HTK-003',
    inStock: 0,
    minStock: 10,
    maxStock: 50,
    reorderPoint: 15,
    lastUpdated: '2024-01-13',
    status: 'Out of Stock',
  },
];

export default function InventoryManagement() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-500">Track and manage your product inventory</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Product
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search inventory..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
          />
          <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <FilterIcon className="h-5 w-5 mr-2 text-gray-500" />
          Filter
        </button>
      </div>

      {/* Inventory Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-50 p-4 rounded-lg"
        >
          <h3 className="text-emerald-800 font-medium">Total Products</h3>
          <p className="text-2xl font-bold text-emerald-900">60</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-yellow-50 p-4 rounded-lg"
        >
          <h3 className="text-yellow-800 font-medium">Low Stock Items</h3>
          <p className="text-2xl font-bold text-yellow-900">8</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-red-50 p-4 rounded-lg"
        >
          <h3 className="text-red-800 font-medium">Out of Stock</h3>
          <p className="text-2xl font-bold text-red-900">3</p>
        </motion.div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SKU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  In Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.sku}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.inStock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        item.status === 'In Stock'
                          ? 'bg-green-100 text-green-800'
                          : item.status === 'Low Stock'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.lastUpdated}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-emerald-600 hover:text-emerald-900">Edit</button>
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
