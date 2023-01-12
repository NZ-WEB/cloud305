import { EAuthStatus } from '../../AuthSlice';

export default interface StatusAlertProps {
  status: EAuthStatus;
  successText: string;
  error?: string;
}
