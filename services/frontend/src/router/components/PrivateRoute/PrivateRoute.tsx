import axios from 'axios';
import { useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import config from '../../../config/config';
import {
  setAuthorizedMenu,
  setUnauthorizedMenu,
} from '../../../layout/main/MainLayoutSlice';
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
  const hasAuth = useSelector(hasAuthSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(hasAuth, ' newVal');
    if (!hasAuth) {
      dispatch(setUnauthorizedMenu());
      console.log('unauthorized');
    } else {
      dispatch(setAuthorizedMenu());
      console.log('authorized');
    }
  }, [hasAuth]);

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

  if (!getAccessTokenFromLS() || !hasAuth) {
    return <Navigate to={`/sign-in?to=${to}`} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
export { api };
