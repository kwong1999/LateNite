import * as React from 'react';

import { View, Text, Button, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AsyncStorage} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Dulce',
    menuItem: 'Glazed Donut'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Ramen Kenjo',
    menuItem: 'Tonkatsu Ramen'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Honeybird',
    menuItem: 'Flaming Hot Chicken'
  },
];

function Item({ title, menuItem }) {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.item}>{menuItem}</Text>
    </View>
  );
}

export default class StorageTest extends React.Component {
  constructor(props) {
    super(props);
    this.setUsername();

  }

  async setUsername(){
    let names = ['eric', 'katie', 'chan', 'zade'];

    try {
      await AsyncStorage.setItem('my-name', 'Eric');
      await AsyncStorage.setItem('arrayOfNames', JSON.stringify(names))
    } catch (error) {
      console.log("error");
      // Error saving data
    }
  }

  render(){
    const { navigation } = this.props

    this.setUsername();

    // still a little confused about what key extractors are in this case
    // some notes: lists have a default data value that they grab data from
    // data is declared above and note the specific syntax of declaring it
    // flex is the size distribution of objects within a flex container
    // renderItem is a default required value that leads to a function call that renders the actual html,
    // renderItem calls the Item() function above, note the syntax to making the call
    // need to understand that item function call better
    return(
      <View style = {{flex: 1}}>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
        <SafeAreaView style = {{flex: 1}}>
          <FlatList style = {{flex: 1}}
            data={DATA}
            horizontal={true}
            renderItem={({ item }) => <Item title={item.title} menuItem={item.menuItem}/>}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </SafeAreaView>
        <View style = {{flex: 1, alignItems: 'center'}}>
          <Text>GGGGG</Text>
          <Button
              title="Press me"
              onPress={() => navigation.navigate('Details')}/>
        </View>
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


//katie can u explain what this does

// React.useLayoutEffect(() => {
//  navigation.setOptions({
//    headerTitleStyle: {
//          fontWeight: 'bold',
//        },
//  });
// }, [navigation]);
