import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from 'utils/storage';
import { PATHS } from 'configs';

interface IProps {
  redirect?: string;
  children: JSX.Element;
}

function PrivateRoute({ children, redirect = '/login' }: IProps) {
  const { pathname, search } = useLocation();
  console.log(getToken());
  return getToken() ? (
    children
  ) : (
    <Navigate
      to={{ pathname: redirect, search: `redirectUrl=${pathname}${search}` }}
      state={{ from: pathname }}
      replace
    />
  );
}

PrivateRoute.defaultProps = { redirect: PATHS.LOGIN };

export default PrivateRoute;
