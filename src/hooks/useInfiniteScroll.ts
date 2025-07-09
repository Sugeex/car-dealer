import { useEffect, type RefObject } from 'react';

const useInfiniteScroll = (
  containerRef: RefObject<HTMLElement | null>, 
  callback: () => void
) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        callback();
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [callback, containerRef]);
};

export default useInfiniteScroll;