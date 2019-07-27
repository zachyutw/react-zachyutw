import React, { useCallback, useMemo } from 'react';
import './ModalP.scss';
const ModalP = ({ className, children, actived, setActived, onConfirm, controller, top, bottom, style, justifyContent, backgroundColor, bgStyle, ...rest }) => {
    const handleOnToggle = useCallback(
        () => {
            setActived((state) => !state);
        },
        [ setActived ]
    );
    const memoTop = useMemo(
        () => {
            if (top) {
                return { paddingTop: `${top}`, alignItems: 'flex-start' };
            } else if (bottom) {
                return { paddingBottom: `${bottom}`, alignItems: 'flex-end' };
            } else {
                return {};
            }
        },
        [ top, bottom ]
    );

    const memoJustifyContent = useMemo(
        () => {
            if (justifyContent) {
                return { justifyContent: `${justifyContent}` };
            } else {
                return {};
            }
        },
        [ justifyContent ]
    );
    const renderChildren = useMemo(
        () => {
            if (typeof children === 'function') {
                return children({ onConfirm, controller, ...rest });
            } else if (typeof children === 'object') {
                return children;
            } else {
                return '';
            }
        },
        [ children, onConfirm, controller, rest ]
    );

    return (
        <div className={[ 'modalP', actived ? 'show' : 'hidden', className ].join('  ')} style={{ ...memoJustifyContent, ...memoTop, ...style }} {...rest}>
            <div className={[ 'content' ].join('  ')}>{renderChildren}</div>
            <div className='bg' style={{ backgroundColor: backgroundColor, ...bgStyle }} onClick={handleOnToggle} />
        </div>
    );
};
export default ModalP;
