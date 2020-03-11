import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import CustomText from '../../components/CustomText/CustomText';
import styles from './styles';
import Conduct from '../../components/Conduct';
import PropTypes from 'prop-types';

export default About = ({conducts}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./../../assets/images/r10_logo.png')}
        />
        <View style={styles.textContainer}>
          <CustomText style={styles.para}>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </CustomText>
          <CustomText style={styles.title}>Date & Venue</CustomText>
          <CustomText style={styles.para}>
            The R10 conference will take place on Saturday, December 8, 2020 in
            Vancouver, BC.
          </CustomText>
          <CustomText style={styles.title}>Code of Conduct</CustomText>
          {conducts.map(conduct => (
            <Conduct
              key={conduct.id}
              conductTitle={conduct.title}
              conductDescription={conduct.description}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
About.propTypes = {
  conducts: PropTypes.array,
  key: PropTypes.string,
  conductTitle: PropTypes.string,
  conductDescription: PropTypes.string,
};
