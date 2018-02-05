/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { NavigationActions } from "react-navigation";
import axios from 'axios';
import {StackNavigator} from 'react-navigation';
//import HomeScreen from './src/navigation/screen/HomeScreen';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Button,
  Alert
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends React.Component {

  static navigationOptions = {
    title: 'Welcome'
  };
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {

    let display = this.state.isShowingText ? this.props.name : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View>
    
    <Button title="Go to Chat Screen"
    onPress={() => navigate('ChatScreen')}
  />
  </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button title="Go to Home Screen"
         onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

 const RootNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  //LotsOfGreetings:{screen: LotsOfGreetings},
  ChatScreen:{screen: ChatScreen}},
  {
    initialRouteName: 'ChatScreen',
  });

export default class LotsOfGreetings extends Component {
  constructor(props) {
  super(props);
  this.state = { navigation: this.props.navigation } ;
  }


  render() {
    //const { navigate } = this.props.navigation;
    //<Button title="Go to Jane's profile" onPress={() =>this.state.navigation.navigate('Home')}/>
   //<Button title="Go to Jane's profile" onPress={() => navigation('Home')}/>
    return (
     // <View style={{alignItems: 'center'}}>
       // <App name='Rexxarr' />
       // <App name='Jainaaaaa' />
      //  <App name='Valeera' />
       // <Button  onPress={this.onPressLearnMore.bind(this)}  title="Learn More"/>
      //  <Button  onPress={this.onPressLearnMore.bind(this)}  title="To App 1"/>
      //  <Button title="Go to next" onPress={this.onPressLearnMore.bind(this)}/>
      // <Button title="Go to Jane's profile" onPress={()=>this.state.navigation.navigate('Home')}/>
     // </View>
     
       <RootNavigator />
    
    );

  }

  onPressLearnMore(){
    //const { navigate } = this.props.navigation;
    //Alert.alert("Function Without Argument");
    axios.get("http://192.168.4.151:8082/Qarah5_WebApp/api/user/termandcondition")
    .then(res => {
      const posts = res.data;
     // Alert.alert(posts.TermandConditions);
      this.setState({ posts });
    });
    Alert.alert(this.state.navigation);
    
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
});

