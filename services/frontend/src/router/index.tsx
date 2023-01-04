import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import AuthPage from '../modules/auth/AuthPage';
import NotFoundPage from '../modules/not-found/NotFoundPage';
import ProductPage from '../modules/product/ProductPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/sign-in',
    element: <AuthPage />,
  },
  {
    path: '/product',
    element: (
      <PrivateRoute to="/product">
        <ProductPage />
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
