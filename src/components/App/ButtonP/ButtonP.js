import React, { useCallback } from 'react';

const ButtonP = ({ name, text, value, className, onClick, onChange, children, ...rest }) => {
    const handleOnClick = useCallback(
        (e) => {
            if (onChange) {
                onChange(e, { name: e.target.name, value });
            }
            if (onClick) {
                onClick(e, { name: e.target.name, value });
            }
        },
        [ onChange, onClick, value ]
    );
    return (
        <button type='button' name={name} className={[ className, 'ui button' ].join(' ')} onClick={handleOnClick}>
            {children ? children : text}
        </button>
    );
};
export default ButtonP;
