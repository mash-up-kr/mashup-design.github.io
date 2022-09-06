import React from 'react';
import type { HeadFC } from 'gatsby';

const IndexPage = () => {
  return <main>Home Page</main>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
