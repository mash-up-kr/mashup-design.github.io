import '@emotion/react';
import { ColorsType } from '@/styles/themes/colors';
import { FontsType } from '@/styles/themes/fonts';
import { BreakPointTheme } from '@/styles/themes/breakPoint';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsType;
    fonts: FontsType;
    breakPoint: BreakPointTheme;
  }
}
