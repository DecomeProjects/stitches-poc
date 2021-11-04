import { IFontSizes } from '@Styles';

export type ITypographyTags =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span';

export type ITypographyTagMappings = Record<IFontSizes, ITypographyTags>;
