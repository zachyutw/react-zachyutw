import React, { useMemo, useCallback } from 'react';
import { pickByIdentity } from '../../lib';

export const withField = (Component) => (props) => {
    const { actionType, input = {}, className, meta, name, onChange, onBlur = () => {}, onFocus = () => {}, onClick, defaultValue, ref, ...rest } = props;
    const metaClassNames = useMemo(() => pickByIdentity(meta), [ meta ]);
    const { onChange: inputOnChange, onBlur: inputOnBlur, onFocus: inputFocus, ...restInput } = input;

    const handleOnChange = useCallback(
        (e, data) => {
            if (onChange) {
                onChange(e, data);
            } else if (inputOnChange) {
                inputOnChange(data.value);
            }
        },
        [ inputOnChange, onChange ]
    );
    const handleOnBlur = useCallback(
        (e) => {
            onBlur(e);
            if (inputOnBlur) {
                inputOnBlur(e);
            }
        },
        [ onBlur, inputOnBlur ]
    );
    const handleOnFocus = useCallback(
        (e) => {
            onFocus(e);

            if (inputFocus) {
                inputFocus(e);
            }
        },
        [ onFocus, inputFocus ]
    );
    return <Component {...rest} className={[ className, metaClassNames ].join(' ')} actionType={actionType} input={{ name, value: defaultValue, ...restInput, onBlur: handleOnBlur, onChange: handleOnChange, onFocus: handleOnFocus, onClick, ref }} />;
};
