import { useEffect } from 'react';

import { getProductById } from '../../api/product/getProductById';

const ProductPage = () => {
  useEffect(() => {
    getProductById(1);
  }, []);

  return <div>Product page</div>;
};

export default ProductPage;
