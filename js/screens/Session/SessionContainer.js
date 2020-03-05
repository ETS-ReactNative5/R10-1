import React from 'react';
import {FavesContext} from '../../context/FavesContext';
import Session from './Session';
import gql from 'graphql-tag';
import {ActivityIndicator} from 'react-native';
import {Query} from '@apollo/react-components';

const GET_SPEAKER = gql`
  query($id: ID!) {
    Speaker(id: $id) {
      image
      name
      bio
      url
    }
  }
`;
class SessionContainer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Query
        query={GET_SPEAKER}
        variables={{id: this.props.route.params.sessionInfo.speaker.id}}>
        {({loading, error, data}) => {
          console.log(data);
          if (loading) return <ActivityIndicator />;
          if (error) return `Error: ${error.message}`;
          return (
            <FavesContext.Consumer>
              {({faveIds, addFave, removeFave}) => (
                <Session
                  navigation={this.props.navigation}
                  route={this.props.route}
                  faveIds={faveIds}
                  addFave={addFave}
                  speakerInfo={data.Speaker}
                  removeFave={removeFave}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
export default SessionContainer;
// export default Session;
