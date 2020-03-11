import React from 'react';
import styles from './styles';
import {Text} from 'react-native';

export default class CustomText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={{...styles.defaultFont, ...this.props.style}}>
        {this.props.children}
      </Text>
    );
  }
}
