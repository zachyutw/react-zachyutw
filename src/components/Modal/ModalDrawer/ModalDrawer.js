import React, { useContext, useCallback } from 'react';
import ModalP from '../ModalP/ModalP';
import s from './ModalDrawer.module.css';

const transitionStyle = (actived, side = 'top') => {
    return actived ? { transition: 'transform 600ms ease-out', transform: `translate(0, 0)` } : { transition: 'transform 400ms ease-in-out', transform: `translate(0, ${side === 'top' ? '-100vh' : '100vh'})` };
};

const ModalDrawer = ({ onConfirm, children, setActived, className, backgroundColor = 'rgba(0, 0, 0, 0)', side = 'bottom', actived, ...rest }) => {
    return (
        <ModalP
            className={[ 'center flex color clean', s.modal, className ].join(' ')}
            style={transitionStyle(actived, side)}
            top={side === 'top' ? '0' : null}
            bottom={side === 'bottom' ? '0' : null}
            actived={actived}
            backgroundColor={backgroundColor}
            onConfirm={onConfirm}
            setActived={setActived}
            {...rest}
        >
            {children}
        </ModalP>
    );
};
export default ModalDrawer;
