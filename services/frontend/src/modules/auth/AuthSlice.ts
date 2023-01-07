import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import signInApi, { SignInParams } from '../../api/auth/signin';
import signUpApi from '../../api/auth/signup';
import { RootState } from '../../store/store';
import {
  removeAccessTokenFromSL,
  setAccessTokenToLS,
} from '../../utills/token/token';

export enum EAuthStatus {
  default = 'DEFAULT',
  success = 'SUCCESS',
  fail = 'FAIL',
  loading = 'LOADING',
}

export interface AuthState {
  errorMessage: string;
  hasAuth: boolean;
  status: EAuthStatus;
}

const initialState: AuthState = {
  hasAuth: false,
  errorMessage: '',
  status: EAuthStatus.default,
};

export const signIn = createAsyncThunk('auth/login', (data: SignInParams) => {
  return signInApi(data);
});

export const signUp = createAsyncThunk(
  'auth/register',
  (data: SignInParams) => {
    return signUpApi(data);
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.hasAuth = action.payload;
    },
    logout: (state) => {
      state.hasAuth = false;
      state.status = EAuthStatus.default;
      state.errorMessage = '';
      removeAccessTokenFromSL();
    },
    resetState: (state) => {
      state.errorMessage = '';
      state.status = EAuthStatus.default;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = EAuthStatus.loading;
        state.errorMessage = '';
        removeAccessTokenFromSL();
      })
      .addCase(signIn.rejected, (state, { error }) => {
        state.status = EAuthStatus.fail;
        state.hasAuth = true;

        removeAccessTokenFromSL();
        state.errorMessage = error.message ?? '';
        console.log(error.message);

        state.hasAuth = false;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.hasAuth = true;
        state.errorMessage = '';
        state.status = EAuthStatus.success;
        const res = payload.data;
        setAccessTokenToLS(res.token);
      })
      .addCase(signUp.pending, (state) => {
        state.status = EAuthStatus.loading;
        state.hasAuth = false;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.status = EAuthStatus.success;
      })
      .addCase(signUp.rejected, (state, { error }) => {
        state.status = EAuthStatus.fail;
        state.hasAuth = false;
        state.errorMessage = error.message ?? '';
      });
  },
});

export const { setAuth, logout } = authSlice.actions;

export const hasAuthSelector = (state: RootState) => state.auth.hasAuth;
export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
