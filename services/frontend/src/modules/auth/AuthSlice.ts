import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import signInApi, { SignInParams } from '../../api/auth/signin';
import { RootState } from '../../store/store';
import {
  getAccessTokenFromLS,
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
  token: string;
}

const initialState: AuthState = {
  hasAuth: false,
  errorMessage: '',
  status: EAuthStatus.default,
  token: getAccessTokenFromLS() ?? '',
};

export const signIn = createAsyncThunk('auth/login', (data: SignInParams) => {
  return signInApi(data);
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.hasAuth = action.payload;
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
        state.token = '';

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
      });
  },
});

export const { setAuth } = authSlice.actions;

export const hasAuthSelector = (state: RootState) => state.auth.hasAuth;
export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
