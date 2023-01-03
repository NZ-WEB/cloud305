import api from '../index';

export const getProductById = (id: number) => {
  return api.get('/product/' + id);
};
