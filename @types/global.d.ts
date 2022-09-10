declare module '*.svg' {
  import { FunctionComponent, SVGProps, ReactSVGElement } from 'react';

  const ReactComponent: FunctionComponent<SVGProps<ReactSVGElement> & { title?: string }>;
  export default ReactComponent;
}
