import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { AppDispatch } from '../../store/store';
import { authSelector, EAuthStatus, logout, signIn } from './AuthSlice';
import AuthForm from './components/AuthForm/AuthForm';
import Placeholder from './components/Placeholder/Placeholder';
import StatusAlert from './components/StatusAlert/StatusAlert';

const AuthPage = () => {
  const {
    status,
    errorMessage: authError,
    hasAuth,
  } = useSelector(authSelector);
  const dispatch = useDispatch<AppDispatch>();
  const [query] = useSearchParams();
  const navigate = useNavigate();
  let isLogout = false;

  const handleSubmit = (email: string, password: string) => {
    dispatch(signIn({ email, password }));
  };

  useEffect(() => {
    if (query.get('logout')) {
      dispatch(logout());
      query.delete('logout');
      isLogout = true;
    }
  }, []);

  useEffect(() => {
    if (hasAuth && !query.get('logout') && !isLogout) {
      console.log(isLogout);
      navigate(`${query.get('to') ?? '/'}`);
    }
  }, [hasAuth]);

  return (
    <div>
      {status === EAuthStatus.loading && <Placeholder />}

      <StatusAlert
        successText="Авторизация успешно пройдена!"
        status={status}
        error={authError}
      />

      <AuthForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AuthPage;
