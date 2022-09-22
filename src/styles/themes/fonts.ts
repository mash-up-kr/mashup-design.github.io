import { css } from '@emotion/react';

export const fonts = {
  semibold72: css`
    font-weight: 600;
    font-size: 7.2rem;
    font-family: Pretendard;
    line-height: 1.1;
    letter-spacing: -0.01em;
  `,
  semibold66: css`
    font-weight: 600;
    font-size: 6.6rem;
    font-family: Pretendard;
    line-height: 1.1;
    letter-spacing: -0.01em;
  `,
  semibold60: css`
    font-weight: 600;
    font-size: 6rem;
    font-family: Pretendard;
    line-height: 1.1;
    letter-spacing: -0.01em;
  `,
  semibold40: css`
    font-weight: 600;
    font-size: 4rem;
    font-family: Pretendard;
    line-height: 1.1;
    letter-spacing: -0.01em;
  `,
  semibold24: css`
    font-weight: 600;
    font-size: 2.4rem;
    font-family: Pretendard;
    line-height: 1.6;
    letter-spacing: -0.01em;
  `,
  semibold20: css`
    font-weight: 600;
    font-size: 2rem;
    font-family: Pretendard;
    line-height: 1.6;
    letter-spacing: -0.01em;
  `,
  semibold16: css`
    font-weight: 600;
    font-size: 1.6rem;
    font-family: Pretendard;
    line-height: 1.6;
    letter-spacing: -0.015em;
  `,
  bold40: css`
    font-weight: 700;
    font-size: 4rem;
    font-family: Pretendard;
    line-height: 1.5;
    letter-spacing: -0.01em;
  `,
  bold36: css`
    font-weight: 700;
    font-size: 3.6rem;
    font-family: Pretendard;
    line-height: 1.5;
    letter-spacing: -0.01em;
  `,
  bold32: css`
    font-weight: 700;
    font-size: 3.2rem;
    font-family: Pretendard;
    line-height: 1.5;
    letter-spacing: -0.01em;
  `,
  bold24: css`
    font-weight: 700;
    font-size: 2.4rem;
    font-family: Pretendard;
    line-height: 1.6;
    letter-spacing: -0.01em;
  `,
  bold20: css`
    font-weight: 700;
    font-size: 2rem;
    font-family: Pretendard;
    line-height: 1.6;
    letter-spacing: -0.01em;
  `,
  bold16: css`
    font-weight: 700;
    font-size: 1.6rem;
    font-family: Pretendard;
    line-height: 1.6;
    letter-spacing: -0.02em;
  `,
  bold14: css`
    font-weight: 700;
    font-size: 1.4rem;
    font-family: Pretendard;
    line-height: 1.6;
    letter-spacing: -0.02em;
  `,
  medium20: css`
    font-weight: 500;
    font-size: 2rem;
    font-family: Pretendard;
    line-height: 1.6;
    letter-spacing: -0.01em;
  `,
  medium16: css`
    font-weight: 500;
    font-size: 1.6rem;
    font-family: Pretendard;
    line-height: 1.6;
    letter-spacing: -0.015em;
  `,
  medium12: css`
    font-weight: 500;
    font-size: 1.2rem;
    font-family: Pretendard;
    line-height: 1.6;
    letter-spacing: -0.02em;
  `,
  regular20: css`
    font-weight: 400;
    font-size: 2rem;
    font-family: Pretendard;
    line-height: 1.6;
    letter-spacing: -0.01em;
  `,
  regular14: css`
    font-weight: 400;
    font-size: 1.4rem;
    font-family: Pretendard;
    line-height: 1.6;
    letter-spacing: -0.02em;
  `,
} as const;

export type FontsTheme = typeof fonts;
