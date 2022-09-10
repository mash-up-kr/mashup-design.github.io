import throttle from 'lodash-es/throttle';
import { useEffect, useState } from 'react';
import { breakPoint } from '@/styles/themes/breakPoint';
import { ViewPort, VIEWPORT_SIZE } from '@/constants/viewport';

const useDetectViewport = (initialViewPort = breakPoint.value) => {
  const [viewportSize, setViewportSize] = useState<ViewPort>(VIEWPORT_SIZE.DESKTOP);

  const { mobile, tablet } = initialViewPort;

  useEffect(() => {
    const detectionViewport = () => {
      const { innerWidth: vw } = window;

      if (vw <= mobile) {
        setViewportSize(VIEWPORT_SIZE.MOBILE);
      } else if (vw > mobile && vw <= tablet) {
        setViewportSize(VIEWPORT_SIZE.TABLET);
      } else if (vw > tablet) {
        setViewportSize(VIEWPORT_SIZE.DESKTOP);
      }
    };

    detectionViewport();

    const handleDetectViewport = throttle(detectionViewport, 200);
    window.addEventListener('resize', handleDetectViewport);

    return () => {
      window.removeEventListener('resize', handleDetectViewport);
    };
  }, [mobile, tablet]);

  return { viewportSize };
};

export default useDetectViewport;
