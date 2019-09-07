import React, { useEffect, useRef, useCallback, useState } from 'react';
import Scene from 'scenejs';
import { kineticFrame, typing } from '@scenejs/effects';
import s from './SceneSquardIntro.module.css';
import _ from 'lodash';
import SceneStringItem from '../../Scene/SceneStringItem/SceneStringItem';
// import useIsScrolledIntoView from '../../../hooks/useIsScrolledIntoView';
import useIsScrolledIntoView from 'react-use-is-scrolled-into-view';
const GROUP_BY_TEXT_LENGTH = 7;
const SKILLS = [
  { name: 'javascript', linkUrl: '' },
  { name: 'react', linkUrl: '' },
  { name: 'react-hook', linkUrl: '' },
  { name: 'react-context', linkUrl: '' },
  { name: 'redux', linkUrl: '' },
  { name: 'react-testing-library', linkUrl: '' },
  { name: 'jest', linkUrl: '' },
  { name: 'scss', linkUrl: '' },
  { name: 'socketIO', linkUrl: '' },
  { name: 'css-module', linkUrl: '' },
  { name: 'semantic-ui', linkUrl: '' },
  { name: 'nodejs', linkUrl: '' },
  { name: 'express', linkUrl: '' },
  { name: 'mongoose', linkUrl: '' },
  { name: 'geomap', linkUrl: '' },
  { name: 'mapbox', linkUrl: 'https://lasfu.com' },
  { name: 'html5', linkUrl: '' },
  { name: 'webrtc', linkUrl: '' },
  { name: 'websocket', linkUrl: '' },
  { name: 'scenejs', linkUrl: '' },
  { name: 'rollup', linkUrl: '' },
  { name: 'webpack', linkUrl: '' },
  { name: 'google-colud-fuction', linkUrl: '' },
  { name: 'puppteer-cheerio', linkUrl: '' }
];
/**
 * @author zachyu.tw
 * @
 * @referenceFrom Daybrush codepen scenejs example
 * @see https://codepen.io/daybrush/pen/MMyORm
 *
 */
const moveItem = item => (startTime, endTime, left, top, rotate, scale) => {
  item.set({
    [`${startTime}, ${endTime}`]: kineticFrame({
      left: `${left}px`,
      top: `${top}px`
    }).set({
      transform: {
        rotate: `${rotate}deg`,
        scale
      }
    })
  });
};

const swagPosNeg = deg =>
  _.chain(deg * 2 + 1)
    .times(n => n - deg)
    .sample()
    .value();
