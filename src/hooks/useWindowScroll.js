import { useCallback, useState, useEffect } from 'react';

const useWindowScroll = (isAutoInit = false, timeout = 2000) => {
    const [ scrollMoving, setScrollMoving ] = useState(0);
    const handleOnScroll = useCallback((e) => {
        const moving = document.body.getBoundingClientRect().top - window.scrollPos;
        setScrollMoving(moving || 0);
        window.scrollPos = document.body.getBoundingClientRect().top;
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);

        return () => {
            window.removeEventListener('scroll', handleOnScroll);
        };
    }, []);
    useEffect(
        () => {
            if (isAutoInit) {
                if (scrollMoving !== 0) {
                    let timeoutId = null;

                    timeoutId = setTimeout(() => {
                        setScrollMoving(0);
                        clearTimeout(timeoutId);
                    }, timeout);
                }
            }
        },
        [ scrollMoving ]
    );
    return [ scrollMoving, setScrollMoving ];
};
export default useWindowScroll;
