import React from 'react';
import {TouchableOpacity, Animated, Easing, Text} from 'react-native';
import CustomText from '../../lib/CustomText/CustomText';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Conduct extends React.Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
    this.opacityValue = new Animated.Value(0);
    this.state = {
      open: false,
    };
  }

  animate = () => {
    this.opacityValue.setValue(0);
    this.spinValue.setValue(0);
    const createAnimation = (value, duration, easing) => {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
      });
    };
    Animated.parallel([
      createAnimation(this.opacityValue, 1000, Easing.ease),
      createAnimation(this.spinValue, 500, Easing.linear),
    ]).start();
  };

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });
    const opacity = this.opacityValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    return (
      <>
        <TouchableOpacity
          style={styles.conduct}
          onPress={() => {
            this.setState({open: !this.state.open});
            this.animate();
          }}>
          <Animated.View
            style={{
              transform: [{rotate: spin}],
            }}>
            <MaterialCommunityIcons
              style={styles.conductTitle}
              name={this.state.open ? 'minus' : 'plus'}
            />
          </Animated.View>
          <CustomText style={styles.conductTitle}>
            {this.props.conductTitle}
          </CustomText>
        </TouchableOpacity>
        {this.state.open ? (
          <TouchableOpacity
            onPress={() => {
              this.animate();
              this.setState({open: !this.state.open});
            }}>
            <Animated.View style={{...styles.conductDescription, opacity}}>
              <CustomText> {this.props.conductDescription}</CustomText>
            </Animated.View>
          </TouchableOpacity>
        ) : null}
      </>
    );
  }
}
