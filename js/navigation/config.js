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
  let {navigation, route} = props;

  return (
    <MaterialCommunityIcons
      name={route.name === 'Session' ? 'chevron-left' : 'menu'}
      color="white"
      size={25}
      style={{marginLeft: 10}}
      onPress={() => navigation.toggleDrawer()}
    />
  );
};

export const sharedScreenOptions = props => {
  console.log(props);
  return {
    headerBackTitleVisible: false,
    header: props => <GradientHeader {...props} />,
    headerStyle: {
      backgroundColor: 'transparent',
    },

    ...Platform.select({
      android: {
        headerLeft: () => (
          <MenuButton route={props.route} navigation={props.navigation} />
        ),
      },
    }),
  };
};
