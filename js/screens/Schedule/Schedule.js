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

Item = ({session, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Session');
      }}>
      <View>
        <Text>{session.title}</Text>
        <Text>{session.location}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Schedule = ({navigation, sessions}) => {
  const sortedSchedule = formatSessionData(sessions);
  console.log(sortedSchedule);

  return (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <SectionList
          style={{}}
          sections={sortedSchedule}
          renderItem={({item}) => (
            <Item session={item} navigation={navigation} />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text>{moment(title).format('h:mm a')}</Text>
          )}
        />

        <TouchableOpacity
          onPress={
            () => {
              navigation.navigate('Session');
            } // because name="Session" in navigation index.js
          }>
          <Text>some text</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={
            () => {
              navigation.navigate('Speaker');
            } // because name="Session" in navigation index.js
          }>
          <Text>Got to Speaker</Text>
        </TouchableOpacity>
        <Text>Schedule Screen</Text>
      </View>
    </ScrollView>
  );
};

export default Schedule;
