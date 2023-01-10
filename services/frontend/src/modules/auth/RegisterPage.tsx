import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppDispatch } from '../../store/store';
import { authSelector, EAuthStatus, signUp } from './AuthSlice';
import Placeholder from './components/Placeholder/Placeholder';
import RegisterForm from './components/RegisterForm/RegisterForm';
import StatusAlert from './components/StatusAlert/StatusAlert';

const RegisterPage = () => {
  const { status, errorMessage: registerError } = useSelector(authSelector);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (email: string, password: string) => {
    dispatch(signUp({ email, password }));

    if (!registerError) {
      setTimeout(() => {
        navigate('/sign-in?to=/');
      }, 2000);
    }
  };

  return (
    <div>
      Register
      {status === EAuthStatus.loading && <Placeholder />}
      <StatusAlert status={status} error={registerError} />
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegisterPage;
