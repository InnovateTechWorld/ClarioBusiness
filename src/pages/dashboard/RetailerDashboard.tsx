import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUpIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const stats = [
  {
    name: 'Total Sales',
    value: '$23,456',
    change: '+12.5%',
    changeType: 'positive',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Active Orders',
    value: '45',
    change: '+5.3%',
    changeType: 'positive',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Customer Visits',
    value: '1,234',
    change: '+22.4%',
    changeType: 'positive',
    icon: UserGroupIcon,
  },
  {
    name: 'Inventory Items',
    value: '534',
    change: '-2.1%',
    changeType: 'negative',
    icon: ChartBarIcon,
  },
];

const recentOrders = [
  {
    id: 1,
    product: 'Premium Hair Oil',
    customer: 'Jane Cooper',
    status: 'Delivered',
    amount: '$89.99',
    date: '2024-01-15',
  },
  {
    id: 2,
    product: 'Natural Shampoo',
    customer: 'Wade Warren',
    status: 'Processing',
    amount: '$45.00',
    date: '2024-01-14',
  },
  {
    id: 3,
    product: 'Hair Treatment Kit',
    customer: 'Esther Howard',
    status: 'Shipped',
    amount: '$129.99',
    date: '2024-01-13',
  },
];

const topProducts = [
  {
    id: 1,
    name: 'Premium Hair Oil',
    sales: 245,
    revenue: '$22,050',
    growth: '+15.3%',
  },
  {
    id: 2,
    name: 'Natural Shampoo',
    sales: 189,
    revenue: '$8,505',
    growth: '+8.7%',
  },
  {
    id: 3,
    name: 'Hair Treatment Kit',
    sales: 156,
    revenue: '$20,280',
    growth: '+12.1%',
  },
];

export default function RetailerDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, John's Store!</h1>
          <p className="text-gray-500">Here's what's happening with your store today.</p>
        </div>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors">
          + Add New Product
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
              <span
                className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500">{stat.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 bg-white rounded-lg shadow-sm"
        >
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.product}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            order.status === 'Delivered'
                              ? 'bg-green-100 text-green-800'
                              : order.status === 'Processing'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm"
        >
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Top Products</h2>
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.sales} sales</p>
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
      </div>
    </div>
  );
}
