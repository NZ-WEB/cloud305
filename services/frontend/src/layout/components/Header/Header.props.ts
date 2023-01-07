import { DrawerHeaderType } from '../../main/MainLayout';
import { IMenuItem } from '../../main/MenuItems';

export interface HeaderProps {
  open: boolean;
  onDrawerCloseClick: () => void;
  onDrawerOpenClick: () => void;
  drawerWidth: number;
  DrawerHeader: DrawerHeaderType;
  menuItems: IMenuItem[];
}
