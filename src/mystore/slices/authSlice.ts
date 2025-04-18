import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAuthData } from '@/api'; // Replace with your actual API function
import { UserType } from '@/types/api.types';

type AuthState = {
  user?: UserType;
  isLoading: boolean;
  error: any;
};

const initialState: AuthState = {
  user: undefined,
  isLoading: false,
  error: null,
};

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async () => {
  const response = await getAuthData(); // Your API logic
  return response.user;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.user = undefined;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});

export const { clearAuth } = authSlice.actions;
export default authSlice.reducer;
