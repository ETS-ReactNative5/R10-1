import React from 'react';
import moment from 'moment';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {addFave, removeFave} from '../../context/FavesContext';

const Session = ({
  route,
  navigation,
  speakerInfo,
  faveIds,
  addFave,
  removeFave,
}) => {
  const {sessionInfo} = route.params;
  console.log(sessionInfo.id);
  console.log(faveIds);
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.faveLocation}>
          <Text style={styles.location}>{sessionInfo.location}</Text>
          {faveIds.includes(sessionInfo.id) ? (
            <MaterialCommunityIcons name="heart" color="red" />
          ) : null}
        </View>
        <Text style={styles.title}>{sessionInfo.title}</Text>
        <Text style={styles.startTime}>
          {moment(sessionInfo.startTime).format('h:mm a')}
        </Text>
        <Text style={styles.description}>{sessionInfo.description}</Text>
        {speakerInfo ? (
          <View>
            <Text style={styles.presentedBy}>Presented By: </Text>
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
                <Text style={styles.speakerName}>{speakerInfo.name}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
      {faveIds.includes(sessionInfo.id) ? (
        <TouchableOpacity
          style={styles.favesButton}
          onPress={() => {
            const faveId = sessionInfo.id;
            removeFave(faveId);
            console.log(faveIds);
          }}>
          <Text style={styles.buttonText}>Remove from Faves</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.favesButton}
          onPress={() => {
            const faveId = sessionInfo.id;
            addFave(faveId);
            console.log(faveIds);
          }}>
          <Text style={styles.buttonText}>Add to Faves</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Session;
