import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import CustomText from '../../lib/CustomText/CustomText';
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
        <CustomText style={styles.title}>{session.title}</CustomText>
        <View style={styles.faveLocation}>
          <CustomText style={styles.location}>{session.location}</CustomText>
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
