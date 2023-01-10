import { MenuItemTitle } from '../components/MenuItemIconsComponent/MenuItemIconsComponent';

export interface IMenuItem {
  title: MenuItemTitle;
  href?: string;
}

export const Home: IMenuItem = {
  title: 'Home',
  href: '/',
};

export const Product: IMenuItem = {
  title: 'Product',
  href: '/product',
};

export const signIn: IMenuItem = {
  title: 'Sign in',
  href: '/sign-in',
};

export const signUp: IMenuItem = {
  title: 'Sign up',
  href: '/sign-up',
};

export const logOut: IMenuItem = {
  title: 'Log out',
  href: '/sign-in?logout=true',
};
