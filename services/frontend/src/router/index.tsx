import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import AuthPage from '../modules/auth/AuthPage';
import NotFoundPage from '../modules/not-found/NotFoundPage';

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
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
