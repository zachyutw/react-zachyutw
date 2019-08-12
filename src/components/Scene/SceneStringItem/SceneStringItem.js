import React, { useCallback } from 'react';
import _ from 'lodash';
const itemOnChange = (onChange, name, value, item) => e => {
  onChange(e, { [name]: value, item });
};
const SceneStringItem = ({ item, name, value, onChange = () => {} }) => {
  const { name: itemName } = item;
  const handleOnChange = useCallback(
    itemOnChange(onChange, name, value, item),
    [item, name, value]
  );
  return (
    <div
      onClick={handleOnChange}
      data-typing={itemName}
      style={
        itemName.length > 7
          ? { left: '0', fontSize: `${2 * (1 + 2 / itemName.length)}rem` }
          : { right: '0', fontSize: `${2 * (1 + 2 / itemName.length)}rem` }
      }
    >
      {_.capitalize(itemName)}
    </div>
  );
};

export default SceneStringItem;
