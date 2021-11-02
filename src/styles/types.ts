import { CSS } from '@stitches/react';
import { config } from './config';

type IConfig = typeof config;

export type IStitchesConfigCSS = CSS<IConfig>;

export type IFonts = keyof IConfig['theme']['fontSizes'];

export type ISizes = keyof IConfig['theme']['sizes'];

export type ISpaces = keyof IConfig['theme']['space'];

export type IColors = keyof IConfig['theme']['colors'];
