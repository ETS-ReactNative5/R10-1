import Speaker from './Speaker';
import React from 'react';

class SpeakerContainer extends React.Component {
  render() {
    return (
      <Speaker
        speaker={this.props.route.params.speakerId}
        navigation={this.props.navigation}
      />
    );
  }
}

export default SpeakerContainer;
