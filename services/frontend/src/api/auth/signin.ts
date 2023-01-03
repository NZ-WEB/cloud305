import api from '../index';

export type SignInResponseSuccessType = {
  error: string;
  status: number;
  token: string;
};

export type SignInParams = {
  email: string;
  password: string;
};

const signInApi = async (data: SignInParams) => {
  return api.post<SignInResponseSuccessType>('/auth/login', data);
};

export default signInApi;
