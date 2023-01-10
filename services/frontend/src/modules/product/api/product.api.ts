import { api } from '../../../router/components/PrivateRoute/PrivateRoute';
import { IProduct } from '../type/product.types';

export type GetProductResponseSuccessType = {
  data: IProduct;
  status: number;
};

const getProductApi = async () => {
  return api.get<GetProductResponseSuccessType>('/product/1');
};

export default getProductApi;
