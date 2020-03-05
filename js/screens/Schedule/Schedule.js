import React from 'react';
import moment from 'moment';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import {formatSessionData} from './../../lib/helper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

Item = ({session, navigation, faveIds}) => {
  // console.log(faveIds);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(session);
        navigation.navigate('Session', {sessionInfo: session});
      }}>
      <View>
        <Text>{session.title}</Text>
        <View style={styles.faveLocation}>
          <Text>{session.location}</Text>
          {faveIds.faveIds.includes(session.id) ? (
            <MaterialCommunityIcons name="heart" color="red" />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Schedule = ({navigation, sessions, faveIds}) => {
  const sortedSchedule = formatSessionData(sessions);
  console.log(sortedSchedule);

  return (
    <ScrollView>
      <View>
        <SectionList
          style={{}}
          sections={sortedSchedule}
          renderItem={({item}) => (
            <Item session={item} navigation={navigation} faveIds={faveIds} />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.scheduleTitle}>
              {moment(title).format('h:mm a')}
            </Text>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Schedule;
