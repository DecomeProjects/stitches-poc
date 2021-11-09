import { IColors, ISizes } from '@Styles';

import { Cart } from './Cart';
import { Close } from './Close';
import { Delete } from './Delete';
import { Menu } from './Menu';
import { Minus } from './Minus';
import { Next } from './Next';
import { Plus } from './Plus';
import { Previous } from './Previous';

export type IIconProps = {
  size?: ISizes;
  color?: IColors;
};

export const registeredIcons = {
  Cart,
  Close,
  Delete,
  Menu,
  Minus,
  Next,
  Plus,
  Previous,
};

export type IIConsList = keyof typeof registeredIcons;
