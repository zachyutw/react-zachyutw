import React, { useState, useCallback, useEffect } from 'react';
const Paragraph = ({ text = '', maxLength = 50 }) => {
  const [isMore, setIsMore] = useState(text.length > maxLength);
  const _onClick = useCallback(() => {
    setIsMore(value => !value);
  }, []);
  useEffect(() => {
    setIsMore(text.length > maxLength);
  }, [text, maxLength]);

  return (
    <React.Fragment>
      {text.length > maxLength && isMore ? text.slice(0, maxLength) : text}
      {isMore && <span onClick={_onClick}>...</span>}
    </React.Fragment>
  );
};
export default Paragraph;
