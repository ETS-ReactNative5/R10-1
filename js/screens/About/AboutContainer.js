import React from 'react';
import About from './About';
import {Query} from '@apollo/react-components';
import gql from 'graphql-tag';
import Loader from '../../components/Loader';

const GET_CONDUCTS = gql`
  {
    allConducts {
      id
      description
      title
      order
    }
  }
`;
class AboutContainer extends React.Component {
  render() {
    return (
      <Query query={GET_CONDUCTS}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return `Error: ${error.message}`;
          return <About conducts={data.allConducts} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
