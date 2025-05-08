import React, { useState } from 'react';
import { Clock, ArrowRight, Eye,Handshake, BookOpen, ChevronLeft, ChevronRight,Calendar } from 'lucide-react';

const QuickReadsBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Rental Agreements: A Complete Guide",
      category: "Legal Guides",
      readTime: "5 min read",
      views: "2.5k",
      image: "https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
      excerpt: "Learn the essential components of rental agreements and what to look out for before signing.",
      date: "Feb 5, 2025"
    },
    {
      id: 2,
      title: "10 Common Employment Contract Mistakes to Avoid",
      category: "Business",
      readTime: "4 min read",
      views: "1.8k",
      image: "https://plus.unsplash.com/premium_photo-1661540409860-fe00bb21a51c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
      excerpt: "Discover the most common pitfalls in employment contracts and how to avoid them.",
      date: "Feb 4, 2025"
    },
    {
      id: 3,
      title: "The Ultimate Guide to Business Partnership Agreements",
      category: "Business",
      readTime: "6 min read",
      views: "3.2k",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
      excerpt: "Everything you need to know about creating a solid partnership agreement.",
      date: "Feb 3, 2025"
    },
    {
      id: 4,
      title: "Digital Contracts: What You Need to Know",
      category: "Technology",
      readTime: "3 min read",
      views: "2.1k",
      image: "https://plus.unsplash.com/premium_photo-1683141511225-1d9e52099f56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
      excerpt: "Understanding the legality and implementation of digital contracts in modern business.",
      date: "Feb 2, 2025"
    }
  ];

  const categories = [
    "All", "Legal Guides", "Business", "Technology", "Real Estate", "Employment"
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const postsPerPage = 3;

  // Filter posts by category
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-purple-50 rounded-full text-purple-600 text-sm font-medium mb-6">
            Quick Reads
          </div>
          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            Stay Updated with Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
              Legal Insights
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover expert tips, guides, and insights about legal documents and business agreements
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${selectedCategory === category 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' 
                  : 'bg-white hover:bg-purple-50 text-gray-600 hover:text-purple-600'}
                border border-purple-100 hover:border-purple-200`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <div className="rounded-3xl overflow-hidden bg-white shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573164574511-73c773193279?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE1fHxsYXd5ZXJ8ZW58MHx8MHx8fDA%3D" 
                  alt="Featured post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="md:w-1/2 p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 bg-purple-50 rounded-full text-sm font-medium text-purple-600">
                    Featured
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> 8 min read
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  The Complete Guide to Legal Document Management in 2025
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Master the art of managing legal documents efficiently in the digital age. Learn about best practices, tools, and techniques to streamline your legal document workflow.
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid with Navigation */}
        <div className="relative">
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                Page {currentPage} of {totalPages}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full transition-all
                    ${currentPage === 1 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-white text-purple-600 hover:bg-purple-50 border border-purple-100'}`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-full transition-all
                    ${currentPage === totalPages 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-white text-purple-600 hover:bg-purple-50 border border-purple-100'}`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <div 
                key={post.id}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-purple-600">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-4 h-4" /> {post.views} views
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1.5 text-sm text-gray-500">
                      <Clock className="w-4 h-4" /> {post.readTime}
                    </span>
                    <button className="flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <BookOpen className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Partner with Us
            </h3>
            <p className="text-gray-600 mb-8">
            Join our network of legal professionals and grow your practice through collaboration
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-purple-100 focus:outline-none focus:border-purple-500 bg-white"
              />
              <button className="px-8 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-medium">
              join now
              </button>
            </div>
          </div>


      
        </div>


        {/*  */}
      </div>
    </div>
  );
};

export default QuickReadsBlog;