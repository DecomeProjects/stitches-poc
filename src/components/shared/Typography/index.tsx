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

import { Container } from './styles';

type ITypography = {
  color?: IColors;
  size?: IFontSizes;
  weight?: IFontWeights;
  lineHeight?: ILineHeights;
  letterSpacing?: ILetterSpacings;
  lineThrough?: boolean;
  uppercase?: boolean;
  css?: IStitchesConfigCSS;
};

export const Typography: React.FC<ITypography> = ({
  color = 'darkBlue',
  size = 'base',
  weight = 'regular',
  lineHeight,
  letterSpacing = 'normal',
  lineThrough = false,
  uppercase = false,
  css,
  children,
}) => {
  return (
    <Container
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
