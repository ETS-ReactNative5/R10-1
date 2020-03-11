import React from 'react';
import moment from 'moment';
import {View, Image, TouchableOpacity} from 'react-native';
import CustomText from '../../components/CustomText/CustomText';
import styles from './styles';
import GradientButton from '../../components/GradientButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const Session = ({
  route,
  navigation,
  speakerInfo,
  faveIds,
  addFave,
  removeFave,
}) => {
  const {sessionInfo} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.faveLocation}>
          <CustomText style={styles.location}>
            {sessionInfo.location}
          </CustomText>
          {faveIds.includes(sessionInfo.id) ? (
            <MaterialCommunityIcons name="heart" color="red" />
          ) : null}
        </View>
        <CustomText style={styles.title}>{sessionInfo.title}</CustomText>
        <CustomText style={styles.startTime}>
          {moment(sessionInfo.startTime).format('h:mm a')}
        </CustomText>
        <CustomText style={styles.description}>
          {sessionInfo.description}
        </CustomText>
        {speakerInfo ? (
          <View>
            <CustomText style={styles.presentedBy}>Presented By: </CustomText>
            <View>
              <TouchableOpacity
                style={styles.presenterContainer}
                onPress={() => {
                  navigation.navigate('Speaker', {
                    speakerId: speakerInfo,
                  });
                }}>
                <Image
                  style={styles.speakerImage}
                  source={{uri: `${speakerInfo.image}`}}
                />
                <CustomText style={styles.speakerName}>
                  {speakerInfo.name}
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
      {faveIds.includes(sessionInfo.id) ? (
        <GradientButton
          text="Remove from Faves"
          onPress={() => {
            const faveId = sessionInfo.id;
            removeFave(faveId);
          }}
        />
      ) : (
        <GradientButton
          text="Add to Faves"
          onPress={() => {
            const faveId = sessionInfo.id;
            addFave(faveId);
          }}
        />
      )}
    </View>
  );
};

export default Session;

Session.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
  speakerInfo: PropTypes.object,
  faveIds: PropTypes.array,
  addFave: PropTypes.func,
  removeFave: PropTypes.func,
};
