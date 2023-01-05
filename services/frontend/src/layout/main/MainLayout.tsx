import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hasAuthSelector, setAuth } from '../../modules/auth/AuthSlice';
import {
  getAccessTokenFromLS,
  removeAccessTokenFromSL,
} from '../../utills/token/token';
import Header from '../components/Header/Header';
import { MainLayoutProps } from './MainLayout.props';
import {
  drawerIsOpenSelector,
  menuItemsSelector,
  setAuthorizedMenu,
  setDrawerClosed,
  setDrawerOpened,
  setUnauthorizedMenu,
} from './MainLayoutSlice';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `${drawerWidth}px`,
  ...(!open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export type DrawerHeaderType = typeof DrawerHeader;

const MainLayout = ({ children }: MainLayoutProps) => {
  const open = useSelector(drawerIsOpenSelector);
  const menuItems = useSelector(menuItemsSelector);
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

  useEffect(() => {
    if (hasAuth) {
      dispatch(setAuthorizedMenu());
    } else {
      dispatch(setUnauthorizedMenu());
    }
  }, [hasAuth]);

  const handleDrawerOpen = () => {
    dispatch(setDrawerOpened());
  };

  const handleDrawerClose = () => {
    dispatch(setDrawerClosed());
  };

  return (
    <>
      <CssBaseline />
      <Header
        open={open}
        onDrawerCloseClick={handleDrawerClose}
        onDrawerOpenClick={handleDrawerOpen}
        drawerWidth={drawerWidth}
        DrawerHeader={DrawerHeader}
        menuItems={menuItems}
      />
      <Main open={open}>
        <DrawerHeader />
        {children ?? ''}
      </Main>
    </>
  );
};

export default MainLayout;
