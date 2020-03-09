import React from 'react';
import Navigation from './Navigation';
import {createStackNavigator} from '@react-navigation/stack';
import Speaker from '../screens/Speaker';
const RootStack = createStackNavigator();
const RootStackScreens = props => (
  <RootStack.Navigator mode="modal" headerMode="none">
    <RootStack.Screen name="Main" component={Navigation} />
    <RootStack.Screen name="Speaker" component={Speaker} />
  </RootStack.Navigator>
);

export default RootStackScreens;
