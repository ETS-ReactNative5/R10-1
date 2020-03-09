import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import styles from './styles';

Item = ({session, navigation, faveIds}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        session.speaker
          ? navigation.navigate('Session', {sessionInfo: session})
          : null;
      }}>
      <View style={styles.container}>
        <Text style={styles.title}>{session.title}</Text>
        <View style={styles.faveLocation}>
          <Text style={styles.location}>{session.location}</Text>
          {faveIds.includes(session.id) ? (
            <MaterialCommunityIcons name="heart" color="red" />
          ) : null}
        </View>
      </View>
    </TouchableHighlight>
  );
};
Item.propTypes = {
  navigation: PropTypes.object,
  session: PropTypes.object,
  faveIds: PropTypes.array,
};

export default Item;
