import React from 'react';
import { ClipboardList, Users2, BarChart3, Globe2, Database, Zap } from 'lucide-react';

interface FeaturesProps {
  inView: boolean;
}

export function Features({ inView }: FeaturesProps) {
  const features = [
    {
      icon: <ClipboardList className="w-12 h-12 text-green-400" strokeWidth={1.5} />,
      title: 'Easy Product Documentation',
      description: 'Streamline product details for effortless access. Document ingredients, usage, and more, enhancing product transparency and reliability.',
      image: 'assets/dashboard.jpg'
    },
    {
      icon: <Users2 className="w-12 h-12 text-green-400" strokeWidth={1.5} />,
      title: 'Connect with Customers',
      description: 'With Clario, customers can access accurate, relevant product information, fostering brand trust and loyalty.',
      image: 'assets/customer.jpg'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-400" strokeWidth={1.5} />,
      title: 'Comprehensive Analytics',
      description: 'Gain actionable insights with detailed analytics on product engagement and visibility.',
      image: 'assets/metrics.jpg'
    }
  ];

  const categories = [
    {
      icon: <Database className="w-8 h-8 text-green-400" strokeWidth={1.5} />,
      title: 'Product Management',
      description: 'Simplify product details, updates, and documentation.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" strokeWidth={1.5} />,
      title: 'Analytics',
      description: 'Understand customer interactions with your products.'
    },
    {
      icon: <Globe2 className="w-8 h-8 text-green-400" strokeWidth={1.5} />,
      title: 'Promotions',
      description: 'Boost visibility with data-driven marketing insights.'
    },
    {
      icon: <Users2 className="w-8 h-8 text-green-400" strokeWidth={1.5} />,
      title: 'Sales Tracking',
      description: 'Stay updated on product performance and demand.'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" strokeWidth={1.5} />,
      title: 'API Access',
      description: 'Integrate effortlessly with custom data solutions.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto relative z-10">
      {/* Main Features */}
      <div className="mb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-200">
          Powerful Features for Your Business
        </h2>
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} transform transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex-1 space-y-6">
                <div className="p-3 bg-green-500/10 rounded-2xl w-fit">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-green-400">{feature.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-2xl shadow-2xl relative z-10 transform transition-all group-hover:scale-105 duration-500 border border-green-500/20"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="relative rounded-3xl p-12 bg-black/30 border border-green-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl"></div>
        <h2 className="text-3xl font-bold text-center mb-12 text-green-400">
          Everything You Need
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl bg-black/50 border border-green-500/10 hover:border-green-500/30 shadow-lg hover:shadow-green-500/5 transition-all duration-300 transform hover:-translate-y-1 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${(index + features.length) * 100}ms` }}
            >
              <div className="p-3 bg-green-500/10 rounded-xl w-fit mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">{category.title}</h3>
              <p className="text-gray-300">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}