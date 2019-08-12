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
import _ from 'lodash';
// import SceneSquardIntro from '../../Scene/SceneSquardIntro/SceneSquardIntro';
const SceneSquardIntro = React.lazy(() =>
  import('../../Scene/SceneSquardIntro/SceneSquardIntro')
);

const HomeIntro = () => {
  const ref = useRef(null);

  return (
    <div className={s.intro} ref={ref}>
      <h1>Welcome, 你好</h1>
      <h2>Introduction</h2>
      <p>I'm Zach Yu</p>
      <p>A Full-Stack developer with main focus on React and NodeJS</p>
      <a className="ui button black basic" href="" alt="">
        Github
      </a>
    </div>
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
        <section className={s.section}>
          <div className={['ui container'].join(' ')}>
            <HomeIntro />
          </div>
        </section>
        <section>
          <div className="ui container">
            <h2>Skills</h2>
            <SceneSquardIntro />
          </div>
        </section>
        <section>
          <div className="ui container">
            <h2>Works</h2>
          </div>
        </section>
        <section>
          <div className="ui container">
            <p>Copyright © ZachYu</p>
            <a
              target="_blank"
              href={`mailto:zachyu.tw@gmail.com?body=${encodeURI(
                'Hi Zach Yu:'
              )}`}
            >
              {' '}
              zachyu.tw@gmail.com
            </a>
          </div>
        </section>
      </PageP>
    </Layout>
  );
};

export default HomePage;
