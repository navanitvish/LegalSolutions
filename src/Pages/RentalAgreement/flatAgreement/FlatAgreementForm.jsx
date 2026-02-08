// File: src/components/FlatAgreementForm.jsx
// ============================================

import { useState, useRef, useEffect } from 'react';
import {FlatgenerateAgreementText} from '../../../utils/DocumentData';
import PaymentService from '../../../services/Payment';
import ApiService from '../../../api/api';


// Helper functions
const isFilled = (value) => {
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'string') return value.trim() !== '';
  return value !== null && value !== undefined;
};

const formatValue = (text) => text || '____________';

// Validation functions
const validateAadhaar = (aadhaar) => /^\d{12}$/.test(aadhaar.replace(/\s/g, ''));
const validatePAN = (pan) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan.toUpperCase());
const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone.replace(/\s/g, ''));
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Constants
const FITTINGS_OPTIONS = [
  'Ceiling Fans', 'Refrigerator/Fridge', 'Air conditioner', 'Gas stove',
  'Chimney', 'Electronic Induction/Stove', 'Bulbs', 'Washing Machine',
  'Tube-Lights', 'Water Geyser', 'LEDs/Any other', 'Dish washer',
  'Exhaust fan', 'Water purifier', 'TV', 'Oven',
  'Sofa', 'Dining Table', 'Bed', 'Any Decorative item',
  'Table', 'Wardrobe', 'Chair', 'Shelf',
  'Curtains', 'Crockery Shelf', 'Cutlery'
];

const INDIAN_STATES = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Delhi', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Jharkhand',
  'Karnataka', 'Madhya Pradesh', 'Maharashtra', 'Punjab', 'Rajasthan',
  'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

const STEP_TITLES = {
  1: 'Owner Details',
  2: 'Tenant Details',
  3: 'Property & Rent Details',
  4: 'Agreement Terms',
  5: 'Witnesses & Payment'
};

const INITIAL_FORM_DATA = {
  placeOfExecution: '',
  agreementDate: '',
  ownerName: '',
  ownerRelation: '',
  ownerRelatedName: '',
  ownerAddress: '',
  ownerAadhaar: '',
  ownerPan: '',
  ownerAge: '',
  ownerOccupation: '',
  ownerContact: '',
  ownerPhoto: null,
  tenantName: '',
  tenantRelation: '',
  tenantRelatedName: '',
  tenantAddress: '',
  tenantAadhaar: '',
  tenantPan: '',
  tenantAge: '',
  tenantOccupation: '',
  tenantContact: '',
  tenantPhoto: null,
  propertyAddress: '',
  propertyArea: '',
  propertyPincode: '',
  propertyCity: '',
  state: '',
  propertySpecifications: '',
  monthlyRent: '',
  monthlyRentWords: '',
  maintenanceCharges: '',
  otherCharges: '',
  rentPayDay: '',
  paymentMode: '',
  securityDeposit: '',
  securityDepositWords: '',
  paymentMethod: '',
  ddNumber: '',
  ddDate: '',
  bankName: '',
  interestRate: '2',
  duration: '',
  commenceDate: '',
  endDate: '',
  purpose: 'Residential',
  defaultPeriod: '2',
  noticePeriod: '1',
  rentIncrement: '',
  lockInPeriod: '3',
  stampDutyBy: 'Landlord',
  fittings: [],
  landlordResponsibilities: '',
  tenantResponsibilities: '',
  additionalItems: '',
  witness1Name: '',
  witness1Address: '',
  witness1PAN: '',
  witness1Aadhaar: '',
  witness1Contact: '',
  witness1Photo: null,
  witness2Name: '',
  witness2Address: '',
  witness2PAN: '',
  witness2Aadhaar: '',
  witness2Contact: '',
  witness2Photo: null,
  email: ''
};

const VALIDATION_RULES = {
  1: ['state', 'placeOfExecution', 'agreementDate', 'ownerName', 'ownerRelation', 'ownerRelatedName', 'ownerAge', 'ownerAddress', 'ownerPan', 'ownerAadhaar', 'ownerContact', 'ownerPhoto'],
  2: ['tenantName', 'tenantRelation', 'tenantRelatedName', 'tenantAge', 'tenantAddress', 'tenantPan', 'tenantAadhaar', 'tenantContact', 'tenantPhoto'],
  3: ['propertyAddress', 'monthlyRent', 'monthlyRentWords', 'maintenanceCharges', 'rentPayDay', 'securityDeposit', 'securityDepositWords'],
  4: ['paymentMethod', 'paymentMode', 'duration', 'commenceDate', 'endDate', 'noticePeriod', 'lockInPeriod', 'defaultPeriod', 'rentIncrement', 'purpose', 'stampDutyBy'],
  5: ['email']
};

