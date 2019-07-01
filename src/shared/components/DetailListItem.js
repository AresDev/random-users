import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

class DetailListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>{ this.props.title }</Text>
          <View style={styles.detailContainer}>
            {this.props.children}
          </View>

        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10
  },
  detailContainer: {
    flex: 4,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title:{
    flex:1,
    fontSize: 20,
    fontWeight: 'bold',
  }
});


export default DetailListItem;