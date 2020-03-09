import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import styles from './styles';
import GradientButton from '../../components/GradientButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Speaker = ({speaker, navigation}) => {
  console.log(speaker);
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
        <Text style={styles.title}>About the Speaker</Text>
      </View>
      <View style={styles.textContainer}>
        <Image style={styles.image} source={{uri: `${speaker.image}`}} />
        <Text style={styles.name}>{speaker.name}</Text>
        <Text style={styles.bio}>{speaker.bio}</Text>

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
