import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import UserLocation from '../shared/components/UserLocation';
import DetailListItem from '../shared/components/DetailListItem';
import Camera from '../shared/components/Camera';

class DetailView extends Component {
  static navigationOptions = ({ navigation }) => {
    const userDetail = navigation.getParam('userDetail', null);
    return {
      title: `${userDetail.name.first} ${userDetail.name.last}`,
    };
  };
  
  constructor(props) {
    super(props);
    this.state = {
      showCamera : false
    };
  }

  componentDidMount(){
    const { navigation } = this.props;
    const userDetail = navigation.getParam('userDetail', null);
    this.setState({
      pictureSource: userDetail.picture.large
    })
  }

  onPictureTaken(pictureUri){

    this.setState({
      showCamera : false,
      pictureSource: pictureUri
    })
  }

  changePictureButtonPressed(){
    this.setState({
      showCamera : true
    })
  }

  render() {
    const { navigation } = this.props;
    const userDetail = navigation.getParam('userDetail', null);

    const camera = <Camera onPictureTaken={ (pictureUri) => this.onPictureTaken(pictureUri) } />;
    if(this.state.showCamera)
      return camera;
    return (
      <View style={styles.container}>
          <Image style={styles.userImage} source={{ uri: this.state.pictureSource }} />
          <TouchableHighlight style={styles.changePictureButton} onPress={() => this.changePictureButtonPressed()}>
                <Text style={styles.changePictureText}>Change Picture</Text>
          </TouchableHighlight>
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
    flex: 3,
    resizeMode: "stretch",
    width: null, 
    height: null
  },
  detailText: {
    fontSize: 15,
  },
  changePictureText:{
    alignSelf: 'center'
  },
  map: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  changePictureButton:{
    justifyContent:'center',
    borderRadius: 50,
    height:25,
    width:100,
    backgroundColor: '#FFFFFF',
    position:'absolute',
    top: 200,
    zIndex: 100,
    alignSelf: 'flex-end',
  }

});


export default DetailView;