import { useCallback, useEffect, useReducer } from 'react';
const initState = {
    actived: null,
    countdown: 10000,
    timeout: 10000
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'start':
            return { ...state, actived: true };
        case 'running':
            return { ...state, countdown: action.countdown };
        case 'end':
            return { ...state, actived: false };
        case 'setValue':
            return { ...state, ...action };
        default:
            return {};
    }
};

const useCountdown = (propTimeout = 10000, propActived = null) => {
    const [ state, dispatch ] = useReducer(reducer, { ...initState, countdown: propTimeout, timeout: propTimeout, actived: propActived });
    const { actived, countdown, timeout } = state;
    const setCountdownTimeout = useCallback(
        (sendTimeout) => {
            dispatch({ type: 'setValue', actived: true, timeout: sendTimeout ? sendTimeout : timeout });
        },
        [ dispatch, propTimeout ]
    );
    useEffect(
        () => {
            const gap = 1000;
            if (actived) {
                dispatch({ type: 'start' });
                let countDownInterval = timeout;
                const intervalId = setInterval(function (){
                    countDownInterval = countDownInterval - gap;
                    dispatch({ type: 'running', countdown: countDownInterval });
                    if (countDownInterval === 0) {
                        clearInterval(intervalId);
                        dispatch({ type: 'end' });
                    }
                }, gap);
            }
        },
        [ timeout, actived, dispatch ]
    );
    return [ countdown, setCountdownTimeout ];
};
export default useCountdown;
