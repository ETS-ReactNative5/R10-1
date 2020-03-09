import React from 'react';
import ScheduleList from '../../components/ScheduleList';

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
