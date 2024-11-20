import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayout';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to authenticate the user
    console.log('Login Data:', formData);
    
    // For now, let's simulate a successful login and redirect to the dashboard
    // In a real app, you would determine the account type from the API response
    const mockAccountType = 'retailer'; // or 'brand'
    
    if (mockAccountType === 'brand') {
      navigate('/dashboard/manufacturer');
    } else {
      navigate('/dashboard/retailer');
    }
  };

  return (
    <AuthLayout
      title="Welcome Back!"
      subtitle="Sign in to access your Clairo Business account and manage your products with ease."
    >
      <div className="w-full max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600 mb-8">
            Sign in to your account to continue managing your business.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <span className="text-sm">Hide</span>
                  ) : (
                    <span className="text-sm">Show</span>
                  )}
                </button>
              </div>
              <div className="flex justify-end mt-1">
                <Link
                  to="/auth/forgot-password"
                  className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
              type="submit"
            >
              Sign In
            </motion.button>

            <div className="text-center mt-6">
              <Link
                to="/auth/signup"
                className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                Don't have an account? Sign up
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
