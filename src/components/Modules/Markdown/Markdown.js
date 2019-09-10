import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
const Markdown = ({ asyncSource }) => {
  const [mdString, setMdString] = useState('');
  useEffect(() => {
    fetch(asyncSource)
      .then(resp => resp.text())
      .then(text => {
        setMdString(text);
      });
  });
  return <ReactMarkdown source={mdString} />;
};

export default Markdown;
