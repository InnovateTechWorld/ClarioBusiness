import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandFormData } from '../../types/auth';
import { countries, socialMediaPlatforms } from '../../data/dummyData';

interface BrandInfoFormProps {
  formData: BrandFormData;
  onUpdate: (data: BrandFormData) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function BrandInfoForm({
  formData,
  onUpdate,
  onNext,
  onBack
}: BrandInfoFormProps) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (step === 1) {
      setStep(2);
      setIsLoading(false);
    } else {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      onNext();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 200
      }
    },
    exit: { opacity: 0, x: '-100%' }
  };

  const formFields = {
    1: (
      <motion.div
        key="step1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="space-y-6"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
              Business Name *
            </label>
            <input
              id="businessName"
              type="text"
              value={formData.businessName}
              onChange={(e) => onUpdate({ ...formData, businessName: e.target.value })}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 bg-gray-50 transition-all duration-200"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">
                Registration Number *
              </label>
              <input
                id="registrationNumber"
                type="text"
                value={formData.businessRegistration.registrationNumber}
                onChange={(e) =>
                  onUpdate({
                    ...formData,
                    businessRegistration: {
                      ...formData.businessRegistration,
                      registrationNumber: e.target.value
                    }
                  })
                }
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 bg-gray-50 transition-all duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="taxId" className="block text-sm font-medium text-gray-700">
                Tax ID *
              </label>
              <input
                id="taxId"
                type="text"
                value={formData.businessRegistration.taxId}
                onChange={(e) =>
                  onUpdate({
                    ...formData,
                    businessRegistration: {
                      ...formData.businessRegistration,
                      taxId: e.target.value
                    }
                  })
                }
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 bg-gray-50 transition-all duration-200"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="registrationDate" className="block text-sm font-medium text-gray-700">
              Registration Date *
            </label>
            <input
              id="registrationDate"
              type="date"
              value={formData.businessRegistration.registrationDate}
              onChange={(e) =>
                onUpdate({
                  ...formData,
                  businessRegistration: {
                    ...formData.businessRegistration,
                    registrationDate: e.target.value
                  }
                })
              }
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 bg-gray-50 transition-all duration-200"
              required
            />
          </div>
        </div>
      </motion.div>
    ),
    2: (
      <motion.div
        key="step2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Business Email *
            </label>
            <input
              id="email"
              type="email"
              value={formData.contactInfo.email}
              onChange={(e) =>
                onUpdate({
                  ...formData,
                  contactInfo: { ...formData.contactInfo, email: e.target.value }
                })
              }
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 bg-gray-50 transition-all duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Business Phone *
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.contactInfo.phone}
              onChange={(e) =>
                onUpdate({
                  ...formData,
                  contactInfo: { ...formData.contactInfo, phone: e.target.value }
                })
              }
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 bg-gray-50 transition-all duration-200"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country *
            </label>
            <select
              id="country"
              value={formData.location.country}
              onChange={(e) =>
                onUpdate({
                  ...formData,
                  location: { ...formData.location, country: e.target.value }
                })
              }
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 bg-gray-50 transition-all duration-200"
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
              City *
            </label>
            <input
              id="city"
              type="text"
              value={formData.location.city}
              onChange={(e) =>
                onUpdate({
                  ...formData,
                  location: { ...formData.location, city: e.target.value }
                })
              }
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 bg-gray-50 transition-all duration-200"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address *
          </label>
          <input
            id="address"
            type="text"
            value={formData.location.address}
            onChange={(e) =>
              onUpdate({
                ...formData,
                location: { ...formData.location, address: e.target.value }
              })
            }
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 bg-gray-50 transition-all duration-200"
            required
          />
        </div>

        <div>
          <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700">
            Website URL (Optional)
          </label>
          <input
            id="websiteUrl"
            type="url"
            value={formData.websiteUrl || ''}
            onChange={(e) => onUpdate({ ...formData, websiteUrl: e.target.value })}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 bg-gray-50 transition-all duration-200"
            placeholder="https://example.com"
          />
        </div>
      </motion.div>
    )
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-8"
      >
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            {step === 1 ? 'Business Information' : 'Contact Details'}
          </h2>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div
                className="h-2 rounded-full bg-emerald-500"
                style={{ width: `${(step / 2) * 100}%` }}
              />
            </div>
            <span className="text-sm text-gray-600">Step {step}/2</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <AnimatePresence mode="wait">
            {formFields[step as keyof typeof formFields]}
          </AnimatePresence>

          <div className="flex space-x-4">
            {step > 1 ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex-1 py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
              >
                Back
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onBack}
                className="flex-1 py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
              >
                Back
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="flex-1 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200 disabled:opacity-50"
            >
              {isLoading
                ? 'Processing...'
                : step === 1
                ? 'Next Step'
                : 'Complete Registration'}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
