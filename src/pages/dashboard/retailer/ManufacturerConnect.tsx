import React, { useState } from 'react';
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  StarIcon,
  ArrowTrendingUpIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/solid';

interface Manufacturer {
  id: number;
  name: string;
  location: string;
  categories: string[];
  rating: number;
  totalProducts: number;
  image: string;
  trending: boolean;
  description: string;
}

const manufacturers: Manufacturer[] = [
  {
    id: 1,
    name: 'Natural Essentials Inc.',
    location: 'California, USA',
    categories: ['Hair Care', 'Skin Care'],
    rating: 4.8,
    totalProducts: 150,
    image: '/manufacturer1.jpg',
    trending: true,
    description: 'Leading manufacturer of natural and organic beauty products.',
  },
  {
    id: 2,
    name: 'BeautyTech Solutions',
    location: 'New York, USA',
    categories: ['Makeup', 'Skin Care'],
    rating: 4.6,
    totalProducts: 200,
    image: '/manufacturer2.jpg',
    trending: true,
    description: 'Innovative beauty solutions using cutting-edge technology.',
  },
  {
    id: 3,
    name: 'Global Beauty Corp',
    location: 'Paris, France',
    categories: ['Luxury Cosmetics', 'Fragrances'],
    rating: 4.9,
    totalProducts: 300,
    image: '/manufacturer3.jpg',
    trending: false,
    description: 'Premium beauty products for the luxury market.',
  },
];

const ManufacturerConnect: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredManufacturers = manufacturers.filter((manufacturer) => {
    const matchesSearch = manufacturer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      manufacturer.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || manufacturer.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(
    new Set(manufacturers.flatMap((m) => m.categories))
  );

  return (
    <div className="py-6">
      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Connect with Manufacturers
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search manufacturers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-indigo-100 text-indigo-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Manufacturers Grid */}
      <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredManufacturers.map((manufacturer) => (
            <div
              key={manufacturer.id}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-16 w-16">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src={manufacturer.image}
                      alt={manufacturer.name}
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {manufacturer.name}
                      {manufacturer.trending && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <ArrowTrendingUpIcon className="mr-1 h-4 w-4" />
                          Trending
                        </span>
                      )}
                    </h3>
                    <div className="mt-1 flex items-center">
                      <MapPinIcon className="h-4 w-4 text-gray-400" />
                      <span className="ml-1 text-sm text-gray-500">{manufacturer.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-500">{manufacturer.description}</p>
                </div>

                <div className="mt-4">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(manufacturer.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">
                      {manufacturer.rating} rating
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {manufacturer.categories.map((category) => (
                      <span
                        key={category}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <BuildingOfficeIcon className="mr-2 h-5 w-5" />
                    Connect
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManufacturerConnect;
