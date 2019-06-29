import React, { Component } from 'react';
import {Platform, TouchableHighlight, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });

class HomeView extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
      const { navigate } = this.props.navigation
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Hello world!!!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text>
            <TouchableHighlight
          onPress={() => navigate("Detail")}
          style={styles.button}>
          <Text
            style={styles.buttonText}>Screen One </Text>
        </TouchableHighlight> 
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',  
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    button: {
      alignSelf: 'stretch',
      marginLeft: 50,
      marginRight: 50,
      borderRadius: 5,
      height: 40,
      backgroundColor: '#7567B1',
      justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 16
    }
  });
  

export default HomeView;