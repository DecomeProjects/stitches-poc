import React from 'react';

import {
  IColors,
  IFontSizes,
  IFontWeights,
  ILetterSpacings,
  ILineHeights,
  IStitchesConfigCSS,
  tokenize,
} from '@Styles';

import { ITypographyTagMappings, ITypographyTags } from './types';

import { Container } from './styles';

const tagMappings: ITypographyTagMappings = {
  xl: 'h1',
  lg: 'h3',
  base: 'p',
  sm: 'span',
};

type ITypographyProps = {
  color?: IColors;
  size?: IFontSizes;
  weight?: IFontWeights;
  lineHeight?: ILineHeights;
  letterSpacing?: ILetterSpacings;
  tag?: ITypographyTags;
  lineThrough?: boolean;
  uppercase?: boolean;
  css?: IStitchesConfigCSS;
};

export const Typography: React.FC<ITypographyProps> = ({
  color = 'darkBlue',
  size = 'base',
  weight = 'regular',
  lineHeight,
  letterSpacing = 'normal',
  tag,
  lineThrough = false,
  uppercase = false,
  css,
  children,
}) => {
  return (
    <Container
      as={tag || tagMappings[size]}
      css={{
        color: tokenize(color),
        fontSize: tokenize(size),
        fontWeight: tokenize(weight),
        lineHeight: tokenize(lineHeight || size),
        letterSpacing: tokenize(letterSpacing),
        ...css,
      }}
      lineThrough={lineThrough}
      uppercase={uppercase}
    >
      {children}
    </Container>
  );
};
