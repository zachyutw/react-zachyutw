import React from 'react';
import SectionContainer from '../../Modules/SectionContainer/SectionContainer';
import SceneSquardIntro from '../../Scene/SceneSquardIntro/SceneSquardIntro';
import Markdown from '../../Modules/Markdown/Markdown';
import advanceSkillsMd from './advanceSkills.md';
const SKILLS = 'skills';
const SkillsBox = () => {
  return (
    <SectionContainer id={SKILLS}>
      <div>
        <h2>Skills</h2>
        <SceneSquardIntro />
        <Markdown asyncSource={advanceSkillsMd} />
      </div>
    </SectionContainer>
  );
};

export default SkillsBox;
