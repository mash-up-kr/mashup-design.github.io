import React from 'react';
import type { HeadFC } from 'gatsby';
import Layout from '@/components/common/Layout/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <main>Home Page</main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Mash-Up Design Team</title>;
