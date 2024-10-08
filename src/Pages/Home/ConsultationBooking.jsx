import { useState } from "react";
import { motion } from "framer-motion";
import Input from "./Input"; // Import your custom Input component

function HeroSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companySize: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
  };

  return (
    <div className="bg-[#f8f5f3] p-4 md:p-8 flex flex-col lg:flex-row justify-between items-center mt-10">
      <div className="lg:w-1/2 mb-8 lg:mb-0 text-left">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
          Streamline Your Document Workflow
        </h1>
        <p className="text-md md:text-lg mb-6">
          Get personalized 1:1 demo with our product specialist.
          <ul className="ml-4 mt-2">
            <li>✔️ Tailored to your needs</li>
            <li>✔️ Answers all your questions</li>
            <li>✔️ No commitment to buy</li>
          </ul>
        </p>
        <div className="bg-red-100 w-full md:w-3/4 lg:w-2/4 py-4 px-4 rounded-md">
          <p className="text-sm md:text-md">
            ChiliPiper increased their close rate by 28% after implementing
            PandaDoc.
          </p>
        </div>
      </div>

      <motion.div
        className="bg-white p-4 md:p-8 w-full lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-normal">
            Schedule your free live demo
          </h3>
          <ul className="list-disc pl-5 md:pl-8 space-y-1">
            <li>Fill out the form</li>
            <li>Book a time slot</li>
            <li>Prepare for your demo</li>
          </ul>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">
          Form
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <FormField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <FormField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <FormField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <FormField
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          <FormField
            label="Company Size"
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
          />
          <motion.button
            type="submit"
            className="col-span-1 sm:col-span-2 bg-green-500 text-white px-4 py-2 rounded mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Your Demo
          </motion.button>
        </form>
        <div className="mt-4 text-sm md:text-md">
          <p>
            By submitting this form, I agree that the Terms of Service and
            Privacy Notice will govern the use of services I receive and
            personal data I provide respectively.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function FormField({ label, name, value, onChange }) {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <Input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-md px-3 py-2"
      />
    </motion.div>
  );
}

export default HeroSection;
