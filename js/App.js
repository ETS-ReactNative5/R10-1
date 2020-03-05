import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import RootStack from './navigation';
import FavesProvider from './context/FavesContext';
import {client} from './config/api';
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
