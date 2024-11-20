import React from 'react';
import { motion } from 'framer-motion';
import { BasicFormData } from '../../types/auth';

interface BasicInfoFormProps {
  onSubmit: (data: BasicFormData) => void;
  initialData: BasicFormData;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = React.useState<BasicFormData>(initialData);
  const [error, setError] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Create Your Account</h2>
        <p className="mt-2 text-sm text-gray-300">Join Clario Business and start managing your products.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-white/5 border border-gray-600 rounded-lg text-white shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-200">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-white/5 border border-gray-600 rounded-lg text-white shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-white/5 border border-gray-600 rounded-lg text-white shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200">Account Type</label>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, accountType: 'brand' })}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                formData.accountType === 'brand'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              Brand
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, accountType: 'retailer' })}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                formData.accountType === 'retailer'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              Retailer
            </button>
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default BasicInfoForm;
