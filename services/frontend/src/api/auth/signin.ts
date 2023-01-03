import { AxiosResponse } from 'axios';

import api from '../index';

type SignInResponseSuccessType = {
  email: string;
  id: string;
};

export type SignInParams = {
  email: string;
  password: string;
};

const signInApi = async (
  data: SignInParams,
): Promise<AxiosResponse<SignInResponseSuccessType>> => {
  return await api.post<SignInResponseSuccessType>('/auth/login', data);
};

export default signInApi;
