import React from 'react';
import SectionContainer from '../../Modules/SectionContainer/SectionContainer';
import { Link as MLink } from '@material-ui/core';
import MailToLink from '../../Modules/MailToLink/MailToLink';
const Footer = () => {
  return (
    <SectionContainer>
      <p>{`Copyright © ${process.env.REACT_APP_AUTHER_NAME}`}</p>
      <MailToLink send={process.env.REACT_APP_CONTACT_EMAIL} body="Hi Zach Yu:">
        zachyu.tw@gmail.com
      </MailToLink>
      <MLink href={process.env.REACT_APP_CV}>current resume</MLink>
    </SectionContainer>
  );
};

export default Footer;
