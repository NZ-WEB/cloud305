import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

import { IMenuItemIconsComponentProps } from './MenuItemIconsComponent.props';

export const menuIcons = new Map<MenuItemTitle, JSX.Element>();

export type MenuItemTitle =
  | 'Home'
  | 'Product'
  | 'Sign in'
  | 'Sign up'
  | 'Log out';

menuIcons.set('Home', <HomeIcon />);
menuIcons.set('Product', <TurnedInIcon />);
menuIcons.set('Sign in', <LoginIcon />);
menuIcons.set('Sign up', <PersonAddIcon />);
menuIcons.set('Log out', <LogoutIcon />);

export const MenuItemIconsComponent = ({
  title,
}: IMenuItemIconsComponentProps) => {
  return menuIcons.get(title) ?? null;
};
