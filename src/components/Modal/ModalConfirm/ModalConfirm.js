import React, { useContext, useCallback } from 'react';
import ModalP from '../ModalP/ModalP';
import GlobalContext from '../../../contexts/Global/GlobalContext';
import s from './ModalConfirm.module.css';

const ModalConfirm = ({ onConfirm, children, setActived, ...rest }) => {
    const globalContext = useContext(GlobalContext);
    const { t } = globalContext;
    const handleOnClose = useCallback(
        () => {
            setActived((state) => !state);
        },
        [ setActived ]
    );
    return (
        <ModalP className='center flex color' top='25rem' backgroundColor='rgba(0, 0, 0, 0.5)' onConfirm={onConfirm} setActived={setActived} {...rest}>
            <div className={[ 'ui segment', s.content ].join(' ')}>
                {children}
                <div className={s.btns}>
                    <button type='button' onClick={handleOnClose} className='ui button clean'>
                        {t('Cancel')}
                    </button>
                    <button type='button' onClick={onConfirm} className='ui button'>
                        {t('Confirm')}
                    </button>
                </div>
            </div>
        </ModalP>
    );
};
export default ModalConfirm;
