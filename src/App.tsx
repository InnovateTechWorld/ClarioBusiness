import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/globals.css';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import RetailerDashboard from './pages/dashboard/retailer/RetailerDashboard';
import ManufacturerDashboard from './pages/dashboard/manufacturer/ManufacturerDashboard';
import OrderHistory from './pages/dashboard/retailer/OrderHistory';
import ProductCatalog from './pages/dashboard/retailer/ProductCatalog';
import InventoryManagement from './pages/dashboard/retailer/InventoryManagement';
import StoreProfile from './pages/dashboard/retailer/StoreProfile';
import RetailerAnalytics from './pages/dashboard/retailer/Analytics';
import ManufacturerConnect from './pages/dashboard/retailer/ManufacturerConnect';
import Analytics from './pages/dashboard/manufacturer/Analytics';
import ProductManagement from './pages/dashboard/manufacturer/ProductManagement';
import Reports from './pages/dashboard/manufacturer/Reports';
import Promotions from './pages/dashboard/manufacturer/Promotions';
import Feedback from './pages/dashboard/manufacturer/Feedback';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/signin" element={<SignIn />} />

        {/* Retailer Routes */}
        <Route path="/dashboard/retailer" element={<RetailerDashboard />}>
          <Route index element={<RetailerAnalytics />} />
          <Route path="orders" element={<OrderHistory />} />
          <Route path="products" element={<ProductCatalog />} />
          <Route path="inventory" element={<InventoryManagement />} />
          <Route path="analytics" element={<RetailerAnalytics />} />
          <Route path="manufacturers" element={<ManufacturerConnect />} />
          <Route path="profile" element={<StoreProfile />} />
        </Route>

        {/* Manufacturer Routes */}
        <Route path="/dashboard/manufacturer" element={<ManufacturerDashboard />}>
          <Route index element={<Analytics />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="reports" element={<Reports />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;