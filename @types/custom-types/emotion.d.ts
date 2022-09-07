import '@emotion/react';
import { ColorsType } from '@/styles/themes/colors';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsType;
  }
}
