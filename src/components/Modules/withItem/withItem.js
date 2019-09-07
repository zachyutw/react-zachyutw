import React from 'react';
import _ from 'lodash';
const withItem = Component => props => {
  const {
    onChange = () => {},
    item,
    index,
    name,
    id,
    value,
    actionType,
    selected,
    ...rest
  } = props;
  const meta = (name, id, value, actionType, selected, index) => ({
    id,
    [name]: value,
    actionType,
    selected,
    index
  });
  const _onMouseEnter = e => {
    onChange(e, { ...meta, item, actionType: 'onMouseEnter' });
  };
  const _onMouseLevae = e => {
    onChange(e, { ...meta, item, actionType: 'onMouseLeave' });
  };
  const _onChange = e => {
    onChange(e, { ...meta, item });
  };
  const _onClickImage = e => {
    e.stopPropagation();
    onChange(e, { ...meta, item, actionType: 'onClickImage' });
  };

  return (
    <Component
      {...rest}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLevae}
      onClickImage={_onClickImage}
      item={item}
      meta={meta}
      onClick={_onChange}
      onChange={_onChange}
    />
  );
};

export default withItem;
