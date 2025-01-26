import React from "react";
import { ArrowRight } from "lucide-react";

const ProductCards = () => {
  const products = [
    {
      title: "E-Stamp paper Services ",

      description: `MyLegalInstant offers e-stamping functionality, allowing users
to stamp legal documents electronically. This feature makes the legal process
more efficient and convenient for users`,
    },
    {
      title: "Rental Receipts",

      description: `MyLegalInstant offers rental receipt services, helping users
to create rental receipts for their properties.`,
    },
  ];

  return (
    <div className="container px-6 py-12 mx-auto">
      <div className="grid w-10/12 grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <div key={index} className="relative w-full group h-72">
            {/* Stacked background cards for depth effect */}
            <div className="absolute inset-0 transition-transform duration-300 transform bg-green-100 rounded-lg rotate-3 group-hover:rotate-6"></div>
            <div className="absolute inset-0 transition-transform duration-300 transform bg-red-100 rounded-lg -rotate-3 group-hover:-rotate-6"></div>

            {/* Main card content */}
            <div className="relative w-full p-6 text-black transition duration-300 transform bg-blue-200 rounded-lg shadow-lg h-72 group-hover:-translate-y-2">
              <h3 className="mb-2 text-xl font-bold">{product.title}</h3>

              <p className="mb-4 text-sm text-justify">{product.description}</p>
              {/* <div className="mt-4">
                <p className="font-semibold">{service.author}</p>
                <p className="text-xs text-gray-400">{service.role}</p>
              </div> */}
              {/* <div className="absolute bottom-4 right-4">
                <ArrowRight
                  className="text-black hover:border hover:border-black hover:rounded-full "
                  size={20}
                />
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
