import React from 'react';
import { 
  Scale, 
  UserCheck, 
  MessageSquare, 
  FileText, 
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Sparkles
} from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="w-full bg-gradient-to-br from-white via-purple-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-6">
            <Sparkles size={20} />
            <span className="font-medium">Simple Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How <span className="text-purple-600">LEGALINSTANT</span> Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your trusted platform for instant legal solutions
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Process Box */}
          <div className="md:col-span-2 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 group hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <CheckCircle size={24} className="text-white" />
              </div>
              Simple 4-Step Process
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <UserCheck size={24} />,
                  title: "Choose Expert",
                  desc: "Select from verified lawyers"
                },
                {
                  icon: <MessageSquare size={24} />,
                  title: "Consult",
                  desc: "Free initial consultation"
                },
                {
                  icon: <FileText size={24} />,
                  title: "Review",
                  desc: "Get case analysis"
                },
                {
                  icon: <CheckCircle size={24} />,
                  title: "Resolve",
                  desc: "Complete legal support"
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="relative overflow-hidden bg-white/10 rounded-xl p-6 group/item hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white/20 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-purple-100 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Box */}
          <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500">
            <h3 className="text-xl font-bold text-gray-900 mb-8">Why Choose Us</h3>
            <div className="space-y-8">
              {[
                { number: "98%", text: "Client Satisfaction", icon: <Star className="text-purple-600" /> },
                { number: "24/7", text: "Support Available", icon: <Clock className="text-purple-600" /> },
                { number: "100%", text: "Secure Platform", icon: <Shield className="text-purple-600" /> }
              ].map((stat, i) => (
                <div key={i} className="group flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600">{stat.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Box */}
          <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500">
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Access</h3>
              <p className="text-gray-600 mb-8">Connect with qualified legal experts instantly through our secure platform.</p>
              <button className="mt-auto w-full bg-purple-600 text-white py-4 rounded-xl hover:bg-purple-700 transition-all duration-300 group">
                <span className="flex items-center justify-center gap-2">
                  Get Started 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Reviews Box */}
          <div className="md:col-span-2 bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-gray-900">Client Reviews</h3>
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  text: "The process was incredibly smooth and professional.",
                  author: "Sarah M.",
                  role: "Business Owner"
                },
                {
                  text: "Found the perfect lawyer for my case within minutes.",
                  author: "James R.",
                  role: "Client"
                }
              ].map((review, i) => (
                <div 
                  key={i} 
                  className="group bg-purple-50 hover:bg-purple-100 rounded-xl p-6 transition-all duration-300"
                >
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-medium">
                        {review.author[0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{review.author}</div>
                      <div className="text-gray-600 text-sm">{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-wrap justify-around items-center gap-8">
            {[
              { text: "Licensed Attorneys", icon: <Scale /> },
              { text: "Verified Experts", icon: <UserCheck /> },
              { text: "Secure Platform", icon: <Shield /> },
              { text: "24/7 Support", icon: <Clock /> }
            ].map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 group hover:text-purple-600 transition-colors duration-300"
              >
                <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;