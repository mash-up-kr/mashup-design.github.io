import { ValueOf } from '@/types';

export const VIEWPORT_SIZE = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop',
} as const;

export type ViewPort = ValueOf<typeof VIEWPORT_SIZE>;
