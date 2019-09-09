import React, { useContext, useEffect, useRef } from 'react';
import GlobalContext from '../../../contexts/Global/GlobalContext';
import { Container } from '@material-ui/core';
import useIsScrolledIntoView from 'react-use-is-scrolled-into-view';
const SectionContainer = ({ children, id, className }) => {
  const ref = useRef(null);
  const isIntoView = useIsScrolledIntoView(ref, false);
  const { onChange } = useContext(GlobalContext);
  useEffect(
    e => {
      onChange(e, { id, actionType: 'sectionIntoView', isIntoView });
    },
    [isIntoView, id, onChange]
  );
  return (
    <section
      ref={ref}
      id={id}
      className={['sectionContainer', className].join(' ')}
      data-inview={isIntoView}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default SectionContainer;
