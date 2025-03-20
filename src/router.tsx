import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  Outlet
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import RetailerDashboard from './pages/dashboard/retailer/RetailerDashboard';
import ManufacturerDashboard from './pages/dashboard/manufacturer/ManufacturerDashboard';
import OrderHistory from './pages/dashboard/retailer/OrderHistory';
import ProductCatalog from './pages/dashboard/retailer/ProductCatalog';
import InventoryManagement from './pages/dashboard/retailer/InventoryManagement';
import StoreProfile from './pages/dashboard/retailer/StoreProfile';
import Analytics from './pages/dashboard/manufacturer/Analytics';
import ProductManagement from './pages/dashboard/manufacturer/ProductManagement';
import Reports from './pages/dashboard/manufacturer/Reports';
import AuthLayout from './pages/auth/AuthLayout';
import Ranalytics from './pages/dashboard/retailer/Analytics';
import ManufacturerConnect from './pages/dashboard/retailer/ManufacturerConnect';
import Promotions from './pages/dashboard/manufacturer/Promotions';
import Feedback from './pages/dashboard/manufacturer/Feedback';
import { Features } from './components/Features';
import WaitlistPage from './pages/WaitlistPage';

const AuthLayoutWrapper = () => (
  <AuthLayout 
    title="Welcome to Clario Business" 
    subtitle="Join our platform to connect with retailers and grow your business."
  >
    <Outlet />
  </AuthLayout>
);

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<LandingPage />} />
    <Route path="/features" element={<Features inView={false} />} />
    <Route path="/auth" element={<AuthLayoutWrapper />}>
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="waitlist" element={<WaitlistPage />} />
    </Route>
    <Route path="/dashboard/retailer" element={<RetailerDashboard />}>
      <Route path="orders" element={<OrderHistory />} />
      <Route path="products" element={<ProductCatalog />} />
      <Route path="inventory" element={<InventoryManagement />} />
      <Route path="profile" element={<StoreProfile />} />
      <Route path="ranalytics" element={<Ranalytics />} />
      <Route path="manufacturers" element={<ManufacturerConnect />} />
    </Route>
    <Route path="/dashboard/manufacturer" element={<ManufacturerDashboard />}>
      <Route path="analytics" element={<Analytics />} />
      <Route path="products" element={<ProductManagement />} />
      <Route path="reports" element={<Reports />} />
      <Route path="promotions" element={<Promotions />} />
      <Route path="feedback" element={<Feedback />} />

    </Route>
  </>
);

export const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});
