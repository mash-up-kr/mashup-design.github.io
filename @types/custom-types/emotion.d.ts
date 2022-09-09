import '@emotion/react';
import { ColorsType } from '@/styles/themes/colors';
import { FontsType } from '@/styles/themes/fonts';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsType;
    fonts: FontsType;
  }
}
