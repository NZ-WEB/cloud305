import React from 'react';

import { EAuthStatus } from '../../AuthSlice';
import StatusAlertProps from './StatusAlert.props';

const StatusAlert = ({ status, error }: StatusAlertProps) => {
  if (status === EAuthStatus.success) {
    return <div>You was success logged</div>;
  } else if (status === EAuthStatus.fail) {
    return <div>Login was fail: {error}</div>;
  }

  return null;
};

export default StatusAlert;
