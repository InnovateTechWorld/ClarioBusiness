import React from 'react';
import { motion } from 'framer-motion';
import {
  DocumentTextIcon,
  ArrowDownTrayIcon as DownloadIcon,
  FunnelIcon as FilterIcon,
  CalendarIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';

interface Report {
  id: number;
  title: string;
  date: string;
  type: string;
  downloads: number;
}

const reports: Report[] = [
  {
    id: 1,
    title: 'Monthly Sales Report',
    date: '2024-01-31',
    type: 'Sales',
    downloads: 45,
  },
  {
    id: 2,
    title: 'Product Performance Analysis',
    date: '2024-01-30',
    type: 'Analytics',
    downloads: 32,
  },
  // Add more sample reports as needed
];

const Reports: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
            <FilterIcon className="h-5 w-5 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
            <CalendarIcon className="h-5 w-5 mr-2" />
            Date Range
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="grid gap-4 p-6">
          {reports.map((report) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center space-x-4">
                <DocumentTextIcon className="h-8 w-8 text-emerald-600" />
                <div>
                  <h3 className="font-medium text-gray-900">{report.title}</h3>
                  <p className="text-sm text-gray-500">
                    {report.date} • {report.type}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  {report.downloads} downloads
                </span>
                <button className="flex items-center px-3 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg">
                  <DownloadIcon className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Report Analytics</h2>
            <ChartBarIcon className="h-6 w-6 text-emerald-600" />
          </div>
          {/* Add analytics content here */}
        </div>
      </div>
    </div>
  );
};

export default Reports;
