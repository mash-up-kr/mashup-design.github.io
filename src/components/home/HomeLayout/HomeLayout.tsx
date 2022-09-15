import { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import themes from '@/styles/themes';
import { GlobalNavigationBar, Footer } from '@/components';
import * as Styled from './HomeLayout.styled';

interface LayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalNavigationBar />
      <Styled.Layout>
        <Styled.ContentsSection>{children}</Styled.ContentsSection>
      </Styled.Layout>
      <Footer />
    </ThemeProvider>
  );
};

export default HomeLayout;
