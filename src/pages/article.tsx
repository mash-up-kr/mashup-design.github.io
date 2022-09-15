import { Layout, SubHeader } from '@/components';
import { HeadFC } from 'gatsby';

const article = () => {
  return (
    <Layout>
      <SubHeader
        title="Design Article"
        description="매시업 디자인팀의 디자인 고찰 이야기"
        color="blue"
      />
    </Layout>
  );
};

export default article;

export const Head: HeadFC = () => <title>Mash-Up Design Team - Article</title>;
