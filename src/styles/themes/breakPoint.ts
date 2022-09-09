// max-width 기준
export const breakPoint = {
  value: {
    mobile: 809,
    tablet: 1199,
  },
  media: {
    // 모바일 대응 최소 뷰포트는 360px
    mobile: '809px',
    tablet: '1199px',
    // 1200px부터 Desktop
  },
} as const;

export type BreakPointTheme = typeof breakPoint;
