import React from 'react';
import type { HeadFC } from 'gatsby';
import Layout from '@/components/common/Layout/Layout';
import { Header } from '@/components';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <main />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Mash-Up Design Team</title>;
