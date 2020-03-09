import React from 'react';
import ScheduleList from '../../components/ScheduleList';
import PropTypes from 'prop-types';

const Schedule = ({navigation, sessions, faveIds}) => {
  return (
    <ScheduleList
      sessions={sessions}
      navigation={navigation}
      faveIds={faveIds}
    />
  );
};

export default Schedule;

Schedule.propTypes = {
  navigation: PropTypes.object,
  sessions: PropTypes.array,
  faveIds: PropTypes.array,
};
