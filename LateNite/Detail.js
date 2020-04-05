import * as React from 'react';
import { View, Text, Button, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AsyncStorage} from 'react-native';

function Item({ title, menuItem }) {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.item}>{menuItem}</Text>
    </View>
  );
}

//Detail class
export default class Detail extends React.Component{
  constructor(props) {
      super(props);
      this.state = {username: "gabba"};
      this.state = {arr: []};
      this.state = {r: ""}

      this.updateUsername();
  }
  


  async updateUsername(){
    try {
      console.log("Hello");
      let item = await AsyncStorage.getItem('my-name');

      let names = await AsyncStorage.getItem('arrayOfNames').then((value) => {
        this.state.arr = JSON.parse(value);
        this.state.r = this.state.arr[0].id;
        //console.log(data);
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
    this.updateUsername();
    return(
    	<View style={{flex: 1}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>{username}</Text>
         <Text>{this.state.r} </Text>
        </View>
        <SafeAreaView style = {{flex: 1}}>
          <FlatList style = {{flex: 1}}
            data={this.state.arr}
            horizontal={true}
            renderItem={({ item }) => <Item title={item.title} menuItem={item.menuItem}/>}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </SafeAreaView>
        </View>

      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 250
  },
  title: {
    fontSize: 16
  },
  item:{
    fontSize: 12
  }
});

