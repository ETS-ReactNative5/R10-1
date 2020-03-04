import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Schedule from '../screens/Schedule';
import Session from '../screens/Session';
import Maps from '../screens/Map';
import About from '../screens/About';
import Faves from '../screens/Faves';
import {sharedScreenOptions} from './config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ScheduleStack = createStackNavigator();

const ScheduleStackScreens = props => {
  return (
    <ScheduleStack.Navigator
      initialRouteName="Schedule"
      screenOptions={sharedScreenOptions}>
      <ScheduleStack.Screen
        name="Schedule"
        component={Schedule}
        options={{
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
      <ScheduleStack.Screen
        name="Session"
        component={Session}
        options={{
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
    </ScheduleStack.Navigator>
  );
  //every screen introduced inside stack.navigator has access to prop called navigation just like react router. schedule and session both have prop called navigation that will allow access to their properties and methods
};

const FavesStack = createStackNavigator();

const FavesStackScreens = props => {
  return (
    <FavesStack.Navigator
      initialRouteName="Faves"
      screenOptions={sharedScreenOptions}>
      <ScheduleStack.Screen
        name="Faves"
        component={Faves}
        options={{
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
      <ScheduleStack.Screen
        name="Session"
        component={Session}
        options={{
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
    </FavesStack.Navigator>
  );
};

const MapStack = createStackNavigator();

const MapStackScreens = props => {
  return (
    <MapStack.Navigator screenOptions={sharedScreenOptions}>
      <MapStack.Screen
        name="Map"
        component={Maps}
        options={{
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
    </MapStack.Navigator>
  );
};

const AboutStack = createStackNavigator();

const AboutStackScreens = props => {
  return (
    <AboutStack.Navigator screenOptions={sharedScreenOptions}>
      <AboutStack.Screen
        name="About"
        component={About}
        options={{
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
    </AboutStack.Navigator>
  );
};

const BottomTabNav = createBottomTabNavigator();
const BottomTabNavScreens = props => {
  return (
    <BottomTabNav.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#CACACA',
        labelStyle: {
          fontSize: 11,
          fontFamily: 'Montserrat',
        },
        style: {
          backgroundColor: 'black',
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Schedule') {
            iconName = focused ? 'calendar-blank' : 'calendar-blank-outline';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-outline';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Faves') {
            iconName = focused ? 'heart' : 'heart-outline';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'About') {
            iconName = focused ? 'information' : 'information-outline';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        },
      })}>
      <BottomTabNav.Screen name="Schedule" component={ScheduleStackScreens} />
      <BottomTabNav.Screen name="Map" component={MapStackScreens} />

      <BottomTabNav.Screen name="Faves" component={FavesStackScreens} />

      <BottomTabNav.Screen name="About" component={AboutStackScreens} />
    </BottomTabNav.Navigator>
  );
};

export default BottomTabNavScreens;
