import { CSS } from '@stitches/react';
import { config } from './config';

export type IStitchesConfigCSS = CSS<typeof config>;

export type ISizes =
  | 'xl'
  | 'lg'
  | 'md'
  | 'base'
  | 'tiny'
  | 'sm'
  | 'xs'
  | 'none';

export type IColors =
  | 'orange'
  | 'paleOrange'
  | 'darkBlue'
  | 'darkGrayishBlue'
  | 'grayishBlue'
  | 'lightGrayishBlue'
  | 'white'
  | 'black'
  | 'transparent';
