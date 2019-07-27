import React, { useContext, useCallback } from 'react';
import GlobalContext from '../../../contexts/Global/GlobalContext';
import Input from '@material-ui/core/Input';
/**
 *
 * @param {e } event - Dom Event which sould get the name and value from target
 * @param {onChange} callback
 * @param {input} InputObject Create By Final Form Field 
 * @callback onChange
 *  @param {e} event - Dom Event which sould get the name and value from target
 *  @param  {name} String
 *  @param {value} Any 
 */
const finalTargetOnChange = (e, propOnChange, fieldOnChange) => {
    if (propOnChange) {
        propOnChange(e, { name: e.target.name, value: e.target.value });
    } else {
        fieldOnChange(e.target.value);
    }
};
/**
 *
 * @param {input} InputObject Create By Final Form Field
 * 
 */
const InputM = ({ input, onChange, value, placeholder, type, ...rest }) => {
    const globalContext = useContext(GlobalContext);
    const { t } = globalContext;
    const handleOnChange = useCallback((e) => finalTargetOnChange(e, onChange, input.onChange), [
        input.onChange,
        onChange
    ]);
    return (
        <Input
            className={'input inputP ' + type}
            value={value}
            {...rest}
            {...input}
            onChange={handleOnChange}
            placeholder={t(placeholder)}
        />
    );
};

export default InputM;
