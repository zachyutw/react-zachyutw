import React, { useContext, useEffect } from 'react';
import ProejctContext, {
  withContext as withProjectContext
} from '../../../contexts/Project/ProjectContext';
import ProjectItem from '../../Project/ProjectItem/ProjectItem';
import SectionContainer from '../../Modules/SectionContainer/SectionContainer';
import s from './WorksBox.module.css';
const WORKS = 'works';

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

export default WorksBox;
