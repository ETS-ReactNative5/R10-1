import React from 'react';
import CustomText from '../../components/CustomText/CustomText';
import ScheduleList from '../../components/ScheduleList';
import styles from './styles';
import PropTypes from 'prop-types';

const Faves = ({sessions, navigation, faveIds}) => {
  return faveIds.length === 0 ? (
    <CustomText style={styles.text}>
      You haven't faved any sessions yet
    </CustomText>
  ) : (
    <ScheduleList
      sessions={sessions}
      faveIds={faveIds}
      navigation={navigation}
    />
  );
};

export default Faves;

Faves.propTypes = {
  sessions: PropTypes.array,
  faveIds: PropTypes.array,
  navigation: PropTypes.object,
};
