import React, { useMemo } from 'react';
import InputP from '../InputP/InputP';
import InputTextareaP from '../InputTextareaP/InputTextareaP';
import InputFieldLayout from '../InputFieldLayout/InputFieldLayout';
import InputM from '../InputM/InputM';
import InputItemP from '../InputItemP/InputItemP';
const InputField = ({ className, style, meta, htmlFor, fieldType, ...rest }) => {
    const InputRender = useMemo(
        () => {
            switch (fieldType) {
                case 'InputItemListP':
                    return <InputItemP.List {...rest} />;
                case 'inputItemP':
                    return <InputItemP {...rest} />;
                case 'inputM':
                    return <InputM {...rest} />;
                case 'textarea':
                    return <InputTextareaP {...rest} />;
                case 'inputP':
                    return <InputP {...rest} />;
                default:
                    return <div />;
            }
        },
        [ fieldType, rest ]
    );
    return (
        <InputFieldLayout className={className} style={style} meta={meta} htmlFor={htmlFor}>
            {InputRender}
        </InputFieldLayout>
    );
};

export default InputField;
