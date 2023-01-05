import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header/Header';
import { MainLayoutProps } from './MainLayout.props';
import { menuItemsSelector } from './MainLayoutSlice';

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
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
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
  const [open, setOpen] = React.useState(false);
  const menuItems = useSelector(menuItemsSelector);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
