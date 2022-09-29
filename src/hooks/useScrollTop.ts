import throttle from 'lodash-es/throttle';
import { useEffect, useState } from 'react';

const useScrollTop = () => {
  const [isScrollTop, setIsScrollTop] = useState(true);

  useEffect(() => {
    const handleDetectIsScrollTop = throttle(() => {
      const { scrollY } = window;

      if (scrollY !== 0) {
        if (!isScrollTop) return;

        setIsScrollTop(false);
        return;
      }

      setIsScrollTop(true);
    }, 200);

    window.addEventListener('scroll', handleDetectIsScrollTop);

    return () => {
      window.removeEventListener('scroll', handleDetectIsScrollTop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isScrollTop };
};

export default useScrollTop;
