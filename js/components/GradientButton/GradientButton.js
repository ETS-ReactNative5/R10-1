import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import CustomText from '../../lib/customText/customText';
import styles from './styles';

const GradientButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.favesButton} onPress={onPress}>
      <LinearGradient
        colors={['#9963ea', '#8797D6']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 0.0}}
        style={styles.background}
      />
      <CustomText style={styles.buttonCustomText}>{text}</CustomText>
    </TouchableOpacity>
  );
};
export default GradientButton;

GradientButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};
