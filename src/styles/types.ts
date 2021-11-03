import { CSS } from '@stitches/react';
import { config } from './config';

type IConfig = typeof config;

export type IStitchesConfigCSS = CSS<IConfig>;

export type IFontSizes = keyof IConfig['theme']['fontSizes'];

export type IFontWeights = keyof IConfig['theme']['fontWeights'];

export type ILetterSpacings = keyof IConfig['theme']['letterSpacings'];

export type ISizes = keyof IConfig['theme']['sizes'];

export type ISpaces = keyof IConfig['theme']['space'];

export type IColors = keyof IConfig['theme']['colors'];
