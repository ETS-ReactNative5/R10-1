import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {Header} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GradientHeader = props => (
  console.log(props),
  (
    <View style={{backgroundColor: 'white', overflow: 'hidden'}}>
      <LinearGradient
        colors={['#cf392a', '#9963ea']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 0.0}}
        style={[StyleSheet.absoluteFill, {height: '100%', width: '100%'}]}
      />
      <Header {...props} />
    </View>
  )
);

const MenuButton = props => {
  console.log(props);
  //if android && if schedule screen
  // Platform.OS === 'android' ? (
  return (
    <MaterialCommunityIcons
      name={Platform.OS === 'android' ? 'menu' : 'chevron-left'}
      color="white"
      size={25}
      style={{marginLeft: 10}}
      onPress={() => props.navigation.toggleDrawer()}
    />
  );
  // ) : null;
};

export const sharedScreenOptions = props => ({
  headerBackTitleVisible: false,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },

  ...Platform.select({
    android: {headerLeft: () => <MenuButton navigation={props.navigation} />},
  }),
});
