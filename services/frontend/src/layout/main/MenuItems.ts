import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
export interface IMenuItem {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  href?: string;
}

export const Home: IMenuItem = {
  title: 'Home',
  icon: HomeIcon,
  href: '/',
};

export const Product: IMenuItem = {
  title: 'Product',
  icon: TurnedInIcon,
  href: '/product',
};

export const signIn: IMenuItem = {
  title: 'Sign in',
  icon: LoginIcon,
  href: '/sign-in',
};

export const signUp: IMenuItem = {
  title: 'Sign up',
  icon: PersonAddIcon,
  href: '/sign-up',
};

export const logOut: IMenuItem = {
  title: 'Log out',
  icon: LogoutIcon,
  href: '/sign-in?logout=true',
};
