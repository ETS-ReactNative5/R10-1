import gql from 'graphql-tag';

export const GET_SPEAKER = gql`
  query($id: ID!) {
    Speaker(id: $id) {
      image
      name
      bio
      url
    }
  }
`;

export const GET_ALL_SESSIONS = gql`
  {
    allSessions {
      id
      description
      location
      speaker {
        id
      }
      title
      startTime
    }
  }
`;
