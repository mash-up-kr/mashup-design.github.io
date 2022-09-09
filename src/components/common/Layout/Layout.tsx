import { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import themes from '@/styles/themes';
import * as Styled from './Layout.styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={themes}>
      <Styled.Layout>{children}</Styled.Layout>
    </ThemeProvider>
  );
};

export default Layout;
