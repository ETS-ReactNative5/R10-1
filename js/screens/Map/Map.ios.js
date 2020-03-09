import React from 'react';
import MapView, {Marker} from 'react-native-maps';

const Maps = () => {
  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <MapView
      style={{height: '100%', width: '100%'}}
      initialRegion={{
        latitude: 49.26376,
        longitude: -123.14833,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker
        coordinate={{latitude: 49.26376, longitude: -123.14833}}
        image={require('../../assets/images/map_pin.png')}
      />
    </MapView>
  );
};

export default Maps;