// Photo Upload Component
const PhotoUpload = ({ label, name, value, onChange, required = false, isActive, error }) => (
  <div>
    <label className="block text-sm font-medium text-gray-800 mb-2">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <div className="flex items-center gap-4">
      <label className="flex-1 cursor-pointer">
        <div className={`px-4 py-3 border-2 rounded-lg transition-all text-center ${
          error ? 'bg-red-50 border-red-400 hover:border-red-500' :
          value ? 'bg-green-50 border-green-400 hover:border-green-500' : 'bg-white border-gray-300 hover:border-purple-500'
        } ${isActive ? 'ring-4 ring-yellow-300 animate-pulse' : ''}`}>
          <span className={`text-sm font-medium ${error ? 'text-red-700' : value ? 'text-green-700' : 'text-gray-600'}`}>
            {value ? '✓ Photo Uploaded' : '📷 Choose Photo'}
          </span>
        </div>
        <input type="file" accept="image/*" onChange={(e) => onChange(name, e)} className="hidden" />
      </label>
      {value && <img src={value} alt="Preview" className={`w-16 h-16 object-cover rounded-lg border-2 shadow-md transition-all ${isActive ? 'border-yellow-400 ring-4 ring-yellow-300' : 'border-green-400'}`} />}
    </div>
    {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
  </div>
);

// Input Component
const Input = ({ label, name, type = "text", required = true, rows, options, placeholder, value, onChange, onFocus, onBlur, isActive, error }) => {
  const filled = isFilled(value);
  const baseClasses = `w-full px-4 py-3 border-2 rounded-lg outline-none transition-all ${
    error ? 'bg-red-50 border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' :
    filled ? 'bg-green-50 border-green-400 focus:border-green-500 focus:ring-2 focus:ring-green-200' 
           : 'bg-white border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
  } ${isActive ? 'ring-4 ring-yellow-300 border-yellow-400' : ''}`;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-800 mb-2">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      {options ? (
        <select value={value} onChange={(e) => onChange(name, e.target.value)} onFocus={onFocus} onBlur={onBlur} className={baseClasses}>
          <option value="">- Select -</option>
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      ) : rows ? (
        <textarea value={value} onChange={(e) => onChange(name, e.target.value)} onFocus={onFocus} onBlur={onBlur} 
                  placeholder={placeholder} rows={rows} className={`${baseClasses} resize-none`} />
      ) : (
        <input type={type} value={value} onChange={(e) => onChange(name, e.target.value)} onFocus={onFocus} onBlur={onBlur} 
               placeholder={placeholder} className={baseClasses} />
      )}
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};

// Signature Table Component
const SignatureTable = ({ title, data, activeField, highlightText }) => (
  <div className="border border-black">
    <div className="border-b border-black px-3 py-2 font-bold uppercase text-sm">{title}</div>
    <table className="w-full text-sm">
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key} className={key !== 'Signature' ? "border-b border-black" : ""}>
            <td className="px-3 py-2 font-semibold w-1/3 border-r border-black">{key}:</td>
            <td className={`px-3 ${key === 'Signature' ? 'py-8' : 'py-2'}`}>
              {value && typeof value === 'string' && value.startsWith('data:image') ? (
                <img 
                  src={value} 
                  alt={key} 
                  className={`w-16 h-16 object-cover border-2 border-black rounded ${
                    activeField === key ? 'ring-4 ring-yellow-300' : ''
                  }`} 
                />
              ) : typeof value === 'string' && value !== '____________' ? (
                <span dangerouslySetInnerHTML={{ __html: highlightText(value) }} />
              ) : (
                <span>____________</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function FlatAgreementForm() {
  const [step, setStep] = useState(1);
  const [activeField, setActiveField] = useState(null);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const previewRef = useRef(null);

  useEffect(() => {
    if (activeField && previewRef.current) {
      const highlightedElement = previewRef.current.querySelector('mark');
      if (highlightedElement) {
        highlightedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [activeField]);

  const validateStep = (stepNumber) => {
    const requiredFields = VALIDATION_RULES[stepNumber] || [];
    const errors = {};

    requiredFields.forEach(field => {
      if (!isFilled(formData[field])) {
        errors[field] = 'This field is required';
      } else {
        if (field.includes('Aadhaar') && !validateAadhaar(formData[field])) {
          errors[field] = 'Invalid Aadhaar (12 digits)';
        }
        if (field.includes('Pan') || field.includes('PAN')) {
          if (!validatePAN(formData[field])) {
            errors[field] = 'Invalid PAN (e.g., ABCDE1234F)';
          }
        }
        if (field.includes('Contact') && !validatePhone(formData[field])) {
          errors[field] = 'Invalid phone (10 digits)';
        }
        if (field === 'email' && !validateEmail(formData[field])) {
          errors[field] = 'Invalid email';
        }
        if (field.includes('Age')) {
          const age = parseInt(formData[field]);
          if (isNaN(age) || age < 18 || age > 120) {
            errors[field] = 'Age must be 18-120';
          }
        }
      }
    });

    return errors;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (value && value.toString().trim().length > 0) {
      setActiveField(field);
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handlePhotoUpload = (field, event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setValidationErrors(prev => ({ ...prev, [field]: 'File must be < 5MB' }));
        return;
      }
      if (!file.type.startsWith('image/')) {
        setValidationErrors(prev => ({ ...prev, [field]: 'Must be image file' }));
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, [field]: reader.result }));
        setActiveField(field);
        setValidationErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
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
    setActiveField('fittings');
  };

  const handleNext = () => {
    const errors = validateStep(step);
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      const errorList = Object.keys(errors).map(field => 
        `• ${field.replace(/([A-Z])/g, ' $1')}: ${errors[field]}`
      ).join('\n');
      
      alert(`⚠️ Please fix errors in ${STEP_TITLES[step]}:\n\n${errorList}`);
      
      const firstErrorField = Object.keys(errors)[0];
      const element = document.querySelector(`[name="${firstErrorField}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      return;
    }
    
    setValidationErrors({});
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    setValidationErrors({});
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentSuccess = async (paymentResponse) => {
    try {
      setIsSubmitting(true);
      
      console.log('✅ Payment successful:', paymentResponse);
      
      const verifyResult = await ApiService.verifyPayment(paymentResponse);
      
      if (!verifyResult.success) {
        throw new Error('Payment verification failed');
      }

      console.log('✅ Payment verified');

      const agreementResult = await ApiService.submitAgreement(formData, paymentResponse);

      console.log('✅ Agreement submitted:', agreementResult);

      const emailResult = await ApiService.sendEmail(formData.email, {
        agreementText: FlatgenerateAgreementText(formData),
        agreementId: agreementResult.agreementId
      });

      console.log('✅ Email sent:', emailResult);

      alert(`✅ Success!\n\nPayment ID: ${paymentResponse.paymentId}\nAgreement ID: ${agreementResult.agreementId}\n\nAgreement sent to ${formData.email}`);
      
    } catch (error) {
      console.error('❌ Error:', error);
      
      const errorMsg = error.response?.data?.message || error.message || 'An error occurred';
      alert(`❌ Error: ${errorMsg}\n\nPayment successful but issue occurred.\nPayment ID: ${paymentResponse.paymentId}\n\nContact support.`);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentFailure = (error) => {
    console.error('❌ Payment failed:', error);
    setIsSubmitting(false);
    
    let errorMsg = 'Payment failed. Please try again.';
    
    if (error.error === 'PAYMENT_CANCELLED') {
      errorMsg = 'Payment cancelled. You can try again.';
    } else if (error.error === 'SDK_LOAD_FAILED') {
      errorMsg = 'Payment gateway failed to load.';
    } else if (error.message) {
      errorMsg = error.message;
    }
    
    alert(`⚠️ ${errorMsg}`);
  };

  const handleSubmit = async () => {
    const errors = validateStep(step);
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      alert(`⚠️ Please fill all required fields correctly`);
      return;
    }

    try {
      setIsSubmitting(true);
      
      console.log('💾 Saving draft...');
      await ApiService.saveDraft(formData);
      console.log('✅ Draft saved');
      
    } catch (error) {
      console.error('⚠️ Draft save failed:', error);
    } finally {
      setIsSubmitting(false);
    }

    console.log('💳 Initiating payment...');
    PaymentService.initiatePayment(
      99, 
      formData,
      handlePaymentSuccess,
      handlePaymentFailure
    );
  };

  const highlightText = (text) => {
    if (!activeField || !formData[activeField]) return text;
    const value = formData[activeField];
    
    if (!value || value.length === 0) return text;
    
    const valueStr = Array.isArray(value) ? value.join(', ') : String(value);
    
    if (!valueStr || valueStr === '____________' || valueStr.trim().length < 2 || valueStr.startsWith('data:image')) {
      return text;
    }
    
    const escapedValue = valueStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    try {
      const regex = new RegExp(`\\b(${escapedValue})\\b`, 'gi');
      if (!regex.test(text)) return text;
      regex.lastIndex = 0;
      return text.replace(regex, (match) => 
        `<mark class="bg-yellow-300 text-black font-semibold px-1 rounded animate-pulse">${match}</mark>`
      );
    } catch (error) {
      return text;
    }
  };

  const handleFocus = (field) => {
    if (formData[field]) setActiveField(field);
  };

  const handleBlur = () => {
    setTimeout(() => setActiveField(null), 500);
  };

  const agreementText = FlatgenerateAgreementText(formData);
  const highlightedAgreement = highlightText(agreementText);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto mt-20">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Flat Rental Agreement Generator
          </h1>
          <p className="text-gray-600 mt-2">Create professional rental agreement in minutes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Form Panel */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 shadow-xl h-fit">
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Step {step} of 5 - {STEP_TITLES[step]}
              </h2>
              <div className="relative">
                <div className="w-full bg-purple-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-blue-600 h-full transition-all duration-500"
                       style={{ width: `${step * 20}%` }} />
                </div>
                <span className="absolute -top-1 text-xs font-bold text-purple-700" style={{ left: `${step * 20}%`, transform: 'translateX(-50%)' }}>
                  {step * 20}%
                </span>
              </div>
            </div>

            <div className="space-y-5">
              {step === 1 && (
                <>
                  <Input label="Select State" name="state" options={INDIAN_STATES} value={formData.state} onChange={handleChange} onFocus={() => handleFocus('state')} onBlur={handleBlur} isActive={activeField === 'state'} error={validationErrors.state} />
                  <Input label="Place of Execution" name="placeOfExecution" placeholder="City/Town" value={formData.placeOfExecution} onChange={handleChange} onFocus={() => handleFocus('placeOfExecution')} onBlur={handleBlur} isActive={activeField === 'placeOfExecution'} error={validationErrors.placeOfExecution} />
                  <Input label="Agreement Date" name="agreementDate" type="date" value={formData.agreementDate} onChange={handleChange} onFocus={() => handleFocus('agreementDate')} onBlur={handleBlur} isActive={activeField === 'agreementDate'} error={validationErrors.agreementDate} />
                  <Input label="Owner's Full Name" name="ownerName" placeholder="Full Name" value={formData.ownerName} onChange={handleChange} onFocus={() => handleFocus('ownerName')} onBlur={handleBlur} isActive={activeField === 'ownerName'} error={validationErrors.ownerName} />
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Relation" name="ownerRelation" options={['S/o', 'D/o', 'W/o']} value={formData.ownerRelation} onChange={handleChange} onFocus={() => handleFocus('ownerRelation')} onBlur={handleBlur} isActive={activeField === 'ownerRelation'} error={validationErrors.ownerRelation} />
                    <Input label="Father's/Husband's Name" name="ownerRelatedName" placeholder="Name" value={formData.ownerRelatedName} onChange={handleChange} onFocus={() => handleFocus('ownerRelatedName')} onBlur={handleBlur} isActive={activeField === 'ownerRelatedName'} error={validationErrors.ownerRelatedName} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Age (18+)" name="ownerAge" type="number" placeholder="Age" value={formData.ownerAge} onChange={handleChange} onFocus={() => handleFocus('ownerAge')} onBlur={handleBlur} isActive={activeField === 'ownerAge'} error={validationErrors.ownerAge} />
                    <Input label="Occupation" name="ownerOccupation" placeholder="Optional" required={false} value={formData.ownerOccupation} onChange={handleChange} onFocus={() => handleFocus('ownerOccupation')} onBlur={handleBlur} isActive={activeField === 'ownerOccupation'} />
                  </div>
                  <Input label="Owner Address" name="ownerAddress" rows={3} placeholder="Full Address" value={formData.ownerAddress} onChange={handleChange} onFocus={() => handleFocus('ownerAddress')} onBlur={handleBlur} isActive={activeField === 'ownerAddress'} error={validationErrors.ownerAddress} />
                  <Input label="PAN Number" name="ownerPan" placeholder="ABCDE1234F" value={formData.ownerPan} onChange={handleChange} onFocus={() => handleFocus('ownerPan')} onBlur={handleBlur} isActive={activeField === 'ownerPan'} error={validationErrors.ownerPan} />
                  <Input label="Aadhaar Number" name="ownerAadhaar" placeholder="12 digits" value={formData.ownerAadhaar} onChange={handleChange} onFocus={() => handleFocus('ownerAadhaar')} onBlur={handleBlur} isActive={activeField === 'ownerAadhaar'} error={validationErrors.ownerAadhaar} />
                  <Input label="Contact Number" name="ownerContact" type="tel" placeholder="10 digits" value={formData.ownerContact} onChange={handleChange} onFocus={() => handleFocus('ownerContact')} onBlur={handleBlur} isActive={activeField === 'ownerContact'} error={validationErrors.ownerContact} />
                  <PhotoUpload label="Owner Photo" name="ownerPhoto" value={formData.ownerPhoto} onChange={handlePhotoUpload} required={true} isActive={activeField === 'ownerPhoto'} error={validationErrors.ownerPhoto} />
                </>
              )}

              {step === 2 && (
                <>
                  <Input label="Tenant's Full Name" name="tenantName" placeholder="Full Name" value={formData.tenantName} onChange={handleChange} onFocus={() => handleFocus('tenantName')} onBlur={handleBlur} isActive={activeField === 'tenantName'} error={validationErrors.tenantName} />
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Relation" name="tenantRelation" options={['S/o', 'D/o', 'W/o']} value={formData.tenantRelation} onChange={handleChange} onFocus={() => handleFocus('tenantRelation')} onBlur={handleBlur} isActive={activeField === 'tenantRelation'} error={validationErrors.tenantRelation} />
                    <Input label="Father's/Husband's Name" name="tenantRelatedName" placeholder="Name" value={formData.tenantRelatedName} onChange={handleChange} onFocus={() => handleFocus('tenantRelatedName')} onBlur={handleBlur} isActive={activeField === 'tenantRelatedName'} error={validationErrors.tenantRelatedName} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Age (18+)" name="tenantAge" type="number" placeholder="Age" value={formData.tenantAge} onChange={handleChange} onFocus={() => handleFocus('tenantAge')} onBlur={handleBlur} isActive={activeField === 'tenantAge'} error={validationErrors.tenantAge} />
                    <Input label="Occupation" name="tenantOccupation" placeholder="Optional" required={false} value={formData.tenantOccupation} onChange={handleChange} onFocus={() => handleFocus('tenantOccupation')} onBlur={handleBlur} isActive={activeField === 'tenantOccupation'} />
                  </div>
                  <Input label="Tenant Address" name="tenantAddress" rows={3} placeholder="Full Address" value={formData.tenantAddress} onChange={handleChange} onFocus={() => handleFocus('tenantAddress')} onBlur={handleBlur} isActive={activeField === 'tenantAddress'} error={validationErrors.tenantAddress} />
                  <Input label="PAN Number" name="tenantPan" placeholder="ABCDE1234F" value={formData.tenantPan} onChange={handleChange} onFocus={() => handleFocus('tenantPan')} onBlur={handleBlur} isActive={activeField === 'tenantPan'} error={validationErrors.tenantPan} />
                  <Input label="Aadhaar Number" name="tenantAadhaar" placeholder="12 digits" value={formData.tenantAadhaar} onChange={handleChange} onFocus={() => handleFocus('tenantAadhaar')} onBlur={handleBlur} isActive={activeField === 'tenantAadhaar'} error={validationErrors.tenantAadhaar} />
                  <Input label="Contact Number" name="tenantContact" type="tel" placeholder="10 digits" value={formData.tenantContact} onChange={handleChange} onFocus={() => handleFocus('tenantContact')} onBlur={handleBlur} isActive={activeField === 'tenantContact'} error={validationErrors.tenantContact} />
                  <PhotoUpload label="Tenant Photo" name="tenantPhoto" value={formData.tenantPhoto} onChange={handlePhotoUpload} required={true} isActive={activeField === 'tenantPhoto'} error={validationErrors.tenantPhoto} />
                </>
              )}

              {step === 3 && (
                <>
                  <Input label="Property Address" name="propertyAddress" rows={3} placeholder="Complete flat address" value={formData.propertyAddress} onChange={handleChange} onFocus={() => handleFocus('propertyAddress')} onBlur={handleBlur} isActive={activeField === 'propertyAddress'} error={validationErrors.propertyAddress} />
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Area (Sqft)" name="propertyArea" placeholder="e.g., 1200" required={false} value={formData.propertyArea} onChange={handleChange} onFocus={() => handleFocus('propertyArea')} onBlur={handleBlur} isActive={activeField === 'propertyArea'} />
                    <Input label="PIN Code" name="propertyPincode" placeholder="e.g., 110001" required={false} value={formData.propertyPincode} onChange={handleChange} onFocus={() => handleFocus('propertyPincode')} onBlur={handleBlur} isActive={activeField === 'propertyPincode'} />
                  </div>
                  <Input label="City" name="propertyCity" placeholder="City" required={false} value={formData.propertyCity} onChange={handleChange} onFocus={() => handleFocus('propertyCity')} onBlur={handleBlur} isActive={activeField === 'propertyCity'} />
                  <Input label="Monthly Rent (₹)" name="monthlyRent" type="number" placeholder="15000" value={formData.monthlyRent} onChange={handleChange} onFocus={() => handleFocus('monthlyRent')} onBlur={handleBlur} isActive={activeField === 'monthlyRent'} error={validationErrors.monthlyRent} />
                  <Input label="Monthly Rent in Words" name="monthlyRentWords" placeholder="Fifteen Thousand Only" value={formData.monthlyRentWords} onChange={handleChange} onFocus={() => handleFocus('monthlyRentWords')} onBlur={handleBlur} isActive={activeField === 'monthlyRentWords'} error={validationErrors.monthlyRentWords} />
                  <Input label="Maintenance Charges (₹)" name="maintenanceCharges" type="number" placeholder="2000" value={formData.maintenanceCharges} onChange={handleChange} onFocus={() => handleFocus('maintenanceCharges')} onBlur={handleBlur} isActive={activeField === 'maintenanceCharges'} error={validationErrors.maintenanceCharges} />
                  <Input label="Rent Payment Day" name="rentPayDay" type="number" placeholder="5" value={formData.rentPayDay} onChange={handleChange} onFocus={() => handleFocus('rentPayDay')} onBlur={handleBlur} isActive={activeField === 'rentPayDay'} error={validationErrors.rentPayDay} />
                  <Input label="Security Deposit (₹)" name="securityDeposit" type="number" placeholder="30000" value={formData.securityDeposit} onChange={handleChange} onFocus={() => handleFocus('securityDeposit')} onBlur={handleBlur} isActive={activeField === 'securityDeposit'} error={validationErrors.securityDeposit} />
                  <Input label="Security Deposit in Words" name="securityDepositWords" placeholder="Thirty Thousand Only" value={formData.securityDepositWords} onChange={handleChange} onFocus={() => handleFocus('securityDepositWords')} onBlur={handleBlur} isActive={activeField === 'securityDepositWords'} error={validationErrors.securityDepositWords} />
                </>
              )}

              {step === 4 && (
                <>
                  <Input label="Payment Method" name="paymentMethod" options={['Cash', 'Cheque', 'Bank Transfer', 'UPI']} value={formData.paymentMethod} onChange={handleChange} onFocus={() => handleFocus('paymentMethod')} onBlur={handleBlur} isActive={activeField === 'paymentMethod'} error={validationErrors.paymentMethod} />
                  <Input label="Payment Mode" name="paymentMode" options={['Monthly', 'Quarterly', 'Half-Yearly', 'Yearly']} value={formData.paymentMode} onChange={handleChange} onFocus={() => handleFocus('paymentMode')} onBlur={handleBlur} isActive={activeField === 'paymentMode'} error={validationErrors.paymentMode} />
                  <Input label="Duration (months)" name="duration" type="number" placeholder="11" value={formData.duration} onChange={handleChange} onFocus={() => handleFocus('duration')} onBlur={handleBlur} isActive={activeField === 'duration'} error={validationErrors.duration} />
                  <Input label="Commencement Date" name="commenceDate" type="date" value={formData.commenceDate} onChange={handleChange} onFocus={() => handleFocus('commenceDate')} onBlur={handleBlur} isActive={activeField === 'commenceDate'} error={validationErrors.commenceDate} />
                  <Input label="End Date" name="endDate" type="date" value={formData.endDate} onChange={handleChange} onFocus={() => handleFocus('endDate')} onBlur={handleBlur} isActive={activeField === 'endDate'} error={validationErrors.endDate} />
                  <Input label="Notice Period (months)" name="noticePeriod" type="number" placeholder="1" value={formData.noticePeriod} onChange={handleChange} onFocus={() => handleFocus('noticePeriod')} onBlur={handleBlur} isActive={activeField === 'noticePeriod'} error={validationErrors.noticePeriod} />
                  <Input label="Lock-in Period (months)" name="lockInPeriod" type="number" placeholder="3" value={formData.lockInPeriod} onChange={handleChange} onFocus={() => handleFocus('lockInPeriod')} onBlur={handleBlur} isActive={activeField === 'lockInPeriod'} error={validationErrors.lockInPeriod} />
                  <Input label="Default Period (months)" name="defaultPeriod" type="number" placeholder="2" value={formData.defaultPeriod} onChange={handleChange} onFocus={() => handleFocus('defaultPeriod')} onBlur={handleBlur} isActive={activeField === 'defaultPeriod'} error={validationErrors.defaultPeriod} />
                  <Input label="Rent Increment (%)" name="rentIncrement" type="number" placeholder="5" value={formData.rentIncrement} onChange={handleChange} onFocus={() => handleFocus('rentIncrement')} onBlur={handleBlur} isActive={activeField === 'rentIncrement'} error={validationErrors.rentIncrement} />
                  <Input label="Interest Rate (% per month)" name="interestRate" type="number" placeholder="2" required={false} value={formData.interestRate} onChange={handleChange} onFocus={() => handleFocus('interestRate')} onBlur={handleBlur} isActive={activeField === 'interestRate'} />
                  <Input label="Purpose" name="purpose" options={['Residential', 'Commercial']} value={formData.purpose} onChange={handleChange} onFocus={() => handleFocus('purpose')} onBlur={handleBlur} isActive={activeField === 'purpose'} error={validationErrors.purpose} />
                  <Input label="Stamp Duty By" name="stampDutyBy" options={['Landlord', 'Tenant', 'Shared']} value={formData.stampDutyBy} onChange={handleChange} onFocus={() => handleFocus('stampDutyBy')} onBlur={handleBlur} isActive={activeField === 'stampDutyBy'} error={validationErrors.stampDutyBy} />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-3">Fittings & Fixtures:</label>
                    <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto p-4 bg-gray-50 rounded-lg border-2 border-gray-300">
                      {FITTINGS_OPTIONS.map(fitting => {
                        const isChecked = formData.fittings.includes(fitting);
                        return (
                          <label key={fitting} className={`flex items-center space-x-2 cursor-pointer p-2 rounded transition-all ${
                            isChecked ? 'bg-green-100 border border-green-400' : 'hover:bg-purple-50'
                          }`}>
                            <input type="checkbox" checked={isChecked} onChange={() => toggleFitting(fitting)} 
                                   className="w-4 h-4 text-purple-600 border-gray-300 rounded" />
                            <span className={`text-sm ${isChecked ? 'font-semibold text-green-800' : 'text-gray-700'}`}>{fitting}</span>
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
                    <h3 className="font-bold text-gray-800 mb-3">Witness 1 (Optional)</h3>
                    <div className="space-y-3">
                      <Input label="Name" name="witness1Name" placeholder="Full name" required={false} value={formData.witness1Name} onChange={handleChange} onFocus={() => handleFocus('witness1Name')} onBlur={handleBlur} isActive={activeField === 'witness1Name'} />
                      <Input label="Address" name="witness1Address" rows={2} placeholder="Address" required={false} value={formData.witness1Address} onChange={handleChange} onFocus={() => handleFocus('witness1Address')} onBlur={handleBlur} isActive={activeField === 'witness1Address'} />
                      <Input label="PAN" name="witness1PAN" placeholder="ABCDE1234F" required={false} value={formData.witness1PAN} onChange={handleChange} onFocus={() => handleFocus('witness1PAN')} onBlur={handleBlur} isActive={activeField === 'witness1PAN'} />
                      <Input label="Aadhaar" name="witness1Aadhaar" placeholder="12 digits" required={false} value={formData.witness1Aadhaar} onChange={handleChange} onFocus={() => handleFocus('witness1Aadhaar')} onBlur={handleBlur} isActive={activeField === 'witness1Aadhaar'} error={validationErrors.witness1Aadhaar} />
                      <Input label="Contact" name="witness1Contact" type="tel" placeholder="10 digits" required={false} value={formData.witness1Contact} onChange={handleChange} onFocus={() => handleFocus('witness1Contact')} onBlur={handleBlur} isActive={activeField === 'witness1Contact'} error={validationErrors.witness1Contact} />
                      <PhotoUpload label="Photo" name="witness1Photo" value={formData.witness1Photo} onChange={handlePhotoUpload} required={false} isActive={activeField === 'witness1Photo'} />
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                    <h3 className="font-bold text-gray-800 mb-3">Witness 2 (Optional)</h3>
                    <div className="space-y-3">
                      <Input label="Name" name="witness2Name" placeholder="Full name" required={false} value={formData.witness2Name} onChange={handleChange} onFocus={() => handleFocus('witness2Name')} onBlur={handleBlur} isActive={activeField === 'witness2Name'} />
                      <Input label="Address" name="witness2Address" rows={2} placeholder="Address" required={false} value={formData.witness2Address} onChange={handleChange} onFocus={() => handleFocus('witness2Address')} onBlur={handleBlur} isActive={activeField === 'witness2Address'} />
                      <Input label="PAN" name="witness2PAN" placeholder="ABCDE1234F" required={false} value={formData.witness2PAN} onChange={handleChange} onFocus={() => handleFocus('witness2PAN')} onBlur={handleBlur} isActive={activeField === 'witness2PAN'} />
                      <Input label="Aadhaar" name="witness2Aadhaar" placeholder="12 digits" required={false} value={formData.witness2Aadhaar} onChange={handleChange} onFocus={() => handleFocus('witness2Aadhaar')} onBlur={handleBlur} isActive={activeField === 'witness2Aadhaar'} error={validationErrors.witness2Aadhaar} />
                      <Input label="Contact" name="witness2Contact" type="tel" placeholder="10 digits" required={false} value={formData.witness2Contact} onChange={handleChange} onFocus={() => handleFocus('witness2Contact')} onBlur={handleBlur} isActive={activeField === 'witness2Contact'} error={validationErrors.witness2Contact} />
                      <PhotoUpload label="Photo" name="witness2Photo" value={formData.witness2Photo} onChange={handlePhotoUpload} required={false} isActive={activeField === 'witness2Photo'} />
                    </div>
                  </div>

                  <Input label="Email for Agreement" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} onFocus={() => handleFocus('email')} onBlur={handleBlur} isActive={activeField === 'email'} error={validationErrors.email} />

                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-2 border-purple-300">
                    <h3 className="font-bold text-gray-800 mb-4 text-lg">📄 Draft Price</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Agreement Draft</span>
                        <span className="font-semibold">₹99.00 x 1</span>
                      </div>
                      <div className="border-t-2 border-purple-300 pt-3 flex justify-between items-center">
                        <span className="font-bold text-lg">Total:</span>
                        <span className="font-bold text-purple-600 text-2xl">₹99.00</span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-between pt-6 gap-4">
                {step > 1 && (
                  <button onClick={handlePrevious} disabled={isSubmitting}
                    className="px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-lg transition-all disabled:opacity-50">
                    ← Previous
                  </button>
                )}
                {step < 5 ? (
                  <button onClick={handleNext} disabled={isSubmitting}
                    className="ml-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all disabled:opacity-50">
                    Next →
                  </button>
                ) : (
                  <button onClick={handleSubmit} disabled={isSubmitting}
                    className="ml-auto px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-lg shadow-lg transition-all disabled:opacity-50 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>🎉 Generate Agreement</>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[calc(100vh-2rem)] lg:sticky lg:top-4 border-2 border-gray-200">
            {/* <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4">
              <h2 className="text-xl font-bold">📄 Live Preview</h2>
              <p className="text-sm text-purple-100 mt-1">Updates in real-time</p>
            </div> */}
            <div className="flex-1 overflow-y-auto">
              <div className="prose max-w-none">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="text-center mb-6 pb-4 border-b-2 border-gray-300">
                    <h1 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                      FLAT RENTAL AGREEMENT
                    </h1>
                  </div>
                  
                  <pre ref={previewRef} className="font-sans text-sm leading-relaxed whitespace-pre-wrap text-gray-800"
                       dangerouslySetInnerHTML={{ __html: highlightedAgreement }} />
                  
                  <div className="mt-8 space-y-4">
                    <div className="pt-4 border-t-2 border-gray-300">
                      <h3 className="text-center font-bold text-black text-base mb-4 uppercase">
                        PARTIES DETAILS & SIGNATURES
                      </h3>
                    </div>

                    <SignatureTable title="LANDLORD DETAILS" activeField={activeField} highlightText={highlightText}
                      data={{
                        'Name': formatValue(formData.ownerName),
                        'Address': formatValue(formData.ownerAddress),
                        'PAN': formatValue(formData.ownerPan),
                        'Aadhaar': formatValue(formData.ownerAadhaar),
                        'Contact': formatValue(formData.ownerContact),
                        'Photo': formData.ownerPhoto,
                        'Signature': ''
                      }} />

                    <SignatureTable title="TENANT DETAILS" activeField={activeField} highlightText={highlightText}
                      data={{
                        'Name': formatValue(formData.tenantName),
                        'Address': formatValue(formData.tenantAddress),
                        'PAN': formatValue(formData.tenantPan),
                        'Aadhaar': formatValue(formData.tenantAadhaar),
                        'Contact': formatValue(formData.tenantContact),
                        'Photo': formData.tenantPhoto,
                        'Signature': ''
                      }} />

                    {(formData.witness1Name || formData.witness1Address) && (
                      <SignatureTable title="WITNESS (I) DETAILS" activeField={activeField} highlightText={highlightText}
                        data={{
                          'Name': formatValue(formData.witness1Name),
                          'Address': formatValue(formData.witness1Address),
                          'PAN': formatValue(formData.witness1PAN),
                          'Aadhaar': formatValue(formData.witness1Aadhaar),
                          'Contact': formatValue(formData.witness1Contact),
                          'Photo': formData.witness1Photo,
                          'Signature': ''
                        }} />
                    )}

                    {(formData.witness2Name || formData.witness2Address) && (
                      <SignatureTable title="WITNESS (II) DETAILS" activeField={activeField} highlightText={highlightText}
                        data={{
                          'Name': formatValue(formData.witness2Name),
                          'Address': formatValue(formData.witness2Address),
                          'PAN': formatValue(formData.witness2PAN),
                          'Aadhaar': formatValue(formData.witness2Aadhaar),
                          'Contact': formatValue(formData.witness2Contact),
                          'Photo': formData.witness2Photo,
                          'Signature': ''
                        }} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}