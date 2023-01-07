import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

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

  const handleSubmit = (email: string, password: string) => {
    dispatch(signIn({ email, password }));
  };

  useEffect(() => {
    if (query.get('logout')) {
      dispatch(logout());
    }
  }, []);

  useEffect(() => {
    if (hasAuth && !query.get('logout')) {
      navigate(`${query.get('to') ?? '/'}`);
    }
  }, [hasAuth]);

  return (
    <div>
      <h1>Auth page</h1>

      {status === EAuthStatus.loading && <Placeholder />}

      <StatusAlert status={status} error={authError} />

      <AuthForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AuthPage;
