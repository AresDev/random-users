import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import UserLocation from '../shared/components/UserLocation';

class DetailView extends Component {
  static navigationOptions = ({ navigation }) => {
    const userDetail = navigation.getParam('userDetail', null);
    return {
      title: `${userDetail.name.first} ${userDetail.name.last}`,
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    const userDetail = navigation.getParam('userDetail', null);
    return (
      <View style={styles.container}>
        <Image style={styles.userImage}
          source={{ uri: userDetail.picture.large }} />
        <Text style={styles.welcome}>{userDetail.email}</Text>
        <UserLocation style={styles.map} user={userDetail}></UserLocation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  userImage: {
    flex: 1.5,
    resizeMode: "stretch",
    width: null, height: null
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  map: {
    flex: 1
  },

});


export default DetailView;