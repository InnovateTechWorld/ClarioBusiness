import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HomeIcon,
  ShoppingBagIcon,
  ClipboardDocumentListIcon,
  UserIcon,
  ChartBarIcon,
  TagIcon,
  ChatBubbleLeftIcon,
  Bars3Icon,
  XMarkIcon,
  BellIcon,
} from '@heroicons/react/24/solid';

interface DashboardLayoutProps {
  userType: 'retailer' | 'manufacturer';
}

const retailerNavItems = [
  { name: 'Dashboard', icon: HomeIcon, path: '/dashboard/retailer' },
  { name: 'Product Catalog', icon: ShoppingBagIcon, path: '/dashboard/retailer/catalog' },
  { name: 'Inventory', icon: ClipboardDocumentListIcon, path: '/dashboard/retailer/inventory' },
  { name: 'Orders', icon: ClipboardDocumentListIcon, path: '/dashboard/retailer/orders' },
  { name: 'Store Profile', icon: UserIcon, path: '/dashboard/retailer/profile' },
];

const manufacturerNavItems = [
  { name: 'Dashboard', icon: HomeIcon, path: '/dashboard/manufacturer/analytics' },
  { name: 'Products', icon: ShoppingBagIcon, path: '/dashboard/manufacturer/products' },
  { name: 'Analytics', icon: ChartBarIcon, path: '/dashboard/manufacturer/analytics' },
  { name: 'Promotions', icon: TagIcon, path: '/dashboard/manufacturer/promotions' },
  { name: 'Feedback', icon: ChatBubbleLeftIcon, path: '/dashboard/manufacturer/feedback' },
];

export default function DashboardLayout({ userType }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const location = useLocation();

  const navItems = userType === 'retailer' ? retailerNavItems : manufacturerNavItems;

  const notifications = [
    { id: 1, title: 'New order received', time: '5 minutes ago' },
    { id: 2, title: 'Product stock low', time: '1 hour ago' },
    { id: 3, title: 'New feedback received', time: '2 hours ago' },
  ];

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed p-2 bg-white rounded-md shadow-lg md:hidden top-4 left-4"
      >
        {isSidebarOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            className="fixed inset-y-0 left-0 w-64 bg-emerald-700 text-white shadow-lg z-20"
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between h-16 px-4 border-b border-emerald-600">
                <h1 className="text-xl font-bold">Clario Business</h1>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 rounded-md hover:bg-emerald-600"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex-1 px-2 py-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                        isActive
                          ? 'bg-emerald-800 text-white'
                          : 'text-emerald-100 hover:bg-emerald-600'
                      }`}
                    >
                      <item.icon className="h-6 w-6 mr-3" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="p-4 border-t border-emerald-600">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center">
                    <UserIcon className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-emerald-300">View Profile</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="h-16 flex items-center justify-between px-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="p-2 rounded-md text-gray-500 hover:bg-gray-100 relative"
                >
                  <BellIcon className="h-6 w-6" />
                  <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                </button>

                {/* Notifications Dropdown */}
                <AnimatePresence>
                  {isNotificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50"
                    >
                      <div className="p-4">
                        <h3 className="text-lg font-medium mb-4">Notifications</h3>
                        <div className="space-y-4">
                          {notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-md"
                            >
                              <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                                <BellIcon className="h-4 w-4 text-emerald-600" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">{notification.title}</p>
                                <p className="text-xs text-gray-500">{notification.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
