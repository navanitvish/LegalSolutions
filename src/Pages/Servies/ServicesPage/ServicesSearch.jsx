import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../../../utils/servicesData";


const ServicesSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  // Flatten services data to make it easier to search
  const flattenedServices = Object.entries(servicesData).reduce(
    (acc, [category, data]) => {
      // Add category itself
      acc.push({
        type: "category",
        title: category,
        path: data.path,
      });

      // Add each subcategory
      if (Array.isArray(data.subcategories)) {
        data.subcategories.forEach((sub) => {
          acc.push({
            type: "subcategory",
            title: sub.name,
            path: sub.path,
            category,
          });
        });
      }

      return acc;
    },
    []
  );

  useEffect(() => {
    if (searchTerm.length >= 2) {
      const term = searchTerm.toLowerCase();
      const results = flattenedServices.filter((item) =>
        item.title.toLowerCase().includes(term)
      );

      setSearchResults(results.slice(0, 8)); // Limit to 8 results
      setIsSearching(true);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  }, [searchTerm]);

  const handleResultClick = (result) => {
    setSearchTerm("");
    setIsSearching(false);
    navigate(result.path);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleResultClick(searchResults[0]);
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      <form onSubmit={handleSearchSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for services or agreements..."
            className="w-full px-6 py-4 text-lg rounded-xl border-2 border-purple-100 
              focus:border-purple-400 focus:ring-purple-400 focus:outline-none
              pl-14 placeholder-gray-400"
          />
          <Search className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
        </div>
      </form>

      {/* Search Results Dropdown */}
      {isSearching && searchResults.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-purple-100 z-50 max-h-96 overflow-y-auto">
          <div className="py-2">
            {searchResults.map((result, index) => (
              <button
                key={`${result.type}-${result.title}-${index}`}
                onClick={() => handleResultClick(result)}
                className="w-full px-6 py-3 text-left hover:bg-purple-50 flex flex-col group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-gray-800 group-hover:text-purple-600 font-medium">
                      {result.title}
                    </div>
                    {result.type === "subcategory" && (
                      <div className="text-sm text-gray-500">
                        in {result.category}
                      </div>
                    )}
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-50 text-purple-600 ml-2">
                    {result.type}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No Results Message */}
      {isSearching && searchTerm.length >= 2 && searchResults.length === 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-purple-100 z-50">
          <div className="px-6 py-4 text-gray-500 text-center">
            No results found for "{searchTerm}"
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesSearch;
