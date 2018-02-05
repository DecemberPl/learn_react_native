import React, { Component } from 'react';
import { NavigationActions } from "react-navigation";
import {
  Text,
  View,
  Button,
  Alert
} from 'react-native';

export default class HomeScreen extends React.Component {
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