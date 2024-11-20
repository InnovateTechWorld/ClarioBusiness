import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MagnifyingGlassIcon as SearchIcon,
  FunnelIcon as FilterIcon,
  PlusIcon,
  ArrowTrendingUpIcon,
  BuildingStorefrontIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  stock: number;
  image: string;
  category: string;
  rating: number;
  manufacturer: string;
  manufacturerContact: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Hair Oil',
    brand: 'Clario Beauty',
    price: '$89.99',
    stock: 150,
    image: 'https://via.placeholder.com/150',
    category: 'Hair Care',
    rating: 4.5,
    manufacturer: 'Natural Essentials Inc.',
    manufacturerContact: 'contact@naturalessentials.com',
  },
  {
    id: 2,
    name: 'Natural Shampoo',
    brand: 'Clario Beauty',
    price: '$45.00',
    stock: 200,
    image: 'https://via.placeholder.com/150',
    category: 'Hair Care',
    rating: 4.8,
    manufacturer: 'Eco Beauty Labs',
    manufacturerContact: 'support@ecobeauty.com',
  },
  {
    id: 3,
    name: 'Hair Treatment Kit',
    brand: 'Clario Beauty',
    price: '$129.99',
    stock: 75,
    image: 'https://via.placeholder.com/150',
    category: 'Hair Care',
    rating: 4.7,
    manufacturer: 'Natural Essentials Inc.',
    manufacturerContact: 'contact@naturalessentials.com',
  },
];

const categories = ['All Products', 'Hair Care', 'Skin Care', 'Makeup', 'Fragrance'];

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [showManufacturerContact, setShowManufacturerContact] = useState<number | null>(null);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'All Products' && product.category !== selectedCategory) {
      return false;
    }
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Product Catalog</h1>
          <p className="text-gray-500">Browse and order products from our suppliers</p>
        </div>
        <button
          onClick={() => setShowAddProduct(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Product
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
          />
          <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <FilterIcon className="h-5 w-5 mr-2 text-gray-500" />
          Filter
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.brand}</p>
                </div>
                <div className="text-lg font-bold text-emerald-600">{product.price}</div>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Stock</span>
                  <span className={`font-medium ${
                    product.stock < 100 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {product.stock} units
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Rating</span>
                  <span className="font-medium text-gray-900">{product.rating}/5.0</span>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setShowManufacturerContact(
                    showManufacturerContact === product.id ? null : product.id
                  )}
                  className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <BuildingStorefrontIcon className="h-4 w-4 mr-2" />
                  Manufacturer
                </button>
                <button className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <ArrowTrendingUpIcon className="h-4 w-4 mr-2" />
                  Analytics
                </button>
              </div>

              {showManufacturerContact === product.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-3 bg-gray-50 rounded-md"
                >
                  <h4 className="font-medium text-gray-900">{product.manufacturer}</h4>
                  <div className="mt-2 flex items-center gap-2">
                    <ChatBubbleLeftRightIcon className="h-4 w-4 text-gray-400" />
                    <a href={`mailto:${product.manufacturerContact}`} className="text-sm text-emerald-600 hover:text-emerald-700">
                      {product.manufacturerContact}
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
