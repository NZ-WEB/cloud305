import { api } from '../../router/components/PrivateRoute/PrivateRoute';

export type SignUpResponseSuccessType = {
  status: number;
  error?: string;
};

export type SignInParams = {
  email: string;
  password: string;
};

const signUpApi = async (data: SignInParams) => {
  return api.post<SignUpResponseSuccessType>('/auth/register', data);
};

export default signUpApi;
