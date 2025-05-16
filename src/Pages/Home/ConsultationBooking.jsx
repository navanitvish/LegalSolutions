import { useState } from "react";

function HeroSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    legalNeeds: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center bg-purple-50 rounded-full px-4 py-2 text-purple-600">
              <span className="text-sm font-medium">⚖️ Professional Legal Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Legal Solutions Made Simple
            </h1>
            
            <p className="text-lg text-gray-600">
              Get personalized legal assistance from experienced professionals at a fraction of traditional costs.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                  <svg className="w-4 h-4 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Affordable legal documents</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                  <svg className="w-4 h-4 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Expert legal consultations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                  <svg className="w-4 h-4 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Transparent pricing</span>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 border border-purple-50">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-justify">
                  MyLegalInstant makes legal services simple and affordable, offering trusted documents and expert support to help businesses grow confidently without the stress of high legal costs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Get your legal consultation
                  </h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm">
                        1
                      </div>
                      <span className="text-gray-600">Fill out the form</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm">
                        2
                      </div>
                      <span className="text-gray-600">Schedule your consultation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm">
                        3
                      </div>
                      <span className="text-gray-600">Receive personalized legal help</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Phone Number"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Legal Needs"
                    name="legalNeeds"
                    type="select"
                    value={formData.legalNeeds}
                    onChange={handleChange}
                    options={[
                      { value: "", label: "Select your needs" },
                      { value: "document-preparation", label: "Document Preparation" },
                      { value: "legal-advice", label: "Legal Advice" },
                      { value: "legal-representation", label: "Legal Representation" },
                      { value: "contract-review", label: "Contract Review" },
                      { value: "business-formation", label: "Business Formation" },
                      { value: "estate-planning", label: "Estate Planning" },
                      { value: "other", label: "Other Legal Services" }
                    ]}
                    required
                  />
                  
                  <button
                    type="submit"
                    className="col-span-1 sm:col-span-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 shadow-md"
                  >
                    Get Legal Assistance
                  </button>
                </form>

                <p className="text-sm text-gray-500">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                  Your information is secure and will not be shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormField({ label, name, type = "text", value, onChange, options, required }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required={required}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required={required}
        />
      )}
    </div>
  );
}

export default HeroSection;