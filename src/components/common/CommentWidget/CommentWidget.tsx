import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

interface UtterancesAttributesType {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
}

const UtterancesWrapper = styled.div`
  margin: 8rem 0 12rem;
`;

const CommentWidget = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current === null) return;

    const utterances: HTMLScriptElement = document.createElement('script');

    const attributes: UtterancesAttributesType = {
      src: 'https://utteranc.es/client.js',
      repo: 'mash-up-kr/mashup-design.github.io',
      'issue-term': 'url',
      label: 'Comment',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current.appendChild(utterances);
  }, [element]);

  return <UtterancesWrapper ref={element} />;
};

export default CommentWidget;
