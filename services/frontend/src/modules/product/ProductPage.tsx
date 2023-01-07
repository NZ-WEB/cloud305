import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { withLayout } from '../../layout/main/MainLayout.hoc';
import { useAppDispatch } from '../../store/store';
import { getProduct, productSelector } from './ProductSlice';

const ProductPage = () => {
  const dispatch = useAppDispatch();
  const product = useSelector(productSelector);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <Box>
      <div>{product.name}</div>
      <span>{product.stock}</span>
    </Box>
  );
};

export default withLayout(ProductPage);
