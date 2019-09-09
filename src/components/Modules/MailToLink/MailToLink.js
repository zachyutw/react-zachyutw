import React from 'react';
import { Link as MLink } from '@material-ui/core';
const MailToLink = ({ send, body, innerText, children }) => {
  return (
    <MLink
      target="_blank"
      href={`mailto:${send}?body=${encodeURI(body)}`}
      rel="noopener noreferrer"
    >
      {innerText}
      {children}
    </MLink>
  );
};

export default MailToLink;
