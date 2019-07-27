import React, { useState, useContext, useCallback, useEffect, useMemo } from 'react';
import _ from 'lodash';
import s from './InputImages.module.css';
import GlobalContext from '../../../contexts/Global/GlobalContext';
import { withField } from '../withField';
import { fileAsDataURL } from '../../../lib/fileReader';
import InputImageImg from '../InputImageImg/InputImageImg';

const InputImages = (props) => {
    const {
        className,
        tag,
        trigger,
        isExtend,
        onClick = (e, data) => console.log(data),
        input = {},
        multiple,
        maxLength,
        ...rest
    } = props;
    const globalContext = useContext(GlobalContext);

    const { name, onChange, value = [] } = input;

    const [ localValue, setValue ] = useState(value);

    const { t } = globalContext;
    const handleOnChange = useCallback(
        async (e) => {
            const filesCollection = e.target.files || {};
            const files = _.values(filesCollection);
            //Read DataUrl
            let readImages = await Promise.all(
                _.map(files, async (file) => {
                    const dataUrl = await fileAsDataURL(file);
                    return { file, imageUrl: dataUrl, thumbnailUrl: dataUrl, tags: `#${file.name}#${tag}` };
                })
            );
            const callbackValue = isExtend ? (input ? input.value : value) : [];
            let newValue = [ ...callbackValue, ...readImages ];

            if (maxLength) {
                newValue = newValue.slice(0, maxLength);
            }
            setValue(newValue);
        },
        [ maxLength, tag, isExtend ]
    );
    const handleOnPull = useCallback(
        (e) => {
            const value = e.target.value;
            setValue((localValue) => {
                return _.reject(localValue, (image, index) => index + '' === value);
            });
        },
        [ localValue ]
    );
    useEffect(
        () => {
            onChange(null, { name, value: localValue });
        },
        [ localValue, onChange, name ]
    );

    const handleOnClick = useCallback(
        (e, data) => {
            onClick(e, { ...data, name });
        },
        [ onClick, name ]
    );
    console.log(localValue);
    return (
        <div className={[ 'inputImages', className ].join(' ')} {...rest}>
            <div className={s.fileBtn}>
                <input
                    name={name}
                    className={[ s.input, 'inputImage' ].join(' ')}
                    maxLength={maxLength}
                    onChange={handleOnChange}
                    type='file'
                    multiple={multiple}
                />

                {trigger ? trigger : <button>{t('Image') + ' ' + t('Upload')}</button>}
            </div>
            <div>
                {localValue.map((image, index) => {
                    return (
                        <InputImageImg
                            key={index}
                            onChange={handleOnClick}
                            name='image'
                            onPull={handleOnPull}
                            index={index}
                            defaultValue={image}
                        />
                    );
                })}
            </div>
        </div>
    );
};
const WithField = withField(InputImages);
export default WithField;
