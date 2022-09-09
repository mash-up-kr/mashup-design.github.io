import '@emotion/react';
import { ColorsTheme } from '@/styles/themes/colors';
import { FontsTheme } from '@/styles/themes/fonts';
import { BreakPointTheme } from '@/styles/themes/breakPoint';
import { A11yTheme } from '@/styles/themes/a11y';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsTheme;
    fonts: FontsTheme;
    breakPoint: BreakPointTheme;
    a11y: A11yTheme;
  }
}
