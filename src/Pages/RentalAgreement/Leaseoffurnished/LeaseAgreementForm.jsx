import { useState, useRef } from 'react';

// Import from actual services - update paths as needed
// import { FurnishedLeaseGenerateAgreementText } from '../../../utils/DocumentData';
import PaymentService from '../../../services/Payment';
import ApiService from '../../../api/api';

// Mock function for agreement text generation
const FurnishedLeaseGenerateAgreementText = (data) => {
  const f = (text) => text || '____________';
  
  return `FURNISHED HOUSE LEASE AGREEMENT

This Furnished House Lease Agreement is executed at ${f(data.executionPlace)} on this ${f(data.executionDate)}

BY AND BETWEEN:-

Mr. / Mrs. ${f(data.lessorName)} ${f(data.lessorRelation)} ${f(data.lessorRelatedName)}, aged about ${f(data.lessorAge)} years, Occ: ${f(data.lessorOccupation)}, Address: ${f(data.lessorAddress)}.

HEREINAFTER called the "Lessor" (which term unless repugnant to the context shall mean and include their heirs, executors, administrators, legal representatives and assigns etc.) of the ONE (First) PART.

AND:-

Mr. / Mrs. ${f(data.lesseeName)} ${f(data.lesseeRelation)} ${f(data.lesseeRelatedName)}, aged about ${f(data.lesseeAge)} years, Occ: ${f(data.lesseeOccupation)}, Address: ${f(data.lesseeAddress)}.

HEREINAFTER called the "Lessee" (which term unless repugnant to the context shall mean and include their heirs, executors, administrators, legal representatives and assigns etc.) of the OTHER (Second) PART.

WHEREAS the "Lessor" is the absolute owner and in possession of the Residential Property ${f(data.propertyAddress)}, (admeasuring approximately ${f(data.propertyArea)}), PIN Code ${f(data.propertyPincode)}, City ${f(data.propertyCity)}, ${f(data.propertyState)}, India more fully described in the schedule annexed to this Lease Agreement, hereinafter referred to as the Schedule Property.

AND WHEREAS at the request of Lessee, the Lessor has hereby agreed to let out the above mentioned Schedule Property, to the Lessee on the following agreed terms and conditions contained hereunder.

The Lessor and the Lessee shall hereinafter be individually referred to as 'Party' and collectively as 'Parties'.

AND WHEREAS it was mutually considered expedient to reduce the said terms and conditions into writing

NOW THIS INDENTURE WITNESSETH the Lease Agreement between the Parties there to as follows:

1. DURATION: The Lessor hereby agrees to grant and the Lessee hereby agrees to accept this Lease Agreement of the Schedule property for a period of ${f(data.duration)} Months only commencing from ${f(data.commenceDate)} to ${f(data.endDate)} both days inclusive on the terms and conditions hereinafter contained.

2. NATURE OF USE PERMITTED: The Lessee shall not use or permit the use of the schedule property for any other activity/purpose other than the purpose of this agreement (${f(data.purpose)} purpose only) and shall abide by all the bye-laws, rules and regulation, of the local authorities in respect of the Schedule Property and shall not do any illegal activities in the said Schedule Property.

3. MONTHLY LEASE RENT: The rent payable per month by the Lessee for the Schedule Property shall be Rs. ${f(data.monthlyRent)}/- per month (being in terms of English calendar months) excluding other charges. The rent is payable by way of ${f(data.paymentMethod)} on or before ${f(data.rentPayDay)} of every month.

(A) Lessor or its Agent shall, on receipt of payment towards rent and other charges payable within the stipulated period as in this lease from the Lessee, provide forthwith against acknowledgement, a duly signed receipt for the amount received by it.

(B) The Lessee, if applicable, shall pay to the relevant authority, the monthly maintenance charges Rs. ${f(data.maintenanceCharges)}/- for the Schedule property.

(C) Provided that where the payment of rent or other charges is made by the Lessee to the Lessor through electronic mode, the bank acknowledgment thereof shall be conclusive proof of such payment.

4. SECURITY DEPOSIT: The Lessee has paid a sum of Rs. ${f(data.securityDeposit)}/- to the Lessor being the Security Deposit towards the Lease of the Schedule Property. The Security deposited is paid via ${f(data.paymentMethod)}.

The deposit is intended to be a deposit for the due compliance by the Lessee of its obligations hereunder. The said amount shall be held by the Lessor as security deposit during the continuance of this Lease and shall be fully refunded only to the Lessee, free of interest, subject to the handing over the Schedule leased property, at the time of delivery of the vacant possession of the Schedule property by the Lessee to the Lessor, on termination of this Lease Agreement or on sooner determination subject to deduction of any arrears of rent, damages to the Schedule Property.

In case the Lessor fails to refund the security deposit to the Lessee on early termination or expiry of this Lease agreement, the Lessee is entitled to hold possession of the Schedule Property, without payment of monthly rent and/or any other charges whatsoever, till such time the Lessor refunds the security deposit to the Lessee.

If the lessor fails to make any refund, he shall be liable to pay simple interest to the lessee at ${f(data.interestRate)}% monthly on the amount which he has omitted or failed to refund.

5. ELECTRICITY CHARGES: The Lessee shall pay directly to the concerned authority or building authorities, all electricity charges for the electricity and power consumed for Lessee's own use as per the actual meter reading of the meter provided exclusively for the Schedule property.

6. WATER CHARGES: The Lessee shall pay directly to the concerned authority or building authorities, Water charges for Lessee's own use as per the proportionate consumption of the meter exclusively for the Schedule property.

7. TERMINATION OF THE LEASE: In case the Tenant is in default of payment of monthly rent for a continuous period of ${f(data.defaultPeriod)} months, the Lessor may terminate the Lease. If either party would like to terminate the Lease, they should provide at least ${f(data.noticePeriod)} month prior notice.

8. LOCK IN PERIOD: This Lease agreement shall have a lock in period of ${f(data.lockInPeriod)} months before which termination of this Agreement is not possible by either of the parties.

9. RENT INCREMENT: The rent shall be increased by ${f(data.rentIncrement)}% annually.

10. ITEMS/UTILITIES LIST:
Fittings, Appliances and Furnishings:
${data.fittings.join(', ') || 'None specified'}

11. STAMP DUTY: The stamp duty, registration charges shall be borne by ${f(data.stampDutyBy)}.

That both the parties have read over and understood all the contents of this agreement and have signed the same without any force or pressure from any side.

IN WITNESS WHEREOF the Lessor and the Lessee have hereunto subscribed their hand at ${f(data.executionPlace)} on this the ${f(data.executionDate)}.`;
};



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

