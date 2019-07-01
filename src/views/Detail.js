import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import UserLocation from '../shared/components/UserLocation';
import DetailListItem from '../shared/components/DetailListItem';

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
         <ScrollView>
          <DetailListItem title='Email'>
            <Text style={styles.detailText}>{userDetail.email}</Text>
          </DetailListItem>
          <DetailListItem title='Gender'>
            <Text style={styles.detailText}>{userDetail.gender}</Text>
          </DetailListItem>
          <DetailListItem title='Phone'>
            <Text style={styles.detailText}>{userDetail.phone}</Text>
          </DetailListItem>
          <DetailListItem title='Cellphone'>
            <Text style={styles.detailText}>{userDetail.cell}</Text>
          </DetailListItem>
          <DetailListItem title='Location'>
            <UserLocation style={styles.map} user={userDetail}></UserLocation>
          </DetailListItem>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#F5FCFF',
    margin:10
  },
  userImage: {
    flex: 1.5,
    resizeMode: "stretch",
    width: null, height: null
  },
  detailText: {
    fontSize: 20,
  },
  map: {
    flex: 1
  },

});


export default DetailView;