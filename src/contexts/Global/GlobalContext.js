import React, { createContext, useState, useCallback, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import detectIt from 'detect-it';
import _ from 'lodash';
// import useWindowScroll from '../../hooks/useWindowScroll';
const GlobalContext = createContext({});

export const Provider = withRouter(props => {
  const [state, setState] = useState({});
  const [activedSection, setActiveSection] = useState('introduction');
  // const { scrollMoving, wheelEvent } = useWindowScroll(true, 1000);
  window.pushG = props.history.push;
  window.replaceG = props.history.replace;
  window.t = text => text;
  // const handleOnScroll = useCallback(
  //     _.debounce(() => {
  //         console.log(window);
  //     }, 50),
  //     []
  // );
  const _onChange = useCallback((e, data) => {
    switch (data.actionType) {
      case 'sectionIntoView':
        if (data.isIntoView) {
          setActiveSection(data.id);
        }
        break;
      default:
        break;
    }
  }, []);
  useEffect(() => {
    // window.addEventListener('touchstart', handleOnScroll, detectIt.passiveEvents ? { passive: true } : false);
    // window.addEventListener('scroll', handleOnScroll, detectIt.passiveEvents ? { passive: true } : false);
    // return () => {
    //     window.removeEventListener('touchstart', handleOnScroll);
    //     window.removeEventListener('scroll', handleOnScroll);
    // };
  }, []);
  return (
    <GlobalContext.Provider
      value={{ ...state, setState, onChange: _onChange, activedSection }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
});

export const withGlobal = Componet => props => {
  return (
    <Provider>
      <Componet {...props} />
    </Provider>
  );
};

export default GlobalContext;
