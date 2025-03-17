import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  Bars3Icon,
  XMarkIcon,
  ChartBarIcon,
  CubeIcon,
  DocumentChartBarIcon,
  MapPinIcon,
  ArrowTrendingUpIcon,
  UserCircleIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid';

const navigation = [
  { name: 'Analytics', href: 'analytics', icon: ChartBarIcon },
  { name: 'Products', href: 'products', icon: CubeIcon },
  { name: 'Reports', href: 'reports', icon: DocumentChartBarIcon },
  { name: 'Promotions', href: 'promotions', icon: ArrowTrendingUpIcon },
  { name: 'Feedback', href: 'feedback', icon: MapPinIcon },
];

const ManufacturerDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/auth/signin');
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Mobile sidebar overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isMobile
            ? `fixed inset-y-0 left-0 z-30 transition-transform duration-300 transform ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
              }`
            : 'relative'
        } ${
          sidebarCollapsed ? 'w-20' : 'w-64'
        } flex flex-col bg-white border-r border-gray-200 transition-all duration-300`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between flex-shrink-0 px-4 h-16 bg-white border-b border-gray-200">
          <img
            className={`h-8 w-auto transition-all duration-300 ${
              sidebarCollapsed ? 'hidden' : 'block'
            }`}
            src="/assets/Clario.png"
            alt="Clario Business"
          />
          {!isMobile && (
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              {sidebarCollapsed ? (
                <ChevronDoubleRightIcon className="h-6 w-6 text-gray-500" />
              ) : (
                <ChevronDoubleLeftIcon className="h-6 w-6 text-gray-500" />
              )}
            </button>
          )}
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <div className="px-2 space-y-1 py-4">
            {navigation.map((item) => {
              const isActive = location.pathname.endsWith(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-150`}
                >
                  <item.icon
                    className={`${
                      isActive ? 'text-indigo-600' : 'text-gray-400'
                    } mr-3 flex-shrink-0 h-6 w-6`}
                    aria-hidden="true"
                  />
                  {!sidebarCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              {isMobile && (
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                >
                  <Bars3Icon className="h-6 w-6" />
                </button>
              )}
              <h1 className="ml-4 text-xl font-semibold text-gray-800">
                Welcome to Your Manufacturer Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                >
                  <UserCircleIcon className="h-8 w-8 text-gray-400" />
                  <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                </button>
                
                {/* User menu dropdown */}
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                      >
                        <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-2 text-red-400" />
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add Product
              </button>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ManufacturerDashboard;
