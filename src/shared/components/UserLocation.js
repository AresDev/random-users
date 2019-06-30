import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';

class UserLocation extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const userDetail = this.props.user;
    const userLocation = {
      latitude: userDetail.location.coordinates.latitude,
      longitude: userDetail.location.coordinates.longitude
    };
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <Text>{`${userDetail.location.city}, ${userDetail.location.state}`}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: 200,
    height: 200
  },
  map: {
    flex: 1,
    width: 200,
    height: 200
  }

});


export default UserLocation;