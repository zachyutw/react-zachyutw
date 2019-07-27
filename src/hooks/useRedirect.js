import { useState, useEffect } from 'react';
import useCountdown from './useCountDown';
const useRedirect = (history, redirect, timeout = 10000) => {
    const [ countdown ] = useCountdown(timeout);
    const [ to, setTo ] = useState(redirect);
    useEffect(
        () => {
            if (to) {
                if (countdown === 0) {
                    history.push(to);
                }
            }
        },
        [ to, countdown, history ]
    );
    return [ countdown, setTo ];
};

export default useRedirect;
