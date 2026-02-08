import { useState, useEffect, useRef } from 'react';

// Complete Agreement template generator with all legal clauses
import {generateAgreementText} from '../../../utils/DocumentData';


// Helper to check if field is filled
const isFilled = (value) => {
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'string') return value.trim() !== '';
  return value !== null && value !== undefined;
};

const fittingsOptions = [
  'Ceiling Fans', 'Refrigerator/Fridge', 'Air conditioner', 'Gas stove',
  'Chimney', 'Electronic Induction/Stove', 'Bulbs', 'Washing Machine',
  'Tube-Lights', 'Water Geyser', 'LEDs/Any other', 'Dish washer',
  'Exhaust fan', 'Water purifier', 'TV', 'Oven',
  'Sofa', 'Dining Table', 'Bed', 'Any Decorative item',
  'Table', 'Wardrobe', 'Chair', 'Shelf',
  'Curtains', 'Crockery Shelf', 'Cutlery'
];

const indianStates = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Delhi', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Jharkhand',
  'Karnataka', 'Madhya Pradesh', 'Maharashtra', 'Punjab', 'Rajasthan',
  'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

export default function RentAgreementForm() {
  const [step, setStep] = useState(1);
  const [activeField, setActiveField] = useState(null);
  const previewRef = useRef(null);
  const [formData, setFormData] = useState({
    state: '', ownerName: '', ownerRelation: '', ownerRelatedName: '',
    ownerAddress: '', ownerAadhaar: '', ownerPan: '', ownerAge: '', ownerOccupation: '',
    ownerContact: '', ownerPhoto: null,
    tenantName: '', tenantRelation: '', tenantRelatedName: '',
    tenantAddress: '', tenantAadhaar: '', tenantPan: '', tenantAge: '', tenantOccupation: '',
    tenantContact: '', tenantPhoto: null,
    propertyAddress: '', propertyArea: '', propertyPincode: '', propertyCity: '',
    monthlyRent: '', maintenanceCharges: '', rentPayDay: '', securityDeposit: '',
    paymentMethod: '', duration: '', commenceDate: '', endDate: '',
    noticePeriod: '', rentIncrement: '', purpose: '', email: '',
    defaultPeriod: '2', lockInPeriod: '3', interestRate: '2',
    stampDutyBy: 'Landlord',
    fittings: [],
    witness1Name: '', witness1Address: '', witness1Aadhaar: '', witness1Contact: '', witness1Photo: null,
    witness2Name: '', witness2Address: '', witness2Aadhaar: '', witness2Contact: '', witness2Photo: null
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Only set active field if there's meaningful content
    if (value && value.toString().trim().length > 1) {
      setActiveField(field);
    }
  };

  const handlePhotoUpload = (field, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, [field]: reader.result }));
        setActiveField(field);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleFitting = (fitting) => {
    setFormData(prev => ({
      ...prev,
      fittings: prev.fittings.includes(fitting)
        ? prev.fittings.filter(f => f !== fitting)
        : [...prev.fittings, fitting]
    }));
    // Set active field only when there are fittings selected
    if (!formData.fittings.includes(fitting) || formData.fittings.length > 0) {
      setActiveField('fittings');
    }
  };

  // Highlight text in preview based on active field
  const highlightText = (text) => {
    if (!activeField || !formData[activeField]) return text;
    
    const value = formData[activeField];
    if (!value || value.length === 0) return text;
    
    const valueStr = Array.isArray(value) ? value.join(', ') : String(value);
    if (!valueStr || valueStr === '____________' || valueStr.trim().length < 2) return text;
    
    // Create regex that escapes special characters and matches whole words
    const escapedValue = valueStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b(${escapedValue})\\b`, 'gi');
    
    // Only highlight if there's an exact match
    if (!regex.test(text)) return text;
    
    return text.replace(regex, (match) => 
      `<mark class="bg-yellow-300 text-black font-semibold px-1 rounded animate-pulse">${match}</mark>`
    );
  };

  const PhotoUpload = ({ label, name, required = false }) => (
    <div>
      <label className="block text-sm font-medium text-gray-800 mb-2">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="flex items-center gap-4">
        <label className="flex-1 cursor-pointer">
          <div className={`px-4 py-3 border-2 rounded-lg transition-all text-center ${
            formData[name] 
              ? 'bg-green-50 border-green-400 hover:border-green-500' 
              : 'bg-white border-gray-300 hover:border-purple-500'
          }`}>
            <span className={`text-sm font-medium ${formData[name] ? 'text-green-700' : 'text-gray-600'}`}>
              {formData[name] ? '✓ Photo Uploaded' : '📷 Choose Photo'}
            </span>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handlePhotoUpload(name, e)}
            className="hidden"
          />
        </label>
        {formData[name] && (
          <img src={formData[name]} alt="Preview" className="w-16 h-16 object-cover rounded-lg border-2 border-green-400 shadow-md" />
        )}
      </div>
    </div>
  );

  const Input = ({ label, name, type = "text", required = true, rows, options, placeholder }) => {
    const filled = isFilled(formData[name]);
    
    return (
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-2">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
        {options ? (
          <select
            value={formData[name]}
            onChange={(e) => handleChange(name, e.target.value)}
            onFocus={() => formData[name] && setActiveField(name)}
            onBlur={() => setTimeout(() => setActiveField(null), 300)}
            className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-all ${
              filled 
                ? 'bg-green-50 border-green-400 focus:border-green-500 focus:ring-2 focus:ring-green-200' 
                : 'bg-white border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
            }`}
          >
            <option value="">- Select -</option>
            {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        ) : rows ? (
          <textarea
            value={formData[name]}
            onChange={(e) => handleChange(name, e.target.value)}
            onFocus={() => formData[name] && setActiveField(name)}
            onBlur={() => setTimeout(() => setActiveField(null), 300)}
            placeholder={placeholder}
            rows={rows}
            className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-all resize-none ${
              filled 
                ? 'bg-green-50 border-green-400 focus:border-green-500 focus:ring-2 focus:ring-green-200' 
                : 'bg-white border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
            }`}
          />
        ) : (
          <input
            type={type}
            value={formData[name]}
            onChange={(e) => handleChange(name, e.target.value)}
            onFocus={() => formData[name] && setActiveField(name)}
            onBlur={() => setTimeout(() => setActiveField(null), 300)}
            placeholder={placeholder}
            className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-all ${
              filled 
                ? 'bg-green-50 border-green-400 focus:border-green-500 focus:ring-2 focus:ring-green-200' 
                : 'bg-white border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
            }`}
          />
        )}
      </div>
    );
  };

  const stepTitles = {
    1: 'Owner Details',
    2: 'Tenant Details',
    3: 'Property & Rent Details',
    4: 'Agreement Terms',
    5: 'Witnesses & Payment'
  };

  const renderSignatureTable = () => {
    const format = (text) => text || '____________';
    
    return (
      <div className="mt-8 space-y-4">
        <div className="border-t-2 border-black pt-4">
          <h3 className="text-center font-bold text-black text-base mb-4 uppercase">
            PARTIES DETAILS & SIGNATURES
          </h3>
        </div>

        {/* Landlord Table */}
        <div className="border border-black">
          <div className=" border-b border-black px-3 py-2 font-bold uppercase text-sm">
            LANDLORD DETAILS
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold w-1/3 border-r border-black">Name:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.ownerName)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Address:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.ownerAddress)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">PAN Card Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.ownerPan)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Aadhaar Card Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.ownerAadhaar)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Contact Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.ownerContact)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Photo:</td>
                <td className="px-3 py-2">
                  {formData.ownerPhoto ? (
                    <img src={formData.ownerPhoto} alt="Owner" className={`w-12 h-12 object-cover border border-black ${activeField === 'ownerPhoto' ? 'ring-4 ring-yellow-300' : ''}`} />
                  ) : (
                    <span>____________</span>
                  )}
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-semibold border-r border-black">Signature/Thumb:</td>
                <td className="px-3 py-8"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tenant Table */}
        <div className="border border-black mt-4">
          <div className=" border-b border-black px-3 py-2 font-bold uppercase text-sm">
            TENANT DETAILS
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold w-1/3 border-r border-black">Name:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.tenantName)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Address:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.tenantAddress)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">PAN Card Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.tenantPan)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Aadhaar Card Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.tenantAadhaar)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Contact Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.tenantContact)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Photo:</td>
                <td className="px-3 py-2">
                  {formData.tenantPhoto ? (
                    <img src={formData.tenantPhoto} alt="Tenant" className={`w-12 h-12 object-cover border border-black ${activeField === 'tenantPhoto' ? 'ring-4 ring-yellow-300' : ''}`} />
                  ) : (
                    <span>____________</span>
                  )}
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-semibold border-r border-black">Signature/Thumb:</td>
                <td className="px-3 py-8"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Witness 1 Table */}
        <div className="border border-black mt-4">
          <div className=" border-b border-black px-3 py-2 font-bold uppercase text-sm">
            WITNESS (I) DETAILS
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold w-1/3 border-r border-black">Name:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.witness1Name)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Address:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.witness1Address)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Aadhaar Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.witness1Aadhaar)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Contact Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.witness1Contact)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Photo:</td>
                <td className="px-3 py-2">
                  {formData.witness1Photo ? (
                    <img src={formData.witness1Photo} alt="Witness 1" className={`w-12 h-12 object-cover border border-black ${activeField === 'witness1Photo' ? 'ring-4 ring-yellow-300' : ''}`} />
                  ) : (
                    <span>____________</span>
                  )}
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-semibold border-r border-black">Signature/Thumb:</td>
                <td className="px-3 py-8"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Witness 2 Table */}
        <div className="border border-black mt-4">
          <div className=" border-b border-black px-3 py-2 font-bold uppercase text-sm">
            WITNESS (II) DETAILS
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold w-1/3 border-r border-black">Name:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.witness2Name)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Address:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.witness2Address)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Aadhaar Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.witness2Aadhaar)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Contact Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.witness2Contact)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Photo:</td>
                <td className="px-3 py-2">
                  {formData.witness2Photo ? (
                    <img src={formData.witness2Photo} alt="Witness 2" className={`w-12 h-12 object-cover border border-black ${activeField === 'witness2Photo' ? 'ring-4 ring-yellow-300' : ''}`} />
                  ) : (
                    <span>____________</span>
                  )}
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-semibold border-r border-black">Signature/Thumb:</td>
                <td className="px-3 py-8"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const agreementText = generateAgreementText(formData);
  const highlightedAgreement = highlightText(agreementText);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            House Rental Agreement Generator
          </h1>
          <p className="text-gray-600 mt-2">Create your professional rental agreement in minutes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          
          {/* Left Panel - Form */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 shadow-xl h-fit">
            {/* Progress */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Step {step} of 5 - {stepTitles[step]}
              </h2>
              <div className="relative">
                <div className="w-full bg-purple-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-500 via-purple-600 to-blue-600 h-full transition-all duration-500"
                    style={{ width: `${step * 20}%` }}
                  />
                </div>
                <span className="absolute -top-1 text-xs font-bold text-purple-700" style={{ left: `${step * 20}%`, transform: 'translateX(-50%)' }}>
                  {step * 20}%
                </span>
              </div>
            </div>

            {/* Form Steps */}
            <div className="space-y-5">
              {step === 1 && (
                <>
                  <Input label="Select State of the Rented Property" name="state" options={indianStates} />
                  <Input label="Owner's Name" name="ownerName" placeholder="Enter the Name of the owner" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Relation" name="ownerRelation" options={['S/O', 'D/O', 'W/O']} />
                    <Input label="Related Person's Name" name="ownerRelatedName" placeholder="Enter the Name" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Age" name="ownerAge" type="number" placeholder="Age in years" />
                    <Input label="Occupation" name="ownerOccupation" placeholder="Occupation (optional)" required={false} />
                  </div>
                  <Input label="Permanent Address of the Owner" name="ownerAddress" rows={3} placeholder="Enter the full address" />
                  <Input label="Owner PAN Card Number" name="ownerPan" placeholder="Enter PAN Number" />
                  <Input label="Owner Aadhaar Card Number" name="ownerAadhaar" placeholder="Enter Aadhaar Number" />
                  <Input label="Contact Number" name="ownerContact" type="tel" placeholder="Mobile Number" />
                  <PhotoUpload label="Owner Photo" name="ownerPhoto" />
                </>
              )}

              {step === 2 && (
                <>
                  <Input label="Tenant's Name" name="tenantName" placeholder="Enter the Name of the tenant" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Relation" name="tenantRelation" options={['S/O', 'D/O', 'W/O']} />
                    <Input label="Related Person's Name" name="tenantRelatedName" placeholder="Enter the Name" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Age" name="tenantAge" type="number" placeholder="Age in years" />
                    <Input label="Occupation" name="tenantOccupation" placeholder="Occupation (optional)" required={false} />
                  </div>
                  <Input label="Permanent Address of the Tenant" name="tenantAddress" rows={3} placeholder="Enter the full address" />
                  <Input label="Tenant PAN Card Number" name="tenantPan" placeholder="Enter PAN Number" />
                  <Input label="Tenant's Aadhaar Card Number" name="tenantAadhaar" placeholder="Enter Aadhaar Number" />
                  <Input label="Contact Number" name="tenantContact" type="tel" placeholder="Mobile Number" />
                  <PhotoUpload label="Tenant Photo" name="tenantPhoto" />
                </>
              )}

              {step === 3 && (
                <>
                  <Input label="Rented Property Address" name="propertyAddress" rows={2} placeholder="Complete address" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Property Area (Sqft)" name="propertyArea" placeholder="e.g., 1200 sqft" required={false} />
                    <Input label="PIN Code" name="propertyPincode" placeholder="e.g., 110001" required={false} />
                  </div>
                  <Input label="City" name="propertyCity" placeholder="City name" required={false} />
                  <Input label="Monthly Rent (in Rupees)" name="monthlyRent" type="number" placeholder="e.g., 15000" />
                  <Input label="Maintenance Charges (in Rupees)" name="maintenanceCharges" type="number" placeholder="e.g., 2000" />
                  <Input label="Rent Payment Day (of month)" name="rentPayDay" type="number" placeholder="e.g., 5" />
                  <Input label="Security Deposit (in Rupees)" name="securityDeposit" type="number" placeholder="e.g., 30000" />
                </>
              )}

              {step === 4 && (
                <>
                  <Input label="Payment Method for Security" name="paymentMethod" 
                    options={['Cash', 'Cheque', 'Bank Transfer', 'UPI']} />
                  <Input label="Duration (in Months)" name="duration" type="number" placeholder="e.g., 11" />
                  <Input label="Commencement Date" name="commenceDate" type="date" />
                  <Input label="End Date" name="endDate" type="date" />
                  <Input label="Notice Period (months)" name="noticePeriod" type="number" placeholder="e.g., 1" />
                  <Input label="Lock-in Period (months)" name="lockInPeriod" type="number" placeholder="e.g., 3" />
                  <Input label="Default Period for Termination (months)" name="defaultPeriod" type="number" placeholder="e.g., 2" />
                  <Input label="Rent Increment (%)" name="rentIncrement" type="number" placeholder="e.g., 5" />
                  <Input label="Interest Rate on Delayed Refund (% per month)" name="interestRate" type="number" placeholder="e.g., 2" required={false} />
                  <Input label="Purpose" name="purpose" options={['Residential', 'Commercial']} />
                  <Input label="Stamp Duty Borne By" name="stampDutyBy" options={['Landlord', 'Tenant', 'Shared']} />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-3">
                      Fittings and Fixtures:
                    </label>
                    <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto p-4 bg-gray-50 rounded-lg border-2 border-gray-300">
                      {fittingsOptions.map(fitting => {
                        const isChecked = formData.fittings.includes(fitting);
                        return (
                          <label key={fitting} className={`flex items-center space-x-2 cursor-pointer p-2 rounded transition-all ${
                            isChecked ? 'bg-green-100 border border-green-400' : 'hover:bg-purple-50'
                          }`}>
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleFitting(fitting)}
                              className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                            />
                            <span className={`text-sm ${isChecked ? 'font-semibold text-green-800' : 'text-gray-700'}`}>
                              {fitting}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {step === 5 && (
                <>
                  <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                    <h3 className="font-bold text-gray-800 mb-3">Witness 1 Details</h3>
                    <div className="space-y-3">
                      <Input label="Name" name="witness1Name" placeholder="Full name" required={false} />
                      <Input label="Address" name="witness1Address" rows={2} placeholder="Complete address" required={false} />
                      <Input label="Aadhaar Number" name="witness1Aadhaar" placeholder="Aadhaar number" required={false} />
                      <Input label="Contact Number" name="witness1Contact" type="tel" placeholder="Mobile number" required={false} />
                      <PhotoUpload label="Witness 1 Photo" name="witness1Photo" />
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                    <h3 className="font-bold text-gray-800 mb-3">Witness 2 Details</h3>
                    <div className="space-y-3">
                      <Input label="Name" name="witness2Name" placeholder="Full name" required={false} />
                      <Input label="Address" name="witness2Address" rows={2} placeholder="Complete address" required={false} />
                      <Input label="Aadhaar Number" name="witness2Aadhaar" placeholder="Aadhaar number" required={false} />
                      <Input label="Contact Number" name="witness2Contact" type="tel" placeholder="Mobile number" required={false} />
                      <PhotoUpload label="Witness 2 Photo" name="witness2Photo" />
                    </div>
                  </div>

                  <Input label="Email for Agreement Draft" name="email" type="email" placeholder="your@email.com" />

                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-2 border-purple-300 shadow-md">
                    <h3 className="font-bold text-gray-800 mb-4 text-lg">📄 Draft Only Price</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700">Agreement Draft</span>
                        <span className="font-semibold">₹99.00 x 1</span>
                      </div>
                      <div className="border-t-2 border-purple-300 pt-3 flex justify-between items-center">
                        <span className="font-bold text-gray-700 text-lg">Total Amount:</span>
                        <span className="font-bold text-purple-600 text-2xl">₹99.00</span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 gap-4">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-8 py-3 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    ← Previous
                  </button>
                )}
                {step < 5 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    className="ml-auto px-8 py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    className="ml-auto px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    🎉 Generate Agreement
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Panel - Live Agreement Preview */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[calc(100vh-2rem)] lg:sticky lg:top-4 border-2 border-gray-200">
            <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 text-white p-4 flex justify-between items-center flex-shrink-0">
              <div>
                <h2 className="text-xl font-bold tracking-wide"> House Rental Agreement Generator</h2>
                <p className="text-xs text-purple-100 mt-1">Updates in real-time as you fill the form</p>
              </div>
              <button className="p-2 hover:bg-purple-800 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-gradient-to-b from-gray-50 to-white">
              <div className="prose max-w-none">
                <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-sm">
                  {/* Title at top */}
                  <div className="text-center mb-6 pb-4 border-b-4 border-purple-600">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                      HOUSE RENTAL AGREEMENT
                    </h1>
                  </div>
                  
                  <pre 
                    ref={previewRef}
                    className="font-sans text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-gray-800"
                    dangerouslySetInnerHTML={{ __html: highlightedAgreement }}
                  />
                  
                  {renderSignatureTable()}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-3 flex justify-center gap-2 border-t-2 border-gray-200 flex-shrink-0">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === step 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 w-8' 
                      : i < step 
                      ? 'bg-green-500 w-2' 
                      : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}