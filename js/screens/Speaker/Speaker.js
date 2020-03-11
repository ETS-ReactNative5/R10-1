import React from 'react';
import {View, Image, Linking} from 'react-native';
import CustomText from '../../components/CustomText/CustomText';
import styles from './styles';
import GradientButton from '../../components/GradientButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const Speaker = ({speaker, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <MaterialCommunityIcons
          name="close"
          color="white"
          size={25}
          style={{marginLeft: 10}}
          onPress={() => navigation.goBack()}
        />
        <CustomText style={styles.title}>About the Speaker</CustomText>
      </View>
      <View style={styles.textContainer}>
        <Image style={styles.image} source={{uri: `${speaker.image}`}} />
        <CustomText style={styles.name}>{speaker.name}</CustomText>
        <CustomText style={styles.bio}>{speaker.bio}</CustomText>

        <GradientButton
          text="Read more on Wikipedia"
          onPress={() => {
            Linking.canOpenURL(`${speaker.url}`)
              .then(supported => {
                if (!supported) {
                  console.log("Can't handle url: " + speaker.url);
                } else {
                  return Linking.openURL(`${speaker.url}`);
                }
              })
              .catch(err => console.error('An error occurred', err));
          }}
        />
      </View>
    </View>
  );
};

export default Speaker;

Speaker.propTypes = {
  speaker: PropTypes.object,
  navigation: PropTypes.object,
};
