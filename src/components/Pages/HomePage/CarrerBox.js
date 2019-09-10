import React from 'react';
import JobTimelineItem from '../../JobTimeline/JobTimelineItem/JobTimelineItem';
import SectionContainer from '../../Modules/SectionContainer/SectionContainer';
const CAREER = 'career';
const CarrerBox = () => {
  return (
    <SectionContainer id={CAREER}>
      <h2>Carrer</h2>
      <p>real-time data from my calendar</p>
      <div className="content">
        <JobTimelineItem.Items />
      </div>
    </SectionContainer>
  );
};

export default CarrerBox;
