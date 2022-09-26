import { HeadFC, navigate } from 'gatsby';
import DrawingLineSvg from '@/assets/svg/drawing-line-404.svg';
import HighlightsSvg from '@/assets/svg/highlights.svg';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Layout } from '@/components';
import { ROUTES } from '@/constants/route';

export const NotFoundPageWrapper = styled.main`
  ${({ theme }) => css`
    padding-top: 8rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding-top: 6.4rem;
    }
  `}
`;

const NotFountSection = styled.div`
  ${({ theme }) => css`
    padding: 16.6rem 0 8.9rem;
    text-align: center;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      padding-bottom: 10.7rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 18.2rem 0 12.4rem;
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.a11y.visuallyHidden};
  `}
`;

export const Oops = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.semibold72};
    position: relative;
    display: inline-block;
    margin: 0 auto;
    color: ${theme.colors.light.black};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.semibold66};
    }
  `}
`;

const DrawingLine = styled(DrawingLineSvg)`
  position: absolute;
  top: -9rem;
  left: -7.2rem;
`;

export const Highlights = styled(HighlightsSvg)`
  ${({ theme }) => css`
    position: absolute;
    top: -0.3rem;
    left: -1.7rem;
    width: 21rem;
    height: 9rem;
    z-index: ${theme.zIndex.textBackground};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.regular20};
    color: ${theme.colors.light.gray300};
    margin: 2.8rem 0 3.2rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      ${theme.fonts.medium20};
      margin: 2.5rem 2.3rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.medium16};
    }
  `}
`;

export const ReturnPrevPageButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.medium16};
    padding: 1.6rem 2.4rem;
    color: ${theme.colors.light.white};
    background: ${theme.colors.light.black};
    border: 0;
    border-radius: 0.4rem;

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      ${theme.fonts.regular14};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 1.2rem 2.4rem;
    }
  `}
`;

const NotFoundPage = () => {
  const handleReturnPrevPage = () => {
    const historyState = window.history.state;

    if (!historyState) {
      navigate(ROUTES.HOME);
      return;
    }

    navigate(ROUTES.PREV_PAGE);
  };

  return (
    <Layout>
      <NotFoundPageWrapper>
        <NotFountSection>
          <Heading>존재하지 않는 페이지</Heading>
          <Oops aria-hidden>
            Oops.
            <DrawingLine />
            <Highlights />
          </Oops>
          <Description>존재하지 않는 페이지입니다.</Description>
          <ReturnPrevPageButton onClick={handleReturnPrevPage}>
            이전 페이지로 돌아가기
          </ReturnPrevPageButton>
        </NotFountSection>
      </NotFoundPageWrapper>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
