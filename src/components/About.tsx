import React from 'react';

interface AboutProps {
  inView: boolean;
}

export function About({ inView }: AboutProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-black/30 rounded-3xl"></div>
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
        <div className="relative z-10 p-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-200">
            Building Trust Between Brands and Consumers
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            At Clario Business, we're on a mission to transform how African brands connect with their consumers. By providing powerful tools for product documentation and management, we're creating a more transparent and efficient marketplace.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our platform empowers businesses to take control of their product information, ensuring accuracy and accessibility across all channels.
          </p>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
          <img 
            src="assets/trust.jpg"
            alt="Team collaboration"
            className="rounded-2xl shadow-2xl relative z-10 transform transition-all group-hover:scale-105 duration-500 border border-green-500/20"
          />
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl"></div>
          <div className="absolute -left-4 -top-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
}