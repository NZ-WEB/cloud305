import { useEffect } from 'react';

import { getProductById } from '../../api/product/getProductById';
import { withLayout } from '../../layout/main/MainLayout.hoc';

const ProductPage = () => {
  useEffect(() => {
    getProductById(1);
  }, []);

  return <div>Product page</div>;
};

export default withLayout(ProductPage);
