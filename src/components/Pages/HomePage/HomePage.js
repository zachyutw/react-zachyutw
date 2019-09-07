import React, {
  useContext,
  useCallback,
  useState,
  useRef,
  useEffect,
  useMemo
} from 'react';
import _ from 'lodash';
import useIsScrolledIntoView from 'react-use-is-scrolled-into-view';
import axios from 'axios';
import moment from 'moment';
import icsToJson from 'ics-to-json';
import ReactMarkdown from 'react-markdown/with-html';
import {
  Container,
  Link as MLink,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  StepContent,
  Chip,
  BottomNavigation,
  BottomNavigationAction,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import GlobalContext from '../../../contexts/Global/GlobalContext';
import LayoutR from '../../Layout/LayoutR/LayoutR';
import PageP from '../../Modules/PageP/PageP';
import s from './HomePage.module.css';
import SvgEffectTitle from '../../SvgEffect/SvgEffectTitle/SvgEffectTitle';

import faker from 'faker';
// import SectionP from '../../App/SectionP/SectionP';
// import CanvasEffectRaining from '../../CanvasEffect/CanvasEffectRaining/CanvasEffectRaining';
// import SceneSquardIntro from '../../Scene/SceneSquardIntro/SceneSquardIntro';

// const FOOTER = 'footer';
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
const mainNavs = [
  { href: '#' + INTRODUCTION, innerText: INTRODUCTION },
  { href: '#' + SKILLS, innerText: SKILLS },
  { href: '#' + CAREER, innerText: CAREER },
  { href: '#' + WORKS, innerText: WORKS }
];

const FETCH_DATA_URL =
  'https://us-central1-soy-haven-237204.cloudfunctions.net/cors/api/webtextfile';
const WEBPAGE_URL =
  'https://us-central1-soy-haven-237204.cloudfunctions.net/cors/api/webpage';

const SceneSquardIntro = React.lazy(() =>
  import('../../Scene/SceneSquardIntro/SceneSquardIntro')
);
const githubProjects = [
  {
    name: 'lasfu',
    url: 'https://lasfu.com'
  },
  {
    name: 'react-zachyutw',
    url: 'https://zachyutw.github.io/react-zachyutw'
  },
  {
    name: 'Roro ',
    url: 'https://dev.roro.one'
  },
  {
    name: 'react-use-is-scrolled-into-view',
    url: 'https://github.com/zachyutw/react-use-is-scrolled-into-view'
  },
  {
    name: 'with-item-events',
    url: 'https://github.com/zachyutw/with-item-events'
  },
  {
    name: 'zach-local-storage-safe',
    url: 'https://github.com/zachyutw/zach-local-storage-safe'
  },
  {
    name: 'askmirrorFramework',
    url: 'https://github.com/zachyutw/askmirrorFramework'
  }
];

const Pargraph = ({ text = '', maxLength = 10 }) => {
  const [isMore, setIsMore] = useState(text.length > maxLength);
  const _onClick = useCallback(() => {
    setIsMore(value => !value);
  }, []);
  useEffect(() => {
    setIsMore(text.length > maxLength);
  }, [text]);

  return (
    <React.Fragment>
      {text.length > maxLength && isMore ? text.slice(0, maxLength) : text}
      {isMore && <span onClick={_onClick}>...</span>}
    </React.Fragment>
  );
};

const MainNav = ({ children, className }) => {
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
const ProjectItem = ({ name, imageUrl: propImageUrl, url }) => {
  const [imageUrl, setImageUrl] = useState(propImageUrl);
  const [description, setDescription] = useState('');
  const [readme, setReadme] = useState('');
  useEffect(() => {
    if (url) {
      axios
        .post(WEBPAGE_URL, { url })
        .then(res => {
          const meta = res.data.meta || {};
          console.log(res.data);
          setImageUrl(() => {
            let imageUrl = null;

            if (meta['og:image']) {
              imageUrl = meta['og:image'];
            } else if (meta['twitter:image:src']) {
              imageUrl = meta['twitter:image:src'];
            } else if (meta['twitter:image']) {
              imageUrl = meta['twitter:image'];
            }
            return imageUrl;
          });

          setDescription(() => {
            let description = '';
            if (meta['og:description']) {
              description = meta['og:description'];
            } else if (meta['twitter:description']) {
              description = meta['twitter:description'];
            } else if (meta['description']) {
              description = meta['description'];
            }
            return description;
          });
        })
        .catch(err => {
          console.log(err);
        });

      if (new RegExp('github.com', 'g').test(url)) {
        axios
          .post(FETCH_DATA_URL, {
            url:
              url.replace('github.com', 'raw.githubusercontent.com') +
              '/master/README.md'
          })
          .then(res => {
            console.log(res.data);
          });
      }
    }
  }, [url]);

  return (
    <Card>
      <CardActionArea>
        {imageUrl ? (
          <CardMedia
            style={{ height: '15rem' }}
            image={imageUrl}
            title={name}
          />
        ) : (
          <Skeleton variant="rect" width="100%" height={118} />
        )}

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Pargraph text={description} maxLength={150} />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component={MLink} href={url} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    // <div className={s.project} style={{ backgroundImage: `url(${imageUrl})` }}>
    //     <Button component={MLink} rel='noopener noreferrer' href={url} target='_blank'>
    //         {name}
    //     </Button>
    // </div>
  );
};

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

const Footer = () => {
  return (
    <section className={s.section}>
      <Container>
        <p>{`Copyright © ${process.env.REACT_APP_AUTHER_NAME}`}</p>
        <MailToLink
          send={process.env.REACT_APP_CONTACT_EMAIL}
          body="Hi Zach Yu:"
        >
          zachyu.tw@gmail.com
        </MailToLink>
      </Container>
    </section>
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
      <a className="ui button black basic" href="" alt="">
        Github
      </a>
      <div>
        <h2>About</h2>
        <p>
          I am a coding lover who live in Vancouver. Have experices with
          building complex web application. Fouthur more,{' '}
        </p>
      </div>
    </div>
  );
};

const MOMENT_INPUT_FORMAT = 'YYYYMMDD';
const MOMENT_OUTPUT_FORMAT = 'YYYY-MM';
const PeriodLocationIcon = ({ startDate, endDate, location, summary }) => {
  return (
    <div className={s.pearid_location_icon}>
      <h4>{summary}</h4>
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

      <a>{location}</a>
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
                  float="right"
                  className={s.steplabel}
                  StepIconComponent={PeriodLocationIcon}
                  StepIconProps={{ startDate, endDate, location, summary }}
                />
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
const SectionContainer = ({ children, id }) => {
  const ref = useRef(null);
  const isIntoView = useIsScrolledIntoView(ref, false);
  const { onChange } = useContext(GlobalContext);
  useEffect(
    e => {
      onChange(e, { id, actionType: 'sectionIntoView', isIntoView });
    },
    [isIntoView, id]
  );
  return (
    <section ref={ref} id={id} className={s.section} data-inview={isIntoView}>
      <Container>{children}</Container>
    </section>
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
        <JobTimeline />
      </div>
    </SectionContainer>
  );
};
const WorksBox = () => {
  return (
    <SectionContainer id={WORKS}>
      <h2>Works</h2>
      <div className={[s.works, 'content'].join(' ')}>
        {githubProjects.map(project => (
          <ProjectItem key={project.name} {...project} />
        ))}
      </div>
      <div />
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
      <MainNav />
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
