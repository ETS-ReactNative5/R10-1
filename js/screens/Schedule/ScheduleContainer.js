import Schedule from './Schedule';
import React, {Component} from 'react';
import {GET_ALL_SESSIONS} from '../../queries/queries';
import {Query} from '@apollo/react-components';
import Loader from '../../components/Loader';
import {FavesContext} from '../../context/FavesContext';

class ScheduleContainer extends Component {
  render() {
    return (
      <Query query={GET_ALL_SESSIONS}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return `Error! ${error.message}`;
          return (
            <FavesContext.Consumer>
              {faveIds => (
                <Schedule
                  navigation={this.props.navigation}
                  sessions={data.allSessions}
                  faveIds={faveIds.faveIds}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
