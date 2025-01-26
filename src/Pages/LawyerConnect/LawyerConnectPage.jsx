import React, { useState } from "react";
import {
  Search,
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Award,
  Briefcase,
  Users,
  Trophy,
  ArrowRight,
  MessageCircle,
  Shield,
} from "lucide-react";

const LawyerPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const topLawyers = [
    {
      name: "Sarah Johnson",
      specialty: "Corporate Law",
      rating: 4.9,
      reviews: 128,
      location: "New York, NY",
      experience: "15 years",
      image: "/api/placeholder/150/150",
      availability: "Available Today",
      expertise: ["Mergers", "Business Law", "Contracts"],
      badge: "Top Rated 2024",
      cases: 250,
      successRate: "98%",
    },
    {
      name: "Michael Roberts",
      specialty: "Family Law",
      rating: 4.8,
      reviews: 95,
      location: "Los Angeles, CA",
      experience: "12 years",
      image: "/api/placeholder/150/150",
      availability: "Available This Week",
      expertise: ["Divorce", "Child Custody", "Adoption"],
      badge: "Top Rated 2023",
      cases: 210,
      successRate: "96%",
    },
    {
      name: "Emma Davis",
      specialty: "Intellectual Property",
      rating: 4.7,
      reviews: 115,
      location: "Chicago, IL",
      experience: "10 years",
      image: "/api/placeholder/150/150",
      availability: "Available Today",
      expertise: ["Patents", "Trademarks", "Copyrights"],
      badge: "Top Rated 2023",
      cases: 180,
      successRate: "94%",
    },
    {
      name: "James Lee",
      specialty: "Criminal Defense",
      rating: 4.6,
      reviews: 150,
      location: "Miami, FL",
      experience: "20 years",
      image: "/api/placeholder/150/150",
      availability: "Available This Week",
      expertise: ["Drug Offenses", "DUI", "Assault"],
      badge: "Top Rated 2024",
      cases: 350,
      successRate: "92%",
    },
    {
      name: "Isabella Martinez",
      specialty: "Real Estate Law",
      rating: 4.9,
      reviews: 200,
      location: "San Francisco, CA",
      experience: "18 years",
      image: "/api/placeholder/150/150",
      availability: "Available Today",
      expertise: ["Residential", "Commercial", "Leases"],
      badge: "Top Rated 2023",
      cases: 280,
      successRate: "97%",
    },
    {
      name: "David Clark",
      specialty: "Tax Law",
      rating: 4.5,
      reviews: 120,
      location: "Boston, MA",
      experience: "14 years",
      image: "/api/placeholder/150/150",
      availability: "Available This Week",
      expertise: ["Tax Returns", "Estate Planning", "Corporate Tax"],
      badge: "Top Rated 2024",
      cases: 210,
      successRate: "90%",
    },
    {
      name: "Olivia Wright",
      specialty: "Personal Injury Law",
      rating: 4.8,
      reviews: 170,
      location: "Houston, TX",
      experience: "16 years",
      image: "/api/placeholder/150/150",
      availability: "Available Today",
      expertise: ["Car Accidents", "Slip and Fall", "Workplace Injuries"],
      badge: "Top Rated 2023",
      cases: 300,
      successRate: "95%",
    },
    {
      name: "Liam Harris",
      specialty: "Employment Law",
      rating: 4.7,
      reviews: 80,
      location: "Dallas, TX",
      experience: "11 years",
      image: "/api/placeholder/150/150",
      availability: "Available This Week",
      expertise: ["Wrongful Termination", "Discrimination", "Harassment"],
      badge: "Top Rated 2023",
      cases: 170,
      successRate: "93%",
    },
    {
      name: "Sophia King",
      specialty: "Immigration Law",
      rating: 4.6,
      reviews: 90,
      location: "Washington, D.C.",
      experience: "13 years",
      image: "/api/placeholder/150/150",
      availability: "Available Today",
      expertise: ["Visas", "Green Cards", "Citizenship"],
      badge: "Top Rated 2023",
      cases: 190,
      successRate: "92%",
    },
    {
      name: "Ethan Allen",
      specialty: "Bankruptcy Law",
      rating: 4.4,
      reviews: 100,
      location: "Atlanta, GA",
      experience: "9 years",
      image: "/api/placeholder/150/150",
      availability: "Available This Week",
      expertise: ["Chapter 7", "Chapter 13", "Debt Relief"],
      badge: "Top Rated 2024",
      cases: 160,
      successRate: "88%",
    },
    {
      name: "Charlotte Thomas",
      specialty: "Environmental Law",
      rating: 4.7,
      reviews: 110,
      location: "Seattle, WA",
      experience: "17 years",
      image: "/api/placeholder/150/150",
      availability: "Available Today",
      expertise: ["Sustainability", "Regulations", "Compliance"],
      badge: "Top Rated 2024",
      cases: 220,
      successRate: "91%",
    },
    {
      name: "Daniel Walker",
      specialty: "Healthcare Law",
      rating: 4.8,
      reviews: 140,
      location: "Los Angeles, CA",
      experience: "22 years",
      image: "/api/placeholder/150/150",
      availability: "Available This Week",
      expertise: ["Medicare", "Hospitals", "Healthcare Compliance"],
      badge: "Top Rated 2023",
      cases: 330,
      successRate: "96%",
    },
  ];

  const founders = [
    {
      name: "David Anderson",
      role: "CEO & Founder",
      image: "/api/placeholder/200/200",
      bio: "20+ years in legal tech innovation",
      linkedin: "#",
      achievements: ["Forbes 30 Under 30", "Legal Tech Innovator 2023"],
    },
    {
      name: "Emily Zhang",
      role: "Chief Legal Officer",
      image: "/api/placeholder/200/200",
      bio: "Former Supreme Court Clerk",
      linkedin: "#",
      achievements: ["Harvard Law Review Editor", "Distinguished Law Fellow"],
    },
  ];

  const categories = [
    { id: "corporate", name: "Corporate Law", icon: Briefcase, count: 45 },
    { id: "family", name: "Family Law", icon: Users, count: 32 },
    { id: "criminal", name: "Criminal Law", icon: Shield, count: 28 },
    { id: "property", name: "Property Law", icon: MapPin, count: 36 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      {/* Hero Section */}

      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="text-center p-4">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg mb-8">
          <Trophy size={16} className="text-purple-600" />
          <span className="text-purple-700 text-sm font-medium">
            Top Lawyer Connect
          </span>
        </div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 to-blue-100/40" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Connect with Elite
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Legal Professionals
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Access top-tier legal expertise tailored to your needs. Join
                thousands of satisfied clients who found their perfect legal
                match.
              </p>

              <div className="relative max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-4 bg-white rounded-2xl p-2 shadow-xl">
                  <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                    <Search className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by practice area or lawyer name..."
                      className="bg-transparent w-full outline-none text-gray-700"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors">
                    Search
                  </button>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-8">
                <div className="flex items-center gap-2">
                  <Users className="text-purple-600" />
                  <span className="text-gray-600">
                    <strong className="text-gray-900">50K+</strong> Clients
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-purple-600" />
                  <span className="text-gray-600">
                    <strong className="text-gray-900">4.9/5</strong> Rating
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl transform rotate-3" />
              <img
                src="https://plus.unsplash.com/premium_photo-1661340734008-73efe1324d78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Legal Team"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Explore Practice Areas</h2>
            <p className="text-gray-600">
              Find the right legal expertise for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-2xl transition-all ${
                  selectedCategory === category.id
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-600 hover:bg-purple-50 border border-gray-100"
                }`}
              >
                <category.icon
                  className={`mb-4 ${
                    selectedCategory === category.id
                      ? "text-white"
                      : "text-purple-600"
                  }`}
                  size={32}
                />
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p
                  className={`text-sm ${
                    selectedCategory === category.id
                      ? "text-purple-100"
                      : "text-gray-500"
                  }`}
                >
                  {category.count} Lawyers
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Top Rated Lawyers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Top Rated Lawyers</h2>
              <p className="text-gray-600">
                Meet our highest-rated legal professionals
              </p>
            </div>
            <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
              View All <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {topLawyers.map((lawyer, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{lawyer.name}</h3>
                        <p className="text-purple-600 text-sm">
                          {lawyer.specialty}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                        <Star
                          size={14}
                          className="text-yellow-500 fill-current"
                        />
                        <span className="text-sm font-bold">
                          {lawyer.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600">Success Rate</p>
                    <p className="text-lg font-bold text-purple-600">
                      {lawyer.successRate}
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600">Cases</p>
                    <p className="text-lg font-bold text-purple-600">
                      {lawyer.cases}+
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <MapPin size={14} />
                    <span>{lawyer.location}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition-colors">
                      Book Consultation
                    </button>
                    <button className="px-4 py-2 border border-purple-200 rounded-xl hover:bg-purple-50">
                      <MessageCircle size={20} className="text-purple-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <p className="text-gray-600">Meet the team behind our success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white rounded-2xl p-8 flex items-start gap-6 shadow-lg">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-32 h-32 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-purple-600 font-medium mb-4">
                      {founder.role}
                    </p>
                    <p className="text-gray-600 mb-4">{founder.bio}</p>
                    <div className="space-y-2">
                      {founder.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <Award size={14} className="text-purple-600" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LawyerPortal;
