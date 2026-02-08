// File: src/services/api.js
// ============================================
import axios from 'axios';

// Base API URL - Change this to your backend URL
const API_BASE_URL = 'http://localhost:6001/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper function to get token (implement based on your needs)
const getToken = () => {
  // Get token from localStorage
  const token = localStorage.getItem('legaltoken');
  return token;
};

// Request interceptor to add token to headers
api.interceptors.request.use(
  (config) => {
    // Get token from storage
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // FIXED: Changed from 'legaltoken' to 'token'
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - redirect to login
      console.error('Unauthorized access - token invalid or expired');
      // Clear invalid token
      localStorage.removeItem('token');
      // Optionally redirect to login
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// ============================================
// AUTH API ENDPOINTS
// ============================================

export const signupUser = (userData) => {
  return api.post('/signup', userData);
};

export const loginUser = (credentials) => {
  return api.post('/login', credentials);
};

export const googleAuth = (googleData) => {
  return api.post('/auth/google', googleData);
};

export const verifyToken = (token) => {
  return api.post('/verify-token', { token });
};

export const resetPassword = (email) => {
  return api.post('/reset-password', { email });
};

export const updatePassword = (passwordData) => {
  return api.put('/update-password', passwordData);
};

// ============================================
// USER API ENDPOINTS
// ============================================

export const getUserProfile = () => {
  return api.get('/user/profile');
};

export const updateUserProfile = (profileData) => {
  return api.put('/user/profile', profileData);
};

// ============================================
// AGREEMENT API ENDPOINTS
// ============================================

/**
 * Save agreement draft
 */
export const saveDraft = (formData) => {
  return api.post('/forms/draft', {
    formData,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Submit agreement (without payment details)
 */
export const submitAgreement = (formData) => {
  return api.post('/forms/submit', {
    formType: formData.formType,
    formData,
    submittedAt: new Date().toISOString(),
  });
};

/**
 * Send agreement via email
 */
export const sendEmail = (email, data) => {
  return api.post('/forms/send-email', {
    email,
    agreementText: data.agreementText,
    agreementId: data.agreementId,
    sentAt: new Date().toISOString(),
  });
};

/**
 * Get agreement by ID
 */
export const getAgreement = (agreementId) => {
  return api.get(`/agreements/${agreementId}`);
};

/**
 * Get all user agreements
 */
export const getUserAgreements = () => {
  return api.get('/agreements/user');
};

/**
 * Delete agreement
 */
export const deleteAgreement = (agreementId) => {
  return api.delete(`/agreements/${agreementId}`);
};

// ============================================
// TOKEN MANAGEMENT HELPERS
// ============================================

/**
 * Save token to localStorage after login
 */
export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

/**
 * Remove token from localStorage on logout
 */
export const clearToken = () => {
  localStorage.removeItem('token');
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = () => {
  return !!getToken();
};

// ============================================
// EXPORT AS DEFAULT OBJECT
// ============================================

const ApiService = {
  // Auth
  signupUser,
  loginUser,
  googleAuth,
  verifyToken,
  resetPassword,
  updatePassword,
  
  // User
  getUserProfile,
  updateUserProfile,
  
  // Agreement
  saveDraft,
  submitAgreement,
  sendEmail,
  getAgreement,
  getUserAgreements,
  deleteAgreement,
  
  // Token Management
  saveToken,
  clearToken,
  isAuthenticated,
  getToken,
};

export default ApiService;