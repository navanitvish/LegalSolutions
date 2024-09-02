import React from 'react';

function App() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Left Side Content */}
      <div className="flex-1 p-8 md:w-1/4  text-left mt-6 ">
        <h1 className="lg:text-8xl md:text-4xl font-bold mb-4">
          Enterprise agreements without compromise
        </h1>
        <p className="text-sm md:text-lg mb-6">
          Simplify contract workflows across all departments including Sales, HR, and Legal, by quickly sharing stunning, error-free agreements.
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 rounded">
          Request a demo
        </button>
      </div>
      
      {/* Right Side Image */}
      <div className="flex-1 p-8 md:w-1/2 flex items-center justify-center">
        <img
          src="https://public-site.marketing.pandadoc-static.com/assets/assets/hero-media/editor-blocks@2x-6f757119ad.webp"
          alt="Brand Ambassador"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default App;
