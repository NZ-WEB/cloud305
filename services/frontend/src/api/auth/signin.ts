import { api } from '../../router/components/PrivateRoute/PrivateRoute';
import { RoleType } from '../../modules/auth/type/auth.types';

export type SignInResponseSuccessType = {
  error: string;
  status: number;
  token: string;
  role: RoleType;
};

export type SignInParams = {
  email: string;
  password: string;
};

const signInApi = async (data: SignInParams) => {
  return api.post<SignInResponseSuccessType>('/auth/login', data);
};

export default signInApi;
