import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import RootStack from './navigation';
import {client} from './config/api';
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ApolloProvider>
    );
  }
}
