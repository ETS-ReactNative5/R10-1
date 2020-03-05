import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Speaker = ({speaker, navigation}) => {
  console.log(speaker);
  return (
    // <View style={styles.container}>
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>About the Speaker</Text>
      </View>
      <View style={styles.textContainer}>
        <Image style={styles.image} source={{uri: `${speaker.image}`}} />
        <Text style={styles.name}>{speaker.name}</Text>
        <Text style={styles.bio}>{speaker.bio}</Text>
        <TouchableOpacity
          style={styles.wikiButton}
          onPress={() => {
            //link url
          }}>
          <Text style={styles.buttonText}>Read More on Wikipedia</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Speaker;
