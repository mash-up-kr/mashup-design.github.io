export const colors = {
  light: {
    white: '#FFFFFF',
    gray50: '#F6F6FD',
    gray100: '#D9D7EB',
    gray200: '#A4A1C2',
    gray300: '#737097',
    gray400: '#3D3B55',
    black: '#22212F',
    red100: '#FFB0AC',
    red200: '#EB6963',
    red300: '#F04941',
    yellow100: '#FFE476',
    yellow200: '#FFDA44',
    yellow300: '#F2C614',
    blue100: '#B1AAFF',
    blue200: '#594AFF',
    blue300: '#3C2DE3',
  },
} as const;

export type ColorsTheme = typeof colors;
