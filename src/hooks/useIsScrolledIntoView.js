import { useState, useCallback, useEffect } from 'react';
const isInViewport = (el, { top: t, height: h } = el.getBoundingClientRect()) =>
  t <= window.innerHeight && t + h >= 0;
const useIsScrolledIntoView = (ref, name = 'default') => {
  const [isIntoView, setIsIntoView] = useState(false);
  const handleOnScroll = useCallback(() => {
    setIsIntoView(isInViewport(ref.current));
    console.log(isInViewport(ref.current), name);
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);
    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
  }, [ref]);
  return isIntoView;
};
export default useIsScrolledIntoView;
