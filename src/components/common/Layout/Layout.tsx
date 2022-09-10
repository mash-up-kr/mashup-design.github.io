import { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import themes from '@/styles/themes';
import { GlobalNavigationBar, Footer } from '@/components';
import * as Styled from './Layout.styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={themes}>
      <Styled.Layout>
        <GlobalNavigationBar />
        <Styled.ContentsSection>{children}</Styled.ContentsSection>
        <Footer />
      </Styled.Layout>
    </ThemeProvider>
  );
};

export default Layout;
