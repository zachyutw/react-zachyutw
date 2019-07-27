import React, { useContext, useCallback, useState, useEffect } from 'react';
import { withField } from '../withField';
const InputDataList = ({ options = [], id }) => {
    return <datalist id={id}>{options.map((value, index) => <option key={index} value={value} />)}</datalist>;
};

const InputP = ({ actionType, placeholder, dataList = {}, maxLength, input = {}, children, ...rest }) => {
    const [ wordLength, setWordLength ] = useState(0);
    const { onChange, name, value = '' } = input;
    const [ localValue, setValue ] = useState(value);

    const handleOnChange = useCallback(
        (e) => {
            setWordLength(e.target.value.length);
            setValue(e.target.value);
            onChange(e, { actionType, name, value: e.target.value, [name]: e.target.value });
        },
        [ onChange ]
    );
    useEffect(
        () => {
            setValue(value);
        },
        [ value ]
    );

    return (
        <div className='input'>
            <input placeholder={window.t(placeholder)} name={name} {...rest} maxLength={maxLength} {...input} list={dataList.id} data-word-length={wordLength} value={localValue} onChange={handleOnChange} />
            {dataList.id && <InputDataList {...dataList} />}
            {children}
        </div>
    );
};

export default withField(InputP);
