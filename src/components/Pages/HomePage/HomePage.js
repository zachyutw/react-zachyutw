import React, { useContext, useCallback, useRef, useEffect } from 'react';
import _ from 'lodash';
import ProejctContext, {
  withContext as withProjectContext
} from '../../../contexts/Project/ProjectContext';
import ReactMarkdown from 'react-markdown/with-html';
import { Link as MLink, Button } from '@material-ui/core';
import MailToLink from '../../Modules/MailToLink/MailToLink';

import LayoutR from '../../Layout/LayoutR/LayoutR';
import PageP from '../../Modules/PageP/PageP';
import s from './HomePage.module.css';
import SvgEffectTitle from '../../SvgEffect/SvgEffectTitle/SvgEffectTitle';
import ProjectItem from '../../Project/ProjectItem/ProjectItem';
import SceneSquardIntro from '../../Scene/SceneSquardIntro/SceneSquardIntro';
import NavMain from '../../Nav/NavMain/NavMain';
import SectionContainer from '../../Modules/SectionContainer/SectionContainer';
import JobTimelineItem from '../../JobTimeline/JobTimelineItem/JobTimelineItem';
const INTRODUCTION = 'introduction';
const SKILLS = 'skills';
const CAREER = 'career';
const WORKS = 'works';
const skillsMarkdown = ` 
 ## Tech Dtails
 ### Using modern technologies to build Mobile, Responsive web applications
  ### Advance React knowledage 
  * hooks
  * HOC
  * renderProp
  * router-control
  * form-control 
  * content api
  ### Advance Web Design
  * flex css3 property
  * transform animation
  * media responsive design
  * grid layout
  ### Cloud Computing
  * firebase
  * cloud function
  ### Advance NodeJS
  * publish Node Package
  * JWT OAuth from scratch
  * puppetteer, cheerio for crawler
  * socketIO
  * mongoose
  `;

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

const IntroductionBox = () => {
  return (
    <SectionContainer id={INTRODUCTION}>
      <HomeIntro />
    </SectionContainer>
  );
};
const SkillsBox = () => {
  return (
    <SectionContainer id={SKILLS}>
      <div>
        <h2>Skills</h2>
        <SceneSquardIntro />
        <ReactMarkdown source={skillsMarkdown} />
      </div>
    </SectionContainer>
  );
};
const CarrerBox = () => {
  return (
    <SectionContainer id={CAREER}>
      <h2>Carrer</h2>
      <p>Real-Time data from my calendar</p>
      <div className="content">
        <JobTimelineItem.Items />
      </div>
    </SectionContainer>
  );
};

const WorksBox = withProjectContext(() => {
  const {
    onLoad,
    state: { data }
  } = useContext(ProejctContext);

  useEffect(() => {
    onLoad({ actionType: 'getItemField' });
  }, []);
  return (
    <SectionContainer id={WORKS}>
      <h2>Works</h2>
      <div className={[s.works, 'content'].join(' ')}>
        {Object.entries(data).map(([key, project]) => (
          <ProjectItem key={key} {...project} name={key} />
        ))}
      </div>
      <div />
    </SectionContainer>
  );
});
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
        {/* <CameraUserMedia /> */}

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
