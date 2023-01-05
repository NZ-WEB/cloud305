import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../store/store';
import {} from '../../utills/token/token';
import { Home, IMenuItem, logOut, Product, signIn, signUp } from './MenuItems';

export interface LayoutState {
  menuItems: IMenuItem[];
}

const initialState: LayoutState = {
  menuItems: [Home, signIn, signUp],
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
  },
});

export const menuItemsSelector = (state: RootState) => state.layout.menuItems;

export default layoutSlice.reducer;

export const { setAuthorizedMenu, setUnauthorizedMenu } = layoutSlice.actions;
