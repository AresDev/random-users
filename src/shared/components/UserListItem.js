import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

class UserListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { picture, name, email } = this.props.item;
    return (
      <TouchableOpacity onPress={() => this.props.onPressItem()}>
        <View style={styles.container}>
          <Image
            style={styles.userImage}
            source={{ uri: picture.thumbnail }} />
          <View style={styles.userInfoContainer}>
            <Text style={styles.name}>{name.first} {name.last}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>

        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  userInfoContainer: {
    marginLeft: 10,
    flex: 4,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  userImage: {
    flex: 1,
    width: 40,
    height: 60,
    margin: 5
  },
  name: {
    flex: 1,
    fontSize: 30
  },
  email: {
    flex: 10,
    fontSize: 15,
    alignSelf: 'flex-start',
  },

});


export default UserListItem;