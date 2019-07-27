import React, { useContext, useCallback } from 'react';
import ModalP from '../ModalP/ModalP';
import s from './ModalSidebar.module.css';

const transitionStyle = (actived, side = 'left') => {
    return actived ? { transition: 'transform 400ms ease-in-out', transform: `translate(0, 0)` } : { transition: 'transform 300ms ease-in-out', transform: `translate(${side === 'left' ? '-100vw' : '100vw'}, 0)` };
};

const ModalSidebar = ({ onConfirm, children, className, setActived, backgroundColor = 'rgba(0, 0, 0, 0)', side = 'left', actived, ...rest }) => {
    return (
        <ModalP
            className={[ 'center flex color', s.modal, className ].join(' ')}
            style={transitionStyle(actived, side)}
            justifyContent={side === 'left' ? 'flex-start' : 'flex-end'}
            top='0'
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
export default ModalSidebar;
