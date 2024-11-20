import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  PencilSquareIcon,
  CameraIcon,
} from '@heroicons/react/24/solid';

export default function StoreProfile() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Store Profile</h1>
          <p className="text-gray-500">Manage your store information and settings</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
          <CameraIcon className="h-5 w-5 mr-2" />
          Save Changes
        </button>
      </div>

      {/* Profile Content */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 space-y-8">
          {/* Store Logo */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center">
                <CameraIcon className="h-12 w-12 text-gray-400" />
              </div>
              <button className="absolute bottom-0 right-0 bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700">
                <CameraIcon className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-gray-500">Upload store logo</p>
          </div>

          {/* Store Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">
                  Store Name
                </label>
                <input
                  type="text"
                  id="storeName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-emerald-500 focus:border-emerald-500"
                  defaultValue="Beauty Haven"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-emerald-500 focus:border-emerald-500"
                  defaultValue="contact@beautyhaven.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-emerald-500 focus:border-emerald-500"
                  defaultValue="+234 123 456 7890"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Store Address
                </label>
                <textarea
                  id="address"
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-emerald-500 focus:border-emerald-500"
                  defaultValue="123 Beauty Street, Lagos, Nigeria"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Store Description
                </label>
                <textarea
                  id="description"
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-emerald-500 focus:border-emerald-500"
                  defaultValue="Your one-stop shop for premium beauty and personal care products."
                />
              </div>
            </motion.div>
          </div>

          {/* Store Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Store Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                  <p className="text-sm text-gray-500">Receive order and inventory alerts</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">SMS Notifications</h4>
                  <p className="text-sm text-gray-500">Receive order status updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
