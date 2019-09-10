import React, { useRef } from 'react';
import s from './HomeIntro.module.css';
import SvgEffectTitle from '../../SvgEffect/SvgEffectTitle/SvgEffectTitle';
import { Link as MLink, Button } from '@material-ui/core';
const HomeIntro = () => {
  const ref = useRef(null);
  return (
    <div className={s.intro} ref={ref}>
      <h1>Welcome, To My Page</h1>
      <h2>Introduction</h2>
      <div className="svgTitle">
        <SvgEffectTitle />
      </div>
      <p>I'm Zach Yu</p>
      <p>A Full-Stack developer with main focus on React and NodeJS </p>
      <Button
        component={MLink}
        variant="outlined"
        href={process.env.REACT_APP_AUTHOR_GITHUB}
        alt=""
      >
        Github
      </Button>

      <div>
        <h2>About</h2>
        <p>
          I am a coding lover who live in Vancouver. Have experices with
          building complex web application. Fouthur more,{' '}
        </p>
        <MLink href={process.env.REACT_APP_CV}>current resume</MLink>
      </div>
    </div>
  );
};

export default HomeIntro;
