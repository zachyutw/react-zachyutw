import React, { useEffect } from 'react';
import ModalP from '../ModalP/ModalP';
import useCountdown from '../../../hooks/useCountdown';
import s from './ModalNotification.module.css';

const transitionStyle = (actived, side = 'left') => {
    return actived ? { transition: 'transform 400ms ease-in-out', transform: `scale(1.0,1.0)` } : { transition: 'transform 300ms ease-in-out', transform: `scale(0,0)` };
};

const ModalNotification = ({ onConfirm, children, actived, setActived, backgroundColor = 'rgba(0, 0, 0, 0)', side = 'left', ...rest }) => {
    const [ countdown, setCountdownTimeout ] = useCountdown(3000, actived);
    useEffect(
        () => {
            if (actived) {
                // console.log('123');
                setCountdownTimeout();
            }
        },
        [ actived ]
    );
    useEffect(
        () => {
            if (countdown === 0) {
                setActived((state) => !state);
            }
        },
        [ countdown, setActived ]
    );
    return (
        <ModalP className={[ 'center flex color', s.modal ].join(' ')} style={transitionStyle(actived, side)} actived={actived} backgroundColor={backgroundColor} onConfirm={onConfirm} setActived={setActived} {...rest}>
            <div className={[ 'ui segment', s.content ].join(' ')}>{children}</div>
        </ModalP>
    );
};
export default ModalNotification;
