import React, { useCallback } from 'react';
import _ from 'lodash';

import LayoutR from '../../Layout/LayoutR/LayoutR';
import PageP from '../../Modules/PageP/PageP';
import s from './HomePage.module.css';
import HomeIntro from './HomeIntro';

import NavMain from '../../Nav/NavMain/NavMain';
import SectionContainer from '../../Modules/SectionContainer/SectionContainer';

const SkillsBox = React.lazy(() => import('./SkillsBox'));
const CarrerBox = React.lazy(() => import('./CarrerBox'));
const WorksBox = React.lazy(() => import('./WorksBox'));
const Footer = React.lazy(() => import('./Footer'));
// import Footer from './Footer';
const INTRODUCTION = 'introduction';

const IntroductionBox = () => {
  return (
    <SectionContainer id={INTRODUCTION}>
      <HomeIntro />
    </SectionContainer>
  );
};

const HomePage = ({
  match: {
    params: { target }
  },
  location: { pathname, key }
}) => {
  const _onChange = useCallback((e, data) => {
    console.log(data);
  }, []);
  return (
    <LayoutR>
      <NavMain />
      <PageP className={s.page}>
        <IntroductionBox onChange={_onChange} />
        <SkillsBox onChange={_onChange} />
        <CarrerBox onChange={_onChange} />
        <WorksBox onChange={_onChange} />
        <Footer onChange={_onChange} />
      </PageP>
    </LayoutR>
  );
};

export default HomePage;
