import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import SignUp from './pages/auth/SignUp';
import RetailerDashboard from './pages/dashboard/RetailerDashboard';
import ManufacturerDashboard from './pages/dashboard/ManufacturerDashboard';
import DashboardLayout from './components/dashboard/DashboardLayout';
import ProductCatalog from './pages/dashboard/retailer/ProductCatalog';
import InventoryManagement from './pages/dashboard/retailer/InventoryManagement';
import OrderHistory from './pages/dashboard/retailer/OrderHistory';
import StoreProfile from './pages/dashboard/retailer/StoreProfile';
import ProductManagement from './pages/dashboard/manufacturer/ProductManagement';
import Analytics from './pages/dashboard/manufacturer/Analytics';
import Promotions from './pages/dashboard/manufacturer/Promotions';
import Feedback from './pages/dashboard/manufacturer/Feedback';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/dashboard/retailer',
    element: <DashboardLayout userType="retailer" />,
    children: [
      {
        path: '',
        element: <RetailerDashboard />,
      },
      {
        path: 'catalog',
        element: <ProductCatalog />,
      },
      {
        path: 'inventory',
        element: <InventoryManagement />,
      },
      {
        path: 'orders',
        element: <OrderHistory />,
      },
      {
        path: 'profile',
        element: <StoreProfile />,
      },
    ],
  },
  {
    path: '/dashboard/manufacturer',
    element: <DashboardLayout userType="manufacturer" />,
    children: [
      {
        path: '',
        element: <ManufacturerDashboard />,
      },
      {
        path: 'products',
        element: <ProductManagement />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'promotions',
        element: <Promotions />,
      },
      {
        path: 'feedback',
        element: <Feedback />,
      },
    ],
  },
]);
