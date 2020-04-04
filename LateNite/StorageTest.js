import * as React from 'react';

import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AsyncStorage} from 'react-native';


export default class StorageTest extends React.Component {
  constructor(props) {
    super(props);
    this.setUsername();

  }

  async setUsername(){
    try {
      await AsyncStorage.setItem('my-name', 'Eric');
    } catch (error) {
      console.log("error");
      // Error saving data
    }
  }

  render(){
    const { navigation } = this.props

    this.setUsername();

    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>GGGGG</Text>
        <Button
            title="Press me"
            onPress={() => navigation.navigate('Details')}/>
      </View>
    );
  }
}

//katie can u explain what this does

// React.useLayoutEffect(() => {
//  navigation.setOptions({
//    headerTitleStyle: {
//          fontWeight: 'bold',
//        },
//  });
// }, [navigation]);