const SceneSquardIntro = ({ skills = SKILLS }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isIntoView = useIsScrolledIntoView(containerRef, 'scenes');
  const [sScene, setScene] = useState(null);
  const initSceneElPosition = useCallback(ref => {
    const node = ref.current;
    let topLeftNum = 0;
    let topRightNum = 0;
    [...node.childNodes].forEach(div => {
      if (div.innerText.length > GROUP_BY_TEXT_LENGTH) {
        div.style.top = topLeftNum + 'px';
        topLeftNum = topLeftNum + div.offsetHeight;
      } else {
        div.style.top = topRightNum + 'px';
        topRightNum = topRightNum + div.offsetHeight;
      }
    });
  }, []);
  const movingEls = useCallback(move => {
    let totalHeight = 0;
    let topLeftNum = 0;
    let topRightNum = 0;
    let startTime = 0;
    let endTime = 0;
    [...ref.current.childNodes].forEach((div, index) => {
      if (div.innerText.length > GROUP_BY_TEXT_LENGTH) {
        move(startTime, endTime, 100, 200 - topLeftNum, swagPosNeg(2), 1.2);
        startTime = endTime + 1;
        endTime = startTime;
        topLeftNum = topLeftNum + div.offsetHeight;
      } else {
        move(startTime, endTime, -50, 200 - topRightNum, swagPosNeg(2), 1);
        startTime = endTime + 1;
        endTime = startTime;
        topRightNum = topRightNum + div.offsetHeight;
      }
    });
    totalHeight = Math.max(topRightNum, topLeftNum);
    containerRef.current.style.height = totalHeight + 14 * 2 + 'px';
    move(startTime, endTime, 0, 0, 0, 1);
  }, []);
  useEffect(() => {
    const scene = new Scene({ '.scene': {} }, { selector: true });
    const item = scene.getItem('.scene');
    initSceneElPosition(ref);
    movingEls(moveItem(item));
    scene.set(
      skills.reduce((config, { name }, index) => {
        config[`[data-typing=${name}]`] = {
          [index]: typing({ text: name, duration: 1 })
        };
        return config;
      }, {})
    );
    scene.setPlaySpeed(2);
    scene.setEasing('ease-in-out');
    scene.setIterationCount('1');

    scene.play();
    setScene(scene);
  }, []);
  useEffect(() => {
    if (sScene) {
      console.log(isIntoView);
      if (isIntoView) {
        sScene.load();
        sScene.play();
      } else {
        sScene.pause();
      }
    }
  }, [isIntoView]);

  return (
    <div
      ref={containerRef}
      className={s.sceneContainer}
      data-inview={isIntoView}
    >
      <div className={s.wrapper}>
        <div ref={ref} className="scene">
          {skills.map(item => {
            const { name } = item;
            return (
              <SceneStringItem
                onChange={(e, data) => {
                  console.log(data);
                }}
                key={name}
                item={item}
                name="skill"
                value={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
/**
 * @example
 *   const SceneSquardIntro = () => {
 *  useEffect(() => {
 *      const scene = new Scene({ '.scene': {} }, { selector: true });
 *      const item = scene.getItem('.scene');
 *      const move = moveItem(item);
 *      move(0, 0, 90, 115, 0, 5);
 *      move(1, 1, 90, 115, 0, 2);
 *      move(2, 3, 0, 115, 0, 1);
 *      move(4, 4.5, -100, 0, -90, 2);
 *      move(5.5, 6, -52, -18, -90, 1.6);
 *      move(7, 7.5, 30, 45, 0, 2);
 *      move(8.5, 9, 10, 30, 0, 3);
 *      move(10, 10.5, 28, 0, 0, 2.2);
 *      move(11.5, 12, 50, -35, 0, 1.65);
 *      move(13, 13.5, 35, -70, 0, 2);
 *      move(14.5, 18, 0, 0, 0, 1);
 *      scene.set({
 *          "[data-typing='i']": typing({ text: 'I ', duration: 1 }),
 *          "[data-typing='frontend']": {
 *              1: typing({ text: "'m Front-End", duration: 1 })
 *          },
 *          "[data-typing='engineer']": {
 *              1.5: typing({ text: 'Engineer', duration: 1 })
 *          },
 *          "[data-typing='with']": {
 *              3.3: typing({ text: 'with', duration: 0.5 })
 *          },
 *          "[data-typing='javascript']": {
 *              4.5: typing({ text: 'JavaScript', duration: 1 })
 *          },
 *          "[data-typing='typescript']": {
 *              6: typing({ text: 'TypeScript', duration: 1 })
 *          },
 *          "[data-typing='css']": {
 *              7.5: typing({ text: 'CSS', duration: 0.7 })
 *          },
 *          "[data-typing='nodejs']": {
 *              9: typing({ text: 'Node.js', duration: 1 })
 *          },
 *          "[data-typing='animation']": {
 *              10.5: typing({ text: 'Animation', duration: 1 })
 *          },
 *          "[data-typing='scenejs']": {
 *              12: typing({ text: 'Scene.js', duration: 1 })
 *          }
 *      });
 *      scene.setPlaySpeed(2);
 *      scene.setEasing('ease-in-out');
 *      scene.setIterationCount('1');
 *      scene.play();
 *  }, []);
 *  return (
 *      <div className={s.sceneContainer2}>
 *          <div className={s.wrapper}>
 *              <div className='scene'>
 *                  <a href='https://github.com/daybrush' target='_blank' data-typing='i' style={{ top: '0', left: '50px' }}>
 *                      I
 *                  </a>
 *                  <a href='https://github.com/daybrush' target='_blank' data-typing='frontend'>
 *                      'm Front-End
 *                  </a>
 *                  <a href='https://github.com/daybrush' target='_blank' data-typing='engineer'>
 *                      Engineer
 *                  </a>
 *                  <p data-typing='with'>with</p>
 *                  <p data-typing='javascript'>JavaScript</p>
 *                  <p data-typing='typescript'>TypeScript</p>
 *                  <p data-typing='css'>CSS</p>
 *                  <p data-typing='nodejs'>Node.js</p>
 *                  <p data-typing='animation'>Animation</p>
 *                  <a href='https://github.com/daybrush/scenejs' target='_blank' data-typing='scenejs'>
 *                      Scene.js
 *                  </a>
 *              </div>
 *          </div>
 *      </div>
 *  );};
 */

export default SceneSquardIntro;
