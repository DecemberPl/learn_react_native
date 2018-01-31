/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import axios from "axios";
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

class App extends Component<{}> {

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

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <App name='Rexxarr' />
        <App name='Jainaaaaa' />
        <App name='Valeera' />
        <Button  onPress={this.onPressLearnMore.bind(this)}
      title="Learn More"/>
      </View>
      
    );

  }

  onPressLearnMore(){
 
    Alert.alert("Function Without Argument");
    axios.get("http://192.168.4.151:8082/Qarah5_WebApp/api/user/termandcondition")
    .then(res => {
      const posts = res.data;
      Alert.alert(posts.TermandConditions);
      this.setState({ posts });
    });
    
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

