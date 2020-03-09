import React from 'react';
import {FavesContext} from '../../context/FavesContext';
import Session from './Session';
import Loader from '../../components/Loader';
import {GET_SPEAKER} from '../../queries/queries';

import {Query} from '@apollo/react-components';

class SessionContainer extends React.Component {
  render() {
    return (
      <Query
        query={GET_SPEAKER}
        variables={{
          id: this.props.route.params.sessionInfo.speaker.id,
        }}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
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
