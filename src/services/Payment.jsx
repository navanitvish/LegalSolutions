// services/Payment.js
// ============================================
// Frontend Razorpay Payment Integration
// ============================================

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:6001/api';

/**
 * Load Razorpay script dynamically
 */
const loadRazorpayScript = () => {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (window.Razorpay) {
      console.log('✅ Razorpay SDK already loaded');
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    
    script.onload = () => {
      console.log('✅ Razorpay SDK loaded successfully');
      resolve(true);
    };
    
    script.onerror = () => {
      console.error('❌ Failed to load Razorpay SDK');
      reject(new Error('SDK_LOAD_FAILED'));
    };
    
    document.body.appendChild(script);
  });
};

/**
 * Create payment order on backend
 */
const createPaymentOrder = async (amount, formType, formId = null) => {
  try {
    const token = localStorage.getItem('legaltoken');
    console.log("token",token);
    
    if (!token) {
      throw new Error('Please login to continue');
    }

    console.log('💳 Creating payment order:', { amount, formType });

    const response = await axios.post(
      `${API_URL}/payments/create-order`,
      { amount, formType, formId },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('❌ Create order error:', error);
    throw error.response?.data || error;
  }
};

/**
 * Verify payment on backend
 */
const verifyPaymentOnBackend = async (paymentResponse) => {
  try {
    const token = localStorage.getItem('legaltoken');
    console.log("token",token);
    if (!token) {
      throw new Error('Please login to continue');
    }

    console.log('🔍 Verifying payment on backend');

    const response = await axios.post(
      `${API_URL}/payments/verify`,
      paymentResponse,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('❌ Verify payment error:', error);
    throw error.response?.data || error;
  }
};

/**
 * Main Payment Initiation Function
 * Call this to start payment process
 */
const initiatePayment = async (
  amount, 
  formData, 
  onSuccess, 
  onFailure
) => {
  try {
    console.log('💳 Initiating payment for amount: ₹', amount);

    // Step 1: Load Razorpay SDK
    const sdkLoaded = await loadRazorpayScript();
    
    if (!sdkLoaded) {
      throw new Error('Failed to load payment gateway');
    }

    // Step 2: Create order on backend
    const orderData = await createPaymentOrder(
      amount, 
      'rental_agreement',
      null
    );

    if (!orderData.success) {
      throw new Error(orderData.message || 'Failed to create order');
    }

    console.log('✅ Order created:', orderData.orderId);

    // Step 3: Razorpay checkout options
    const options = {
      key: orderData.key, // Razorpay Key ID from backend
      amount: orderData.amount, // Amount in paise
      currency: orderData.currency || 'INR',
      name: 'Rental Agreement Service',
      description: 'House Rental Agreement Form',
      image: '/logo.png', // Your company logo (optional)
      order_id: orderData.orderId,
      
      // Prefill user data
      prefill: {
        name: formData.tenantName || formData.ownerName || '',
        email: formData.email || '',
        contact: formData.tenantContact || formData.ownerContact || ''
      },
      
      // Notes
      notes: {
        formType: 'rental_agreement',
        ownerName: formData.ownerName || '',
        tenantName: formData.tenantName || ''
      },
      
      // Theme
      theme: {
        color: '#667eea'
      },
      
      // Payment success handler
      handler: async function (response) {
        try {
          console.log('✅ Payment successful:', response.razorpay_payment_id);

          // Verify payment on backend
          const verifyResult = await verifyPaymentOnBackend({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature
          });

          if (verifyResult.success) {
            console.log('✅ Payment verified on backend');
            
            // Call success callback with payment details
            onSuccess({
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              signature: response.razorpay_signature,
              amount: amount
            });
          } else {
            throw new Error('Payment verification failed');
          }

        } catch (error) {
          console.error('❌ Payment verification error:', error);
          onFailure({
            error: 'VERIFICATION_FAILED',
            message: error.message || 'Payment verification failed'
          });
        }
      },
      
      // Payment modal closed handler
      modal: {
        ondismiss: function() {
          console.log('⚠️ Payment modal closed by user');
          onFailure({
            error: 'PAYMENT_CANCELLED',
            message: 'Payment was cancelled by user'
          });
        }
      }
    };

    // Step 4: Open Razorpay checkout
    const razorpay = new window.Razorpay(options);
    
    // Handle payment failures
    razorpay.on('payment.failed', function (response) {
      console.error('❌ Payment failed:', response.error);
      onFailure({
        error: 'PAYMENT_FAILED',
        code: response.error.code,
        description: response.error.description,
        message: response.error.reason || 'Payment failed'
      });
    });

    // Open checkout
    razorpay.open();

  } catch (error) {
    console.error('❌ Payment initiation error:', error);
    onFailure({
      error: 'INITIATION_FAILED',
      message: error.message || 'Failed to initiate payment'
    });
  }
};

/**
 * Get Payment Status
 * Check payment status by payment ID
 */
const getPaymentStatus = async (paymentId) => {
  try {
    const token = localStorage.getItem('token');
    
    const response = await axios.get(
      `${API_URL}/payment/status/${paymentId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('❌ Get payment status error:', error);
    throw error.response?.data || error;
  }
};

const PaymentService = {
  initiatePayment,
  getPaymentStatus,
  createPaymentOrder,
  verifyPaymentOnBackend,
  loadRazorpayScript
};

export default PaymentService;