export default function FurnishedLeaseAgreementForm() {
  const [step, setStep] = useState(1);
  const [activeField, setActiveField] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const previewRef = useRef(null);
  
  const [formData, setFormData] = useState({
    state: '', executionPlace: '', executionDate: '',
    lessorName: '', lessorRelation: '', lessorRelatedName: '',
    lessorAddress: '', lessorAadhaar: '', lessorPan: '', lessorAge: '', lessorOccupation: '',
    lessorContact: '', lessorPhoto: null,
    lesseeName: '', lesseeRelation: '', lesseeRelatedName: '',
    lesseeAddress: '', lesseeAadhaar: '', lesseePan: '', lesseeAge: '', lesseeOccupation: '',
    lesseeContact: '', lesseePhoto: null,
    propertyAddress: '', propertyArea: '', propertyPincode: '', propertyCity: '', propertyState: '',
    monthlyRent: '', maintenanceCharges: '', rentPayDay: '', securityDeposit: '',
    paymentMethod: '', duration: '', commenceDate: '', endDate: '',
    noticePeriod: '', rentIncrement: '', purpose: '', email: '',
    defaultPeriod: '2', lockInPeriod: '3', interestRate: '2',
    stampDutyBy: 'Landlord',
    fittings: [],
    witness1Name: '', witness1Address: '', witness1Aadhaar: '', witness1Contact: '', witness1Photo: null,
    witness2Name: '', witness2Address: '', witness2Aadhaar: '', witness2Contact: '', witness2Photo: null
  });

  const validateStep = (currentStep) => {
    const requiredFields = {
      1: ['state', 'lessorName', 'lessorRelation', 'lessorRelatedName', 'lessorAge', 'lessorAddress', 'lessorPan', 'lessorAadhaar', 'lessorContact'],
      2: ['lesseeName', 'lesseeRelation', 'lesseeRelatedName', 'lesseeAge', 'lesseeAddress', 'lesseePan', 'lesseeAadhaar', 'lesseeContact'],
      3: ['propertyAddress', 'monthlyRent', 'maintenanceCharges', 'rentPayDay', 'securityDeposit'],
      4: ['paymentMethod', 'duration', 'commenceDate', 'endDate', 'noticePeriod', 'purpose'],
      5: ['email']
    };

    const fields = requiredFields[currentStep] || [];
    const missingFields = fields.filter(field => !isFilled(formData[field]));
    
    if (missingFields.length > 0) {
      alert(`Please fill all required fields: ${missingFields.join(', ')}`);
      return false;
    }
    return true;
  };

  const handlePayment = async () => {
    if (!validateStep(5)) return;

    setIsProcessing(true);
    setPaymentStatus('processing');

    try {
      const paymentData = {
        amount: 99.00,
        currency: 'INR',
        email: formData.email,
        description: 'Furnished House Lease Agreement Draft',
        agreementData: formData
      };

      const paymentResponse = await PaymentService.initiatePayment(paymentData);
      
      if (paymentResponse.success) {
        setPaymentStatus('success');
        
        const agreementResponse = await ApiService.generateAgreement({
          ...formData,
          orderId: paymentResponse.orderId,
          agreementText: FurnishedLeaseGenerateAgreementText(formData)
        });

        if (agreementResponse.success) {
          alert(`Payment successful! Agreement generated with ID: ${agreementResponse.documentId}\nA copy has been sent to ${formData.email}`);
        }
      } else {
        setPaymentStatus('failed');
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('failed');
      alert('An error occurred during payment. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
    if (!formData.fittings.includes(fitting) || formData.fittings.length > 0) {
      setActiveField('fittings');
    }
  };

  const highlightText = (text) => {
    if (!activeField || !formData[activeField]) return text;
    
    const value = formData[activeField];
    if (!value || value.length === 0) return text;
    
    const valueStr = Array.isArray(value) ? value.join(', ') : String(value);
    if (!valueStr || valueStr === '____________' || valueStr.trim().length < 2) return text;
    
    const escapedValue = valueStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b(${escapedValue})\\b`, 'gi');
    
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
    1: 'Lessor (Owner) Details',
    2: 'Lessee (Tenant) Details',
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

        <div className="border border-black">
          <div className="border-b border-black px-3 py-2 font-bold uppercase text-sm">
            LESSOR (LANDLORD) DETAILS
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold w-1/3 border-r border-black">Name:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.lessorName)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Address:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.lessorAddress)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">PAN Card Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.lessorPan)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Aadhaar Card Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.lessorAadhaar)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Contact Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.lessorContact)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Photo:</td>
                <td className="px-3 py-2">
                  {formData.lessorPhoto ? (
                    <img src={formData.lessorPhoto} alt="Lessor" className={`w-12 h-12 object-cover border border-black ${activeField === 'lessorPhoto' ? 'ring-4 ring-yellow-300' : ''}`} />
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

        <div className="border border-black mt-4">
          <div className="border-b border-black px-3 py-2 font-bold uppercase text-sm">
            LESSEE (TENANT) DETAILS
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold w-1/3 border-r border-black">Name:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.lesseeName)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Address:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.lesseeAddress)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">PAN Card Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.lesseePan)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Aadhaar Card Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.lesseeAadhaar)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Contact Number:</td>
                <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.lesseeContact)) }}></td>
              </tr>
              <tr className="border-b border-black">
                <td className="px-3 py-2 font-semibold border-r border-black">Photo:</td>
                <td className="px-3 py-2">
                  {formData.lesseePhoto ? (
                    <img src={formData.lesseePhoto} alt="Lessee" className={`w-12 h-12 object-cover border border-black ${activeField === 'lesseePhoto' ? 'ring-4 ring-yellow-300' : ''}`} />
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

        {(formData.witness1Name || formData.witness2Name) && (
          <>
            {formData.witness1Name && (
              <div className="border border-black mt-4">
                <div className="border-b border-black px-3 py-2 font-bold uppercase text-sm">
                  WITNESS (I) DETAILS
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-black">
                      <td className="px-3 py-2 font-semibold w-1/3 border-r border-black">Name:</td>
                      <td className="px-3 py-2" dangerouslySetInnerHTML={{ __html: highlightText(format(formData.witness2Contact)) }}></td>
                    </tr>
                    {formData.witness2Photo && (
                      <tr className="border-b border-black">
                        <td className="px-3 py-2 font-semibold border-r border-black">Photo:</td>
                        <td className="px-3 py-2">
                          <img src={formData.witness2Photo} alt="Witness 2" className={`w-12 h-12 object-cover border border-black ${activeField === 'witness2Photo' ? 'ring-4 ring-yellow-300' : ''}`} />
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td className="px-3 py-2 font-semibold border-r border-black">Signature/Thumb:</td>
                      <td className="px-3 py-8"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  const agreementText = FurnishedLeaseGenerateAgreementText(formData);
  const highlightedAgreement = highlightText(agreementText);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Furnished House Lease Agreement Generator
          </h1>
          <p className="text-gray-600 mt-2">Create your professional lease agreement in minutes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 shadow-xl h-fit">
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

            <div className="space-y-5">
              {step === 1 && (
                <>
                  <Input label="Select State of the Rented Property" name="state" options={indianStates} />
                  <Input label="Lessor's Name" name="lessorName" placeholder="Enter the Name of the lessor" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Relation" name="lessorRelation" options={['S/o', 'D/o', 'W/o']} />
                    <Input label="Related Person's Name" name="lessorRelatedName" placeholder="Enter the Name" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Age" name="lessorAge" type="number" placeholder="Age in years" />
                    <Input label="Occupation" name="lessorOccupation" placeholder="Occupation (optional)" required={false} />
                  </div>
                  <Input label="Permanent Address of the Lessor" name="lessorAddress" rows={3} placeholder="Enter the full address" />
                  <Input label="Lessor PAN Card Number" name="lessorPan" placeholder="Enter PAN Number" />
                  <Input label="Lessor Aadhaar Card Number" name="lessorAadhaar" placeholder="Enter Aadhaar Number" />
                  <Input label="Contact Number" name="lessorContact" type="tel" placeholder="Mobile Number" />
                  <PhotoUpload label="Lessor Photo" name="lessorPhoto" />
                </>
              )}

              {step === 2 && (
                <>
                  <Input label="Lessee's Name" name="lesseeName" placeholder="Enter the Name of the lessee" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Relation" name="lesseeRelation" options={['S/o', 'D/o', 'W/o']} />
                    <Input label="Related Person's Name" name="lesseeRelatedName" placeholder="Enter the Name" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Age" name="lesseeAge" type="number" placeholder="Age in years" />
                    <Input label="Occupation" name="lesseeOccupation" placeholder="Occupation (optional)" required={false} />
                  </div>
                  <Input label="Permanent Address of the Lessee" name="lesseeAddress" rows={3} placeholder="Enter the full address" />
                  <Input label="Lessee PAN Card Number" name="lesseePan" placeholder="Enter PAN Number" />
                  <Input label="Lessee's Aadhaar Card Number" name="lesseeAadhaar" placeholder="Enter Aadhaar Number" />
                  <Input label="Contact Number" name="lesseeContact" type="tel" placeholder="Mobile Number" />
                  <PhotoUpload label="Lessee Photo" name="lesseePhoto" />
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
                  <Input label="State" name="propertyState" options={indianStates} required={false} />
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
                    <h3 className="font-bold text-gray-800 mb-3">Witness 1 Details (Optional)</h3>
                    <div className="space-y-3">
                      <Input label="Name" name="witness1Name" placeholder="Full name" required={false} />
                      <Input label="Address" name="witness1Address" rows={2} placeholder="Complete address" required={false} />
                      <Input label="Aadhaar Number" name="witness1Aadhaar" placeholder="Aadhaar number" required={false} />
                      <Input label="Contact Number" name="witness1Contact" type="tel" placeholder="Mobile number" required={false} />
                      <PhotoUpload label="Witness 1 Photo" name="witness1Photo" />
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                    <h3 className="font-bold text-gray-800 mb-3">Witness 2 Details (Optional)</h3>
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

                  {paymentStatus && (
                    <div className={`p-4 rounded-lg border-2 ${
                      paymentStatus === 'success' ? 'bg-green-50 border-green-400' :
                      paymentStatus === 'failed' ? 'bg-red-50 border-red-400' :
                      'bg-blue-50 border-blue-400'
                    }`}>
                      <p className={`font-semibold ${
                        paymentStatus === 'success' ? 'text-green-800' :
                        paymentStatus === 'failed' ? 'text-red-800' :
                        'text-blue-800'
                      }`}>
                        {paymentStatus === 'success' && '✓ Payment Successful!'}
                        {paymentStatus === 'failed' && '✗ Payment Failed'}
                        {paymentStatus === 'processing' && '⏳ Processing Payment...'}
                      </p>
                    </div>
                  )}
                </>
              )}

              <div className="flex justify-between pt-6 gap-4">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    disabled={isProcessing}
                    className="px-8 py-3 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← Previous
                  </button>
                )}
                {step < 5 ? (
                  <button
                    onClick={() => {
                      if (validateStep(step)) {
                        setStep(step + 1);
                      }
                    }}
                    className="ml-auto px-8 py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="ml-auto px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        🎉 Pay & Generate Agreement
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[calc(100vh-2rem)] lg:sticky lg:top-4 border-2 border-gray-200">
            <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
              <div className="prose max-w-none">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-center mb-6 pb-4">
                    <h1 className="text-xl md:text-xl font-bold text-gray-900 uppercase tracking-wide">
                      FURNISHED HOUSE LEASE AGREEMENT
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
          </div>
        </div>
      </div>
    </div>
  );
}