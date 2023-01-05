import { DrawerHeaderType } from '../../main/MainLayout';
import { IMenuItem } from '../../main/MainLayoutSlice';

export interface HeaderProps {
  open: boolean;
  onDrawerCloseClick: () => void;
  onDrawerOpenClick: () => void;
  drawerWidth: number;
  DrawerHeader: DrawerHeaderType;
  menuItems: IMenuItem[];
}
