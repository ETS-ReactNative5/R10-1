import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {SectionList} from 'react-native';
import CustomText from '../CustomText/CustomText';
import ScheduleListItem from '../ScheduleListItem';
import {formatSessionData} from './../../lib/helper';
import styles from './styles';

const ScheduleList = ({navigation, sessions, faveIds}) => {
  const sortedSchedule = formatSessionData(sessions);

  return (
    <SectionList
      style={{}}
      sections={sortedSchedule}
      renderItem={({item}) => (
        <ScheduleListItem
          session={item}
          navigation={navigation}
          faveIds={faveIds}
        />
      )}
      renderSectionHeader={({section: {title}}) => (
        <CustomText style={styles.scheduleTitle}>
          {moment(title).format('h:mm a')}
        </CustomText>
      )}
    />
  );
};

ScheduleList.propTypes = {
  navigation: PropTypes.object,
  sessions: PropTypes.array,
  faveIds: PropTypes.array,
};

export default ScheduleList;
