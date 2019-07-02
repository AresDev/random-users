import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { Pages } from '../settings/navigation';
import { displayName as appName } from '../../app.json';
import UserListItem from '../shared/components/UserListItem';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeView extends Component {
  static navigationOptions = {
    title: appName
  }

  constructor(props) {
    super(props);
    this.state = { 
      seed: 1,
      page: 1,
      users: [],
      isLoading: false,
      isRefreshing: false,
     };
  }

  async loadUsers(){
    const { users, seed, page } = this.state;
    this.setState({ isLoading: true });
    try {
      let response = await fetch(`https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`);
      let data = await response.json();
      if(data){
        this.setState({
          users: page === 1 ? data.results : [...users, ...data.results],
          isRefreshing: false,
          isLoading: false
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleRefresh = () => {
    this.setState({
      seed: this.state.seed + 1,
      isRefreshing: true,
    }, () => {
      this.loadUsers();
    });
  };

  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.loadUsers();
    });
  };

  componentDidMount() {
    this.loadUsers();
  }

  _onPressItem(userDetail) {
    const { navigate } = this.props.navigation;
    navigate(Pages.Detail, { userDetail });
  }

  render() {
    const { users, isLoading, isRefreshing } = this.state;

    if (!users && isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={({ item }) => <UserListItem onPressItem={() => this._onPressItem(item)} item={item}></UserListItem>}
          keyExtractor={({ login }, index) => login.uuid}
          refreshing={isRefreshing}
          onEndReached={this.handleLoadMore}
          onEndThreshold={0.5}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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