import { api } from '../../router/components/PrivateRoute/PrivateRoute';

export const getProductById = (id: number) => {
  return api.get('/product/' + id);
};
