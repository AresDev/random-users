import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';
import DetailListItem from './DetailListItem';

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

    const initialRegion={
      latitude: Number(userDetail.location.coordinates.latitude),
      longitude: Number(userDetail.location.coordinates.longitude),
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }

    return (
        <View style={styles.mapContainer}>
          <MapView style={styles.map}
            initialRegion={initialRegion}
          />
          <View style={styles.countryContainer}>
            <Text style={styles.country}>{ userDetail.location.postcode}</Text>
            <Text style={styles.country}>{ userDetail.location.street}</Text>
            <Text style={styles.country}>{`${userDetail.location.city}, ${userDetail.location.state}`}</Text>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  map: {
    flex: 1,
    width: 100,
    height: 100
  },
  countryContainer: {
    marginLeft: 10,
    flex: 2
  },
  country: {
    marginLeft: 10,
    fontSize: 18
  },
  location: {
    fontSize: 22,
  }
});


export default UserLocation;