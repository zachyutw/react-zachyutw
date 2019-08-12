import { useCallback, useState, useEffect } from 'react';
import _ from 'lodash';

const useWindowScroll = (isAutoInit = false, timeout = 2000) => {
  const [scrollMoving, setScrollMoving] = useState(0);
  const [wheelEvent, setWheelEvent] = useState({});
  const handleOnWheel = useCallback(e => {
    setWheelEvent(e);
  }, []);

  const handleOnScroll = useCallback(e => {
    const moving = document.body.getBoundingClientRect().top - window.scrollPos;
    setScrollMoving(moving || 0);
    window.scrollPos = document.body.getBoundingClientRect().top;
  }, []);
  useEffect(() => {
    window.addEventListener(
      'scroll',
      _.debounce(handleOnScroll, 300, {
        leading: true,
        trailing: false
      }),
      {
        capture: true,
        passive: true
      }
    );
    window.addEventListener(
      'wheel',
      _.debounce(handleOnWheel, 300, {
        leading: true,
        trailing: false
      }),
      {
        capture: true,
        passive: true
      }
    );

    return () => {
      window.removeEventListener('scroll', handleOnScroll, {
        capture: true,
        passive: true
      });
      window.removeEventListener('wheel', handleOnScroll, {
        capture: true,
        passive: true
      });
    };
  }, []);
  useEffect(() => {
    if (isAutoInit) {
      if (scrollMoving !== 0) {
        let timeoutId = null;

        timeoutId = setTimeout(() => {
          setScrollMoving(0);
          clearTimeout(timeoutId);
        }, timeout);
      }
    }
  }, [scrollMoving]);
  return { scrollMoving, setScrollMoving, wheelEvent };
};
export default useWindowScroll;
