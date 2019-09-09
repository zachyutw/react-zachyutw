import React, { useEffect, useContext } from 'react';
import EventContext, {
  withContext
} from '../../../contexts/Event/EventContext';
import { Stepper, Step, StepLabel, StepContent, Chip } from '@material-ui/core';
import moment from 'moment';
import s from './JobTimelineItem.module.css';
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
const JobTimelineItems = withContext(() => {
  const {
    onLoad,
    state: {
      data: { items = [] }
    }
  } = useContext(EventContext);

  useEffect(() => {
    onLoad({ actionType: 'getItems' });
  }, []);

  return (
    <div>
      <Stepper orientation="vertical">
        {items.map(
          ({ summary, startDate, endDate, location, description }, index) => (
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
          )
        )}
      </Stepper>
    </div>
  );
});

const JobTimelineItem = ({
  summary,
  startDate,
  endDate,
  location,
  description,
  ...rest
}) => {
  return (
    <Step active>
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
};
JobTimelineItem.Items = JobTimelineItems;
export default JobTimelineItem;
