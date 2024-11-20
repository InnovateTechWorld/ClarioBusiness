import { motion } from 'framer-motion';
import { RetailerFormData } from '../../types/auth';
import { countries, productCategories } from '../../data/dummyData';

interface RetailerInfoFormProps {
  formData: RetailerFormData;
  onUpdate: (data: RetailerFormData) => void;
  onNext: () => void;
  onBack: () => void;
  isLoading?: boolean;
}

export default function RetailerInfoForm({
  formData,
  onUpdate,
  onNext,
  onBack,
  isLoading = false
}: RetailerInfoFormProps) {
  if (!formData) {
    return null; // Or a loading state
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleInputChange = (field: string, value: string) => {
    onUpdate({
      ...formData,
      [field]: value
    });
  };

  const handleLocationChange = (field: string, value: string) => {
    onUpdate({
      ...formData,
      location: {
        ...formData.location,
        [field]: value
      }
    });
  };

  const handleContactChange = (field: string, value: string) => {
    onUpdate({
      ...formData,
      contactInfo: {
        ...formData.contactInfo,
        [field]: value
      }
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl mx-auto"
    >
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Set Up Your Retailer Profile</h2>
        <p className="text-gray-600">
          We need a few details to connect you to the right brands and customers.
        </p>
      </div>

      {/* Business Information */}
      <div className="space-y-4">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
            Business Name
          </label>
          <input
            id="businessName"
            type="text"
            value={formData.businessName}
            onChange={(e) => handleInputChange('businessName', e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
            required
          />
        </div>

        {/* Location Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              id="country"
              value={formData.location.country}
              onChange={(e) => handleLocationChange('country', e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
              required
            >
              <option value="">Select country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              id="city"
              type="text"
              value={formData.location.city}
              onChange={(e) => handleLocationChange('city', e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              id="postalCode"
              type="text"
              value={formData.location.postalCode}
              onChange={(e) => handleLocationChange('postalCode', e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
              required
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Business Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.contactInfo.email}
              onChange={(e) => handleContactChange('email', e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Business Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.contactInfo.phone}
              onChange={(e) => handleContactChange('phone', e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
              required
            />
          </div>
        </div>

        {/* Store Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="storeType" className="block text-sm font-medium text-gray-700">
              Store Type
            </label>
            <select
              id="storeType"
              value={formData.storeType}
              onChange={(e) => handleInputChange('storeType', e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
              required
            >
              <option value="physical">Physical Store</option>
              <option value="online">Online Store</option>
              <option value="hybrid">Hybrid (Physical & Online)</option>
            </select>
          </div>

          <div>
            <label htmlFor="storeCount" className="block text-sm font-medium text-gray-700">
              Number of Stores
            </label>
            <input
              id="storeCount"
              type="number"
              min="1"
              value={formData.storeCount}
              onChange={(e) => handleInputChange('storeCount', parseInt(e.target.value, 10))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
              required
            />
          </div>
        </div>
      </div>

      {/* Form Navigation */}
      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
        >
          {isLoading ? 'Saving...' : 'Next'}
        </button>
      </div>
    </motion.form>
  );
}
