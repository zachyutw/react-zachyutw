import React, { useEffect, useRef, useState, useCallback } from 'react';
import { withField } from '../withField';
import s from './InputAddress.module.css';
// import _ from 'lodash';

// const DEFAULT_LAT = -33.8617374;
// const DEFAULT_LNG = 151.2021291;

const InputAddress = ({
  actionType,
  placeholder,
  dataList = {},
  maxLength,
  onCancel = (e, data) => console.log(data),
  onPlace = (e, data) => console.log(data),
  input = {},
  ...rest
}) => {
  const { onChange, name, value = '' } = input;
  const [localValue, setLocalValue] = useState(value);
  const ref = useRef(null);
  useEffect(() => {
    console.log(value);
    setLocalValue(value);
  }, [value]);
  useEffect(() => {
    if (ref) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        ref.current,
        { types: ['geocode'] }
      );
      autocomplete.addListener('place_changed', () =>
        handleOnPlaceChanged(autocomplete)
      );
    }
  }, [ref]);
  const handleOnPlaceChanged = useCallback(autocomplete => {
    const place = autocomplete.getPlace();
    if (place.address_components) {
      setLocalValue(place.formatted_address);
      onChange(null, {
        actionType,
        name,
        value: place.formatted_address,
        [name]: place.formatted_address
      });
      onPlace(null, { actionType, name: 'place', place });
    } else {
      onPlace(null, { actionType, name: 'place', place: {} });
    }
  }, []);

  const handleOnChange = useCallback(e => {
    setLocalValue(e.target.value);
    onChange(e, { actionType, name: e.target.name, value: e.target.value });
  }, []);

  const handleOnCancel = useCallback(e => {
    onCancel(e, { name });
    onChange(e, { actionType, name, value: '', [name]: '' });
    setLocalValue('');
    ref.current.value = '';
  }, []);

  return (
    <div className={['input', s.input].join(' ')}>
      {/* {!loadSdk && <LoadScript url={process.env.REACT_APP_GOOGLE_MAP_API} onLoaded={handleOnLoad} />} */}
      {localValue && (
        <span className={s.closeBtn} onClick={handleOnCancel}>
          <div>+</div>
        </span>
      )}
      <input
        placeholder={window.t(placeholder)}
        name={name}
        {...rest}
        maxLength={maxLength}
        {...input}
        value={localValue}
        ref={ref}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default withField(InputAddress);
