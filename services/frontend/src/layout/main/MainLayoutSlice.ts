import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../store/store';
import {} from '../../utills/token/token';
import { Home, IMenuItem, logOut, Product, signIn, signUp } from './MenuItems';

export interface LayoutState {
  menuItems: IMenuItem[];
  drawerIsOpen: boolean;
}

const initialState: LayoutState = {
  menuItems: [Home, signIn, signUp],
  drawerIsOpen: false,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setAuthorizedMenu: (state) => {
      state.menuItems = [Home, Product, logOut];
    },
    setUnauthorizedMenu: (state) => {
      state.menuItems = [Home, signIn, signUp];
    },
    setDrawerOpened: (state) => {
      state.drawerIsOpen = true;
    },
    setDrawerClosed: (state) => {
      state.drawerIsOpen = false;
    },
  },
});

export const menuItemsSelector = (state: RootState) => state.layout.menuItems;
export const drawerIsOpenSelector = (state: RootState) =>
  state.layout.drawerIsOpen;

export default layoutSlice.reducer;

export const {
  setAuthorizedMenu,
  setUnauthorizedMenu,
  setDrawerClosed,
  setDrawerOpened,
} = layoutSlice.actions;
