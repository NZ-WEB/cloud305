import axios from 'axios';
import { useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, redirect, useNavigate } from 'react-router-dom';

import config from '../../../config/config';
import { hasAuthSelector, setAuth } from '../../../modules/auth/AuthSlice';
import {
  getAccessTokenFromLS,
  removeAccessTokenFromSL,
} from '../../../utills/token/token';
import { PrivateRouteProps } from './PrivateRoute.props';

const api = axios.create({
  baseURL: config.API_BASE_URL,
});

const PrivateRoute = ({ children, to }: PrivateRouteProps) => {
  const navigate = useNavigate();
  const hasAuth = useSelector(hasAuthSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (getAccessTokenFromLS()) {
      dispatch(setAuth(true));
    } else {
      removeAccessTokenFromSL();
      dispatch(setAuth(false));
    }
  }, []);

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        console.log('unauthorized in comp');
        dispatch(setAuth(false));
        removeAccessTokenFromSL();
      }
      return error;
    },
  );

  api.interceptors.request.use((config) => {
    if (config) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      config.headers.set('authorization', 'Bearer ' + getAccessTokenFromLS());
    }

    return config;
  });

  if (!getAccessTokenFromLS()) {
    return <Navigate to={`/sign-in?to=${to}`} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
export { api };
