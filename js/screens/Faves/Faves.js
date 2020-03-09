import React from 'react';
import {Text} from 'react-native';
import ScheduleList from '../../components/ScheduleList';
import styles from './styles';

const Faves = ({sessions, navigation, faveIds}) => {
  console.log(navigation);
  return faveIds.length === 0 ? (
    <Text style={styles.text}>You haven't faved any sessions yet</Text>
  ) : (
    <ScheduleList
      sessions={sessions}
      faveIds={faveIds}
      navigation={navigation}
    />
  );
};

export default Faves;
