import throttle from 'lodash-es/throttle';
import { useEffect, useState } from 'react';

const useScrollTop = () => {
  const [isScrollTop, setIsScrollTop] = useState(true);

  useEffect(() => {
    const handleDetectIsScrollTop = throttle(() => {
      const { scrollY } = window;

      setIsScrollTop(scrollY === 0);
    }, 200);

    handleDetectIsScrollTop();

    window.addEventListener('scroll', handleDetectIsScrollTop);

    return () => {
      window.removeEventListener('scroll', handleDetectIsScrollTop);
    };
  }, []);

  return { isScrollTop };
};

export default useScrollTop;
