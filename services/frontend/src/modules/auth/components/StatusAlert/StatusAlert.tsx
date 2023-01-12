import { Alert } from '@mui/material';
import React from 'react';

import { EAuthStatus } from '../../AuthSlice';
import StatusAlertProps from './StatusAlert.props';

const StatusAlert = ({ status, error, successText }: StatusAlertProps) => {
  if (status == EAuthStatus.success) {
    return <Alert severity="success">{successText}</Alert>;
  } else if (status == EAuthStatus.fail) {
    return <Alert severity="error">{error}</Alert>;
  }

  return null;
};

export default StatusAlert;
