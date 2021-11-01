import { Cart } from './Cart';
import { Close } from './Close';
import { Delete } from './Delete';
import { Menu } from './Menu';
import { Minus } from './Minus';
import { Next } from './Next';
import { Plus } from './Plus';
import { Previous } from './Previous';

type ISizes = 'xl' | 'lg' | 'md' | 'base' | 'tiny' | 'sm';

type IColors =
  | 'orange'
  | 'paleOrange'
  | 'darkBlue'
  | 'darkGrayishBlue'
  | 'grayishBlue'
  | 'lightGrayishBlue'
  | 'white'
  | 'black';

export type IIconProps = {
  size?: ISizes;
  color?: IColors;
};

export type IIConsList =
  | 'Cart'
  | 'Close'
  | 'Delete'
  | 'Menu'
  | 'Minus'
  | 'Next'
  | 'Plus'
  | 'Previous';
type IRegisteredIcons = {
  [key in IIConsList]: React.FC<Required<IIconProps>>;
};

export const registeredIcons: IRegisteredIcons = {
  Cart,
  Close,
  Delete,
  Menu,
  Minus,
  Next,
  Plus,
  Previous,
};
