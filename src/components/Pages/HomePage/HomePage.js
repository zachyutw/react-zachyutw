import React, {
  useContext,
  useCallback,
  useState,
  useRef,
  useEffect,
  useMemo
} from 'react';
import Layout from '../../App/Layout/Layout';
import PageP from '../../App/PageP/PageP';
import SectionP from '../../App/SectionP/SectionP';
import s from './HomePage.module.css';
import ReactMarkdown from 'react-markdown/with-html';
import _ from 'lodash';
import SvgEffectTitle from '../../SvgEffect/SvgEffectTitle/SvgEffectTitle';
import {
  Container,
  Box,
  Link as MLink,
  Stepper,
  Step,
  StepLabel,
  Typography,
  StepContent,
  Chip
} from '@material-ui/core';

import axios from 'axios';
// import CanvasEffectRaining from '../../CanvasEffect/CanvasEffectRaining/CanvasEffectRaining';
// import SceneSquardIntro from '../../Scene/SceneSquardIntro/SceneSquardIntro';
import moment from 'moment';
import icsToJson from 'ics-to-json';

const FETCH_DATA_URL =
  'https://us-central1-soy-haven-237204.cloudfunctions.net/getData';
const SCEENSHOT_URL =
  'https://us-central1-soy-haven-237204.cloudfunctions.net/screenshot';
const screenshotSiteUrl = url =>
  `https://us-central1-soy-haven-237204.cloudfunctions.net/hellowWord?url=${encodeURIComponent(
    url
  )}`;

const SceneSquardIntro = React.lazy(() =>
  import('../../Scene/SceneSquardIntro/SceneSquardIntro')
);
const githubProjects = [
  {
    name: 'react-google-journey',
    imageUrl: null,
    url: 'https://zachyutw.github.io/react-google-journey/'
  }
];

const ProjectItem = ({ name, imageUrl: propImageUrl, url }) => {
  const [imageUrl, setImageUrl] = useState(propImageUrl);
  useEffect(() => {
    axios.post(SCEENSHOT_URL, { url }).then(res => {
      setImageUrl(() => {
        return res.data.jpegBase64;
      }).catch(err => ({ err }));
    });
  }, []);

  return (
    <div className={s.project} style={{ backgroundImage: `url(${imageUrl})` }}>
      <h4>Github</h4>
      <button className="ui button black">{name}</button>
    </div>
  );
};

const MailToLink = ({ send, body, innerText, children }) => {
  return (
    <MLink target="_blank" href={`mailto:${send}?body=${encodeURI(body)}`}>
      {innerText}
      {children}
    </MLink>
  );
};
const skillsMarkdown = ` ### Using modern technologies to build Mobile, Responsive web applications
  ### Advance React knowledage 
  * hooks
  * HOC
  * renderProp
  * router-control
  * form-control 
  * content api
  ### Advance Web Design
  * new Flex property
  * transform animation
  * media responsive
  * 
  `;

const Footer = () => {
  return (
    <Box component="section" className={s.section}>
      <Container>
        <p>{`Copyright © ${process.env.REACT_APP_AUTHER_NAME}`}</p>
        <MailToLink
          send={process.env.REACT_APP_CONTACT_EMAIL}
          body="Hi Zach Yu:"
        >
          zachyu.tw@gmail.com
        </MailToLink>
      </Container>
    </Box>
  );
};
const MOMENT_FORMAT = 'YYYY-MM-DD';
const RORO_COMPANY = '997 Seymour St Vancouver, BC';
const timeline = [
  {
    start: moment('2019-03-01').format(MOMENT_FORMAT),
    end: moment('2019-05-01').format(MOMENT_FORMAT),
    location: RORO_COMPANY,
    geo: { lat: 49.2789453, lon: -123.1241788 }
  }
];

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
      <a className="ui button black basic" href="" alt="">
        Github
      </a>
    </div>
  );
};

const IntroductionBox = () => {
  return (
    <Box component="section" className={s.section}>
      <Container>
        <HomeIntro />
      </Container>
    </Box>
  );
};
const MOMENT_INPUT_FORMAT = 'YYYYMMDD';
const MOMENT_OUTPUT_FORMAT = 'YYYY-MM';
const PeriodLocationIcon = ({ startDate, endDate, location }) => {
  return (
    <div className={s.icon}>
      <div className={s.timeperiod}>
        <Chip
          label={moment(startDate, MOMENT_INPUT_FORMAT).format(
            MOMENT_OUTPUT_FORMAT
          )}
        />
        <Chip
          label={moment(endDate, MOMENT_INPUT_FORMAT).format(
            MOMENT_OUTPUT_FORMAT
          )}
        />
      </div>
      <a href="#">{location}</a>
    </div>
  );
};
const JobTimeline = () => {
  const [asycCareerTimeline, setAsyncCareerTimeline] = useState('');
  useEffect(() => {
    axios
      .post(FETCH_DATA_URL, {
        url:
          'https://calendar.google.com/calendar/ical/rpu9kvk1bku9o6a1htdgedohjs%40group.calendar.google.com/private-f1d1cc50b32c4949b5a4bcda4c8e7be5/basic.ics'
      })
      .then(res => {
        console.log(res.data);
        setAsyncCareerTimeline(() => {
          const icsData = res.data.data.replace(/\\/g, ``);
          console.log(icsData);
          return icsData;
        });
      });
  }, []);

  const items = useMemo(() => {
    return icsToJson(asycCareerTimeline).sort(
      (a = {}, b = {}) => a.startDate - b.startDate
    );
  }, [asycCareerTimeline]);
  return (
    <div>
      <Stepper orientation="vertical">
        {items.map(
          ({ summary, startDate, endDate, location, description }, index) => {
            return (
              <Step key={index} active>
                <StepLabel
                  StepIconComponent={PeriodLocationIcon}
                  StepIconProps={{ startDate, endDate, location }}
                >
                  {summary}
                </StepLabel>
                <StepContent>
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </StepContent>
              </Step>
            );
          }
        )}
      </Stepper>
    </div>
  );
};
const SkillsBox = () => {
  return (
    <Box component="section" className={s.section}>
      <Container>
        <div>
          <h2>Skills</h2>
          <SceneSquardIntro />
        </div>
        <div>
          <h2>About</h2>
          <p>
            I am a coding lover who live in Vancouver. Have experices with
            building complex web application. Fouthur more,{' '}
          </p>
        </div>
      </Container>
    </Box>
  );
};

const CarrerBox = () => {
  return (
    <Box component="section" className={s.section}>
      <Container style={{ padding: '3rem' }}>
        <h2>Carrer</h2>
        <p>Real-Time data from my calendar</p>
        <div className="content">
          <JobTimeline />
        </div>
      </Container>
    </Box>
  );
};
const HomePage = ({
  match: {
    params: { target }
  },
  location: { pathname, key }
}) => {
  return (
    <Layout>
      <PageP className={s.page}>
        {/* <CameraUserMedia /> */}
        <IntroductionBox />
        <SkillsBox />
        <CarrerBox />
        <Box component="section" className={s.section}>
          <Container>
            <h2>Works</h2>
            <div className="content" />

            <ReactMarkdown source={skillsMarkdown} />
            {githubProjects.map(project => (
              <ProjectItem key={project.name} {...project} />
            ))}
            <div />
          </Container>
        </Box>
        <Footer />
      </PageP>
    </Layout>
  );
};

export default HomePage;
