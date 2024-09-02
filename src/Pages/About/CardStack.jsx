import React from 'react';
import { ArrowRight } from 'lucide-react';

const StackedServiceCards = () => {
  const services = [
    {
      title: 'Rental Agreements',
      description: 'Secure your rental transactions with our legally binding agreements.',
      author: 'Legal Expert',
      role: 'Property Law Specialist'
    },
    {
      title: 'Lease Agreements',
      description: 'Protect your leasing interests with our expertly crafted contracts.',
      author: 'Contract Specialist',
      role: 'Commercial Leasing Expert'
    },
    {
      title: 'Business Agreements',
      description: 'Structure your business for success with comprehensive legal support.',
      author: 'Business Lawyer',
      role: 'Corporate Law Expert'
    },
    {
      title: 'Intellectual Property',
      description: 'Safeguard your intellectual assets with our specialized agreements.',
      author: 'IP Specialist',
      role: 'Patent Attorney'
    },
    // Add more services as needed
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-10/12 mx-auto">
        {services.map((service, index) => (
          <div key={index} className="relative group w-full h-72">
            {/* Stacked background cards for depth effect */}
            <div className="absolute inset-0 bg-blue-200 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-red-100 rounded-lg transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
            
            {/* Main card content */}
            <div className="relative bg-green-100 w-full h-72 text-black p-6 rounded-lg shadow-lg transform transition duration-300 group-hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm mb-4">{service.description}</p>
              <div className="mt-4">
                <p className="font-semibold">{service.author}</p>
                <p className="text-xs text-gray-400">{service.role}</p>
              </div>
              <div className="absolute bottom-4 right-4">
                <ArrowRight className="text-black hover:border hover:border-black hover:rounded-full " size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedServiceCards;