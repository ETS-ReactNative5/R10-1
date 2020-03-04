import Schedule from './Schedule';
import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from '@apollo/react-components';
import {ActivityIndicator} from 'react-native';

const GET_ALL_SESSIONS = gql`
  {
    allSessions {
      id
      description
      location
      speaker {
        bio
        image
        name
        url
      }
      title
      startTime
    }
  }
`;

class ScheduleContainer extends Component {
  render() {
    return (
      <Query query={GET_ALL_SESSIONS}>
        {({loading, error, data}) => {
          if (loading) return <ActivityIndicator />;
          if (error) return `Error! ${error.message}`;
          return (
            console.log(data),
            (
              <Schedule
                navigation={this.props.navigation}
                sessions={data.allSessions}
              />
            )
          );
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
