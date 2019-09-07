import React, { useCallback, useRef, useEffect, useContext } from 'react';
import ButtonMenu from '../../Modules/Button/ButtonMenu';
import GlobalContext from '../../../contexts/Global/GlobalContext';
import s from './LayoutR.module.css';
import { Link } from 'react-router-dom';
// import ScreenP from '../../Screen/ScreenP/ScreenP';
// import useToggle from '../../../hooks/useToggle';
const Logo = () => {
  const { scrollMoving } = useContext(GlobalContext);
  return (
    <Link
      to="/zachyutw"
      data-scroll={scrollMoving}
      className={[s.logo, 'logo'].join(' ')}
    >
      Zach Full React Developer
    </Link>
  );
};
const Navbar = () => {
  const handleOnClick = useCallback((e, data) => {
    console.log(data);
  }, []);
  return (
    <div className="nav">
      <ButtonMenu name="menu" value="menu" onClick={handleOnClick} />
      <Logo />
      <div className="ui button blue basic">on GitHub</div>
    </div>
  );
};

const LayoutR = ({ children }) => {
  return (
    <div>
      {/* <nav className='navContainer'>
                <div className='ui container'>
                    <Navbar />
                </div>
            </nav> */}

      {children}
    </div>
  );
};
export default LayoutR;
