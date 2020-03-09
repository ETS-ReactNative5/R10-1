import Faves from './Faves';
import React from 'react';
import {FavesContext} from '../../context/FavesContext';
import Loader from '../../components/Loader';
import {GET_ALL_SESSIONS} from '../../queries/queries';
import {Query} from '@apollo/react-components';

class FavesContainer extends React.Component {
  render() {
    return (
      <Query query={GET_ALL_SESSIONS}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return `Error: ${error.message}`;
          return (
            <FavesContext.Consumer>
              {({faveIds}) => {
                const favesSessionIds = data.allSessions.filter(session =>
                  faveIds.includes(session.id),
                );

                return (
                  <Faves
                    sessions={favesSessionIds}
                    faveIds={faveIds}
                    navigation={this.props.navigation}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
export default FavesContainer;
