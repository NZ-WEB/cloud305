import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import signInApi, { SignInParams } from '../../api/auth/signin';

export enum EAuthStatus {
  default = 'DEFAULT',
  success = 'SUCCESS',
  fail = 'FAIL',
  loading = 'LOADING',
}

export interface AuthState {
  uid: string;
  email: string;
  error: Error | null;
  hasAuth: boolean;
  status: EAuthStatus;
}

const initialState: AuthState = {
  hasAuth: false,
  email: '',
  uid: '',
  error: null,
  status: EAuthStatus.default,
};

export const signIn = createAsyncThunk('auth/login', async (arg: SignInParams) => {
  return signInApi(arg);
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = EAuthStatus.loading;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.status = EAuthStatus.fail;
        state.uid = '';
        state.email = '';
        state.error = payload as Error;
        state.hasAuth = false;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.email = payload.data.email;
        state.uid = payload.data.id;
        state.hasAuth = true;
        state.error = null;

        console.log(payload.headers);
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = authSlice.actions;

export default authSlice.reducer;
