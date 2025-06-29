import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type AccountType = 'brand' | 'retailer' | null;
type Country = string;

interface AfricanCountry {
  name: string;
  flag: string;
}

const africanCountries: AfricanCountry[] = [
  { name: 'Nigeria', flag: '🇳🇬' },
  { name: 'South Africa', flag: '🇿🇦' },
  { name: 'Kenya', flag: '🇰🇪' },
  { name: 'Ghana', flag: '🇬🇭' },
  { name: 'Egypt', flag: '🇪🇬' },
  { name: 'Morocco', flag: '🇲🇦' },
  { name: 'Tanzania', flag: '🇹🇿' },
  { name: 'Ethiopia', flag: '🇪🇹' },
  { name: 'Uganda', flag: '🇺🇬' },
  { name: 'Rwanda', flag: '🇷🇼' },
  { name: 'Senegal', flag: '🇸🇳' },
  { name: 'Cameroon', flag: '🇨🇲' },
  { name: 'Ivory Coast', flag: '🇨🇮' },
  { name: 'Angola', flag: '🇦🇴' },
  { name: 'Zimbabwe', flag: '🇿🇼' }
];

const predefinedCategories = [
  'Beauty & Personal Care',
  'Electronics & Gadgets',
  'Fashion & Apparel',
  'Food & Beverages',
  'Health & Wellness',
  'Home & Living',
  'Sports & Fitness',
  'Arts & Crafts',
  'Books & Stationery',
  'Toys & Games'
];

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  businessName: string;
  country: string;
  city: string;
  categories: string[];
  customCategories: string[];
  phoneNumber: string;
  website?: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
  registrationNumber?: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState<AccountType>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [customCategory, setCustomCategory] = useState('');
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    country: africanCountries[0].name,
    city: '',
    categories: [],
    customCategories: [],
    phoneNumber: '',
    website: '',
    socialMedia: {
      instagram: '',
      facebook: '',
      linkedin: '',
    },
    registrationNumber: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Here you would typically make an API call to register the user
      console.log('Registration Data:', { ...formData, accountType });
      
      // Redirect based on account type
      if (accountType === 'brand') {
        navigate('/dashboard/manufacturer/analytics');
      } else {
        navigate('/dashboard/retailer/products');
      }
    }
  };

  const handleAccountTypeSelect = (type: AccountType) => {
    setAccountType(type);
    setStep(3);
  };

  const renderProgressBar = () => (
    <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
      <motion.div
        className="h-full bg-emerald-500 rounded-full"
        initial={{ width: '0%' }}
        animate={{ width: `${(step / 3) * 100}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );

  const renderStep1 = () => (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      onSubmit={handleSubmit}
      className="space-y-6 w-full"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Your Account</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-black"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            placeholder="Enter your business email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-black"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              placeholder="Create a strong password"
              minLength={8}
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-black"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
              placeholder="Confirm your password"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
        type="submit"
      >
        Continue
      </motion.button>

      <div className="text-center mt-6">
        <Link
          to="/auth/signin"
          className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          Already have an account? Sign in
        </Link>
      </div>
    </motion.form>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 w-full"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Choose Your Account Type
      </h2>
      <p className="text-gray-600 mb-6">
        Select the type of account that best fits your business needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer p-6 border-2 border-emerald-200 rounded-xl hover:border-emerald-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
          onClick={() => handleAccountTypeSelect('brand')}
        >
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3">🏭</span>
            <h4 className="text-lg font-medium text-gray-800">Brand/Manufacturer</h4>
          </div>
          <p className="text-gray-600 text-sm">
            I want to showcase and sell my products to retailers. Perfect for brands,
            manufacturers, and wholesalers.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer p-6 border-2 border-emerald-200 rounded-xl hover:border-emerald-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
          onClick={() => handleAccountTypeSelect('retailer')}
        >
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3">🏪</span>
            <h4 className="text-lg font-medium text-gray-800">Retailer</h4>
          </div>
          <p className="text-gray-600 text-sm">
            I want to discover and source products from brands. Ideal for retail
            stores, boutiques, and online sellers.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      onSubmit={handleSubmit}
      className="space-y-6 w-full"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {accountType === 'brand' ? 'Tell Us About Your Brand' : 'Set Up Your Retailer Profile'}
      </h2>
      <p className="text-gray-600 mb-6">
        {accountType === 'brand'
          ? 'This information helps us verify and enhance your visibility on Clario Business.'
          : 'We need a few details to connect you to the right brands and customers.'}
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-black"
            value={formData.businessName}
            onChange={(e) =>
              setFormData({ ...formData, businessName: e.target.value })
            }
            required
            placeholder="Enter your business name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-black"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              required
            >
              {africanCountries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name} {country.flag}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-black"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              required
              placeholder="Enter your city"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Product Categories
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
            {predefinedCategories.map((category) => (
              <div key={category} className="flex items-center space-x-3 py-1.5">
                <input
                  type="checkbox"
                  id={`category-${category}`}
                  className="h-4 w-4 text-emerald-500 border-gray-300 rounded focus:ring-emerald-500"
                  checked={formData.categories.includes(category)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        categories: [...formData.categories, category],
                      });
                    } else {
                      setFormData({
                        ...formData,
                        categories: formData.categories.filter((c) => c !== category),
                      });
                    }
                  }}
                />
                <label 
                  htmlFor={`category-${category}`}
                  className="text-sm font-medium text-black select-none cursor-pointer"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Add Custom Category
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-black"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                placeholder="Enter custom category"
              />
              <button
                type="button"
                className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                onClick={() => {
                  if (customCategory.trim()) {
                    setFormData({
                      ...formData,
                      customCategories: [...formData.customCategories, customCategory.trim()],
                    });
                    setCustomCategory('');
                  }
                }}
              >
                Add
              </button>
            </div>
          </div>

          {formData.customCategories.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Custom Categories
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {formData.customCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between py-1.5 px-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-black">{category}</span>
                    <button
                      type="button"
                      className="text-gray-500 hover:text-red-500 transition-colors"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          customCategories: formData.customCategories.filter((_, i) => i !== index),
                        });
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {accountType === 'brand' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Social Media Links
              </label>
              <div className="space-y-2">
                <input
                  type="url"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-black"
                  value={formData.socialMedia?.instagram}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socialMedia: {
                        ...formData.socialMedia,
                        instagram: e.target.value,
                      },
                    })
                  }
                  placeholder="Instagram URL (optional)"
                />
                <input
                  type="url"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-black"
                  value={formData.socialMedia?.facebook}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socialMedia: {
                        ...formData.socialMedia,
                        facebook: e.target.value,
                      },
                    })
                  }
                  placeholder="Facebook URL (optional)"
                />
                <input
                  type="url"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-black"
                  value={formData.socialMedia?.linkedin}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socialMedia: {
                        ...formData.socialMedia,
                        linkedin: e.target.value,
                      },
                    })
                  }
                  placeholder="LinkedIn URL (optional)"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Registration Number
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-black"
                value={formData.registrationNumber}
                onChange={(e) =>
                  setFormData({ ...formData, registrationNumber: e.target.value })
                }
                placeholder="Optional"
              />
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-black"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            required
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Website
          </label>
          <input
            type="url"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-black"
            value={formData.website}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
            placeholder="Enter your website URL (optional)"
          />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
        type="submit"
      >
        Complete Registration
      </motion.button>
    </motion.form>
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      {renderProgressBar()}
      <AnimatePresence mode="wait">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </AnimatePresence>
    </div>
  );
};

export default SignUp;
