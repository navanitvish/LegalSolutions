import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronRight, Lock, Mail } from 'lucide-react';
import { useGoogleLogin } from '@react-oauth/google';
import { login, googleLogin, clearError } from '../../redux/slices/authSlice';

const LoginPages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  const { isLoading, error, success, isAuthenticated } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [validationErrors, setValidationErrors] = useState({});

  // Get the page user was trying to access
  const from = location.state?.from?.pathname || '/';

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  // Handle successful login
  useEffect(() => {
    if (success && isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [success, isAuthenticated, navigate, from]);

  // Clear error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  // Clear errors on component unmount
  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setValidationErrors(newErrors);
      return;
    }

    // Make API call when form is valid and submitted
    const resultAction = await dispatch(login(formData));
    
    // Check if login was successful
    if (login.fulfilled.match(resultAction)) {
      console.log('Login successful');
    } else {
      console.error('Login failed:', resultAction.payload);
    }
  };

  const handleGoogleSuccess = async (tokenResponse) => {
    try {
      // Fetch user info from Google
      const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
      });
      const userInfo = await userInfoResponse.json();

      // Make API call with Google user data
      const resultAction = await dispatch(googleLogin({
        name: userInfo.name,
        email: userInfo.email,
        googleId: userInfo.sub,
        image: userInfo.picture
      }));

      // Check if Google login was successful
      if (googleLogin.fulfilled.match(resultAction)) {
        console.log('Google login successful');
      }
    } catch (err) {
      console.error('Google auth error:', err);
    }
  };

  const googleLoginHandler = useGoogleLogin({
    onSuccess: handleGoogleSuccess,
    onError: (error) => {
      console.error('Google login failed:', error);
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center p-4 py-28">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl flex overflow-hidden">
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-3">Welcome Back</h2>
              <p className="text-gray-600">Sign in to continue your journey</p>
            </div>

            <div className="mb-8">
              <button 
                onClick={() => googleLoginHandler()}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 p-3.5 border border-purple-100 rounded-2xl hover:bg-purple-50 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAMAAABuU5ChAAAA+VBMVEX////pQjU0qFNChfT6uwU0f/O4zvs6gfSJr/j6twDoOisjePPoNSXpPjDrWU/oLRr+9vZ7pff/vAAUoUAkpEn0ran619b82pT7wgD+68j947H/+e7//PafvPm/0vuBw5Df7+P63tz3xcPxl5HnJQ7qUEXxj4n4z83zoJzqSz/vgXrucWrsY1r1tbHrSBPoOjbvcSr0kx74rRH80XntZC3xhSPmGRr86+r4sk/936EJcfPS3/yowvnbwVKjsTjx9f5urEjkuBu9tC+ErkJyvoRRpj2az6hWs23j6/0emX2z2btAiuI8k8AyqkE5nZU1pGxCiOxVmtHJ5M+PSt3WAAACGElEQVRIieWSa3fSQBCGk20CJRcW2AWKxgJtqCmieNdatV5SUtFq5f//GJeE7CXJJOT4TZ+PO+c58+7MaNr/SWd60mecTDs1pMFp28dODPZnZw/369TXseXqHNfCblDdte84krTDwUFFwnMnJyXm+bSsmZ/vlcb1+6A2x5C1xYeyPgIyJlhtYDjzjOYyZA3oFighLYxni8UMY6dCG/jy9KzTQfI8DXSnTNN0kcl1lNE9dlxYC8TnnEVmAJ02qHlPllyb58vgmQ2Np0tYgzGMo2ex6IKRihi1mPhcZyYuO8McL4yYl0vrrI6mJZpx9Or1mzqa10rFt8p7o5ArXh+lXutC8d6ZBdiXvH6PeyPFsw8KMBu8fsG9+3t473l9yD1vD+/BX3v1cgqv3lzE/8A9NCUK5sn33vugeN1DQTcVTbG/9M56H+lEAzg2d54t7iW5657xCdEx5PF+B9Lj9oO9z4hBgIZX6YyaXfmZaV9QQkU781h+Hra+7jQaFv6Or8RW3r1rhErES641D9XKigox8jJaQxyAfZOpIQm6kiuT6BvfujqVuEpkkY43u+d1RBBF35v55aVJidKSEBRFiJAk/+0PM3NjgjFFMLc/WVYzlzImLBPprzvzrlBjHUmZSH8DmqatS0QSZtcjTxUBWSlZw1bckhaYlISTcm1rIqKolJJxtRWnXUVscTFsjWFFwoy7WTM2+zX69/gDaLcy7SET9nsAAAAASUVORK5CYII=" 
                  alt="Google" 
                  className="w-6 h-6 group-hover:scale-110 transition-transform" 
                />
                <span className="text-gray-700 font-medium">Continue with Google</span>
              </button>
            </div>

            <div className="relative flex items-center justify-center mb-8">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-white px-4 text-sm text-gray-500 absolute">or continue with email</span>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3.5 border ${validationErrors.email ? 'border-red-500' : 'border-purple-100'} rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all`}
                />
                {validationErrors.email && (
                  <p className="text-red-500 text-sm mt-1 ml-1">{validationErrors.email}</p>
                )}
              </div>

              <div className="relative">
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3.5 border ${validationErrors.password ? 'border-red-500' : 'border-purple-100'} rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all`}
                />
                {validationErrors.password && (
                  <p className="text-red-500 text-sm mt-1 ml-1">{validationErrors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-purple-600 border-purple-300 rounded focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                    I agree to Terms & Conditions
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-purple-600 text-white py-4 rounded-2xl hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 text-lg font-semibold shadow-lg shadow-purple-200 hover:shadow-purple-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Signing up...</span>
                  </>
                ) : (
                  <>
                    <span>Sign up</span>
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-center text-gray-600 text-sm mt-6">
                Don't have an account?{' '}
                <a href="/signup" className="text-purple-600 hover:text-purple-700 font-medium">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>

        <div className="hidden md:block w-1/2 bg-gradient-to-br from-purple-100 to-white">
          <div className="h-full relative p-12">
            <img
              src="https://images.unsplash.com/photo-1635845080335-dcfe06a0fcf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxsYXd5ZXJ8ZW58MHx8MHx8fDA%3D"
              alt="Legal Services"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute bottom-24 left-24 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Join Our Community</h3>
              <p className="text-gray-600 leading-relaxed">Get access to expert legal services and professional consultations tailored to your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPages;