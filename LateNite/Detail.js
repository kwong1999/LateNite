import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AsyncStorage} from 'react-native';

export default class Detail extends React.Component{
  constructor(props) {
      super(props);
      this.state = {username: "gabba"};
      this.updateUsername();
  }


  async updateUsername(){
    try {
      console.log("Hello");
      let item = await AsyncStorage.getItem('my-name');

      let names = await AsyncStorage.getItem('arrayOfNames').then((value) => {
        const data = JSON.parse(value);
        console.log(data);
      });

      if(item != null)
      {
        this.setState({username: item});
      }
      else{
        this.setState({username: "No valid username found"});
      }
    }
    catch (error) {
      this.setState({username: "Error, did not work"});

    }
  }

  // can't update state in render()
  render(){
    const {username} = this.state;

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>{username}</Text>
        </View>
      );
  }
}
