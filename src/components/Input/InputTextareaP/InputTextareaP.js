import React, { useCallback, useState, useRef, useMemo, useEffect } from 'react';
import { withField } from '../withField';
// import s from './InputTextareaP.module.css';

const InputTextareaP = ({ actionType, placeholder, input = {}, maxLength, style, autoGrow, ...rest }) => {
    const { onChange, name, value = '', ...restInput } = input;
    const [ localValue, setValue ] = useState('');
    const [ wordLength, setWordLength ] = useState(0);

    const ref = useRef({});

    const handleOnChange = useCallback(
        (e) => {
            setWordLength(e.target.value.length);
            setValue(e.target.value);
            onChange(e, { actionType, name: e.target.name, value: e.target.value });
        },
        [ onChange ]
    );
    useEffect(
        () => {
            setValue(value);
        },
        [ value ]
    );
    const height = useMemo(
        () => {
            return Math.max(ref.current.scrollHeight, ref.current.clientHeight) || ref.current.clientHeight;
        },
        [ ref.current.scrollHeight ]
    );
    console.log(value);
    return (
        <div className='relative'>
            <textarea {...rest} {...input} ref={ref} value={localValue} placeholder={window.t(placeholder)} name={name} data-word-length={wordLength} maxLength={maxLength} style={{ height: autoGrow ? height : '', ...rest }} onChange={handleOnChange} />
        </div>
    );
};
export default withField(InputTextareaP);
