import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Linking,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import Conduct from '../../components/Conduct';

export default About = ({conducts}) => {
  console.log(conducts[0]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./../../assets/images/r10_logo.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.para}>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Text>
          <Text style={styles.title}>Date & Venue</Text>
          <Text style={styles.para}>
            The R10 conference will take place on Saturday, December 8, 2020 in
            Vancouver, BC.
          </Text>
          <Text style={styles.title}>Code of Conduct</Text>
          {conducts.map(conduct => (
            // <View key={conduct.id}>
            <Conduct
              conductTitle={conduct.title}
              conductDescription={conduct.description}
            />
            /* <Text style={styles.conductTitle}>+{conduct.title}</Text> */
            /* <Text>{conduct.description}</Text> */
            // </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
