import React, { useContext } from 'react';
import GlobalContext from '../../../contexts/Global/GlobalContext';
import {
  Link as MLink,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';
import s from './NavMain.module.css';
const INTRODUCTION = 'introduction';
const SKILLS = 'skills';
const CAREER = 'career';
const WORKS = 'works';
const mainNavs = [
  { href: '#' + INTRODUCTION, innerText: INTRODUCTION },
  { href: '#' + SKILLS, innerText: SKILLS },
  { href: '#' + CAREER, innerText: CAREER },
  { href: '#' + WORKS, innerText: WORKS }
];
const NavMain = ({ children, className }) => {
  const { activedSection } = useContext(GlobalContext);
  return (
    <div className={className}>
      <BottomNavigation className={s.mainNavs} style={{ padding: '0 1rem' }}>
        {mainNavs.map(({ href, innerText }) => (
          <BottomNavigationAction
            key={href}
            href={href}
            rel="noopener noreferrer"
            component={MLink}
            data-selected={activedSection === innerText}
            showLabel
            label={innerText.toUpperCase()}
          />
        ))}
      </BottomNavigation>
      {children}
    </div>
  );
};
export default NavMain;
