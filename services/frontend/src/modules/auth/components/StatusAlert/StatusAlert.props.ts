import { EAuthStatus } from '../../AuthSlice';

export default interface StatusAlertProps {
  status: EAuthStatus;
  error?: string;
}
