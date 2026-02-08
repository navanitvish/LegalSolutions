import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signupUser, loginUser, googleAuth } from '../../api/api';

const TOKEN_KEY = 'legaltoken';
const USER_KEY = 'legaluser';

// Helper functions for localStorage
const saveToken = (token) => {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const saveUser = (user) => {
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
};

const getUser = () => {
  try {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    return null;
  }
};

const removeUser = () => {
  localStorage.removeItem(USER_KEY);
};

// Async thunks
export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await signupUser(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Signup failed');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginUser(credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const googleLogin = createAsyncThunk(
  'auth/googleLogin',
  async (googleData, { rejectWithValue }) => {
    try {
      const response = await googleAuth(googleData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Google auth failed');
    }
  }
);

const initialState = {
  user: getUser(), // Load user from localStorage on initialization
  token: getToken(), // Load token from localStorage on initialization
  isLoading: false,
  isAuthenticated: !!getToken(), // Set authenticated status based on token presence
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      state.success = false;
      removeToken(); // Remove token from localStorage
      removeUser(); // Remove user from localStorage
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = false;
    },
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      saveToken(action.payload.token); // Save token to localStorage
      saveUser(action.payload.user); // Save user to localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      // Signup
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.success = true;
        state.error = null;
        saveToken(action.payload.token); // Save token to localStorage
        saveUser(action.payload.user); // Save user to localStorage
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })
      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.success = true;
        state.error = null;
        saveToken(action.payload.token); // Save token to localStorage
        saveUser(action.payload.user); // Save user to localStorage
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })
      // Google Login
      .addCase(googleLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.success = true;
        state.error = null;
        saveToken(action.payload.token); // Save token to localStorage
        saveUser(action.payload.user); // Save user to localStorage
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { logout, clearError, clearSuccess, setCredentials } = authSlice.actions;
export default authSlice.reducer